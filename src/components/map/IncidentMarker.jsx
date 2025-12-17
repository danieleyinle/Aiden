// src/components/map/IncidentMarker.jsx

import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import IncidentPopup from './IncidentPopup';
import './IncidentMarker.css';

const IncidentMarker = ({ incident }) => {
  // Calculate how old the incident is (in hours)
  const getIncidentAge = (timestamp) => {
    return (Date.now() - timestamp) / (1000 * 60 * 60); // hours
  };

  // Get color based on age
  const getMarkerColor = (timestamp) => {
    const hoursAgo = getIncidentAge(timestamp);
    if (hoursAgo < 1) return '#ef4444'; // Critical red (< 1 hour)
    if (hoursAgo < 3) return '#f59e0b'; // Warning amber (1-3 hours)
    if (hoursAgo < 6) return '#fbbf24'; // Caution yellow (3-6 hours)
    return '#64748b'; // Old gray (6+ hours)
  };

  // Get icon emoji based on incident type
  const getIncidentIcon = (type) => {
    const icons = {
      robbery: '⚠️',
      kidnapping: '🚨',
      roadblock: '🚧',
      suspicious: '👁️'
    };
    return icons[type] || '📍';
  };

  // Format timestamp for display
  const formatTimestamp = (timestamp) => {
    const minutes = Math.floor((Date.now() - timestamp) / (1000 * 60));
    if (minutes < 60) return `${minutes} min ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hr ago`;
    return `${Math.floor(hours / 24)} days ago`;
  };

  // Create custom marker icon
  const markerColor = getMarkerColor(incident.timestamp);
  const markerIcon = getIncidentIcon(incident.type);
  const age = getIncidentAge(incident.timestamp);
  
  const customIcon = L.divIcon({
    className: 'custom-incident-marker',
    html: `
      <div class="marker-container ${age < 1 ? 'pulse-marker' : ''}">
        <div class="marker-pin" style="background-color: ${markerColor};">
          <span class="marker-icon">${markerIcon}</span>
        </div>
        <div class="marker-shadow"></div>
      </div>
    `,
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -40]
  });

  return (
    <Marker 
      position={[incident.lat, incident.lng]} 
      icon={customIcon}
    >
      <Popup 
        className="incident-popup-wrapper"
        maxWidth={300}
        minWidth={280}
      >
        <IncidentPopup incident={incident} />
      </Popup>
    </Marker>
  );
};

export default IncidentMarker;