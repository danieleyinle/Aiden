// src/utils/riskCalculator.js

/**
 * Calculate distance between two coordinates in kilometers
 */
const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

/**
 * Calculate risk zones based on incident clustering
 * Returns array of zones with center, radius, severity, and incident count
 */
export const calculateRiskZones = (incidents) => {
  // Only consider incidents from last 6 hours
  const sixHoursAgo = Date.now() - (6 * 60 * 60 * 1000);
  const recentIncidents = incidents.filter(
    incident => incident.timestamp > sixHoursAgo
  );

  const zones = [];
  const processed = new Set();

  recentIncidents.forEach((incident, i) => {
    if (processed.has(i)) return;

    // Find nearby incidents within 1km radius
    const nearby = [];
    recentIncidents.forEach((other, j) => {
      if (i === j || processed.has(j)) return;
      
      const distance = calculateDistance(
        incident.lat,
        incident.lng,
        other.lat,
        other.lng
      );

      if (distance < 1) { // Within 1km
        nearby.push({ incident: other, index: j });
      }
    });

    // If 2+ nearby incidents, create a risk zone
    if (nearby.length >= 1) { // 2+ total (1 + nearby)
      const allIncidents = [incident, ...nearby.map(n => n.incident)];
      
      // Calculate center point (average of all incidents)
      const centerLat = allIncidents.reduce((sum, inc) => sum + inc.lat, 0) / allIncidents.length;
      const centerLng = allIncidents.reduce((sum, inc) => sum + inc.lng, 0) / allIncidents.length;

      // Determine severity based on count and recency
      let severity = 'medium';
      const count = allIncidents.length;
      const hasVeryRecent = allIncidents.some(
        inc => Date.now() - inc.timestamp < 60 * 60 * 1000 // < 1 hour
      );

      if (count >= 3 || (count >= 2 && hasVeryRecent)) {
        severity = 'high';
      }

      zones.push({
        id: `zone-${zones.length}`,
        center: [centerLat, centerLng],
        radius: 800, // 800 meters
        severity: severity, // 'high' or 'medium'
        count: count,
        incidents: allIncidents
      });

      // Mark all incidents in this cluster as processed
      processed.add(i);
      nearby.forEach(n => processed.add(n.index));
    }
  });

  return zones;
};

/**
 * Check if user is near any danger zones
 * Returns alert info if within danger radius
 */
export const checkProximityAlert = (userLat, userLng, incidents) => {
  const zones = calculateRiskZones(incidents);
  
  for (const zone of zones) {
    const distance = calculateDistance(
      userLat,
      userLng,
      zone.center[0],
      zone.center[1]
    );

    // Alert if within 2km of high-risk zone or 1km of medium-risk
    const alertRadius = zone.severity === 'high' ? 2 : 1;
    
    if (distance < alertRadius) {
      return {
        alert: true,
        distance: distance,
        severity: zone.severity,
        count: zone.count,
        message: `${zone.count} incidents reported ${distance.toFixed(1)}km from your location`
      };
    }
  }

  return { alert: false };
};