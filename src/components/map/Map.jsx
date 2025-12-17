// src/components/MapView.jsx

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Circle, Popup } from 'react-leaflet';
import L from 'leaflet';
import IncidentMarker from './IncidentMarker'; 
import RiskZoneOverlay from './RiskZoneOverlay';
import MapLegend from './MapLegend';
import { demoIncidents } from '../../data/demoIncidents';
import { calculateRiskZones } from '../../utils/riskCalculator';
import 'leaflet/dist/leaflet.css';
import './MapView.css'

// Fix for default marker icons in React-Leaflet
// (Leaflet's default icons don't load properly in Vite/Webpack)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapView = () => {
  // Lagos city center coordinates [latitude, longitude]
  const lagosCenter = [6.5244, 3.3792];
  const initialZoom = 11; // City-level view

  // User's current location (mocked for demo - in real app, get from geolocation API)
  const userLocation = [6.5244, 3.3792];

  const [incidents] = useState(demoIncidents);
  const [riskZones, setRiskZones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    const zones = calculateRiskZones(incidents);
    setRiskZones(zones);
    console.log('Risk zones calculated:', zones); // Debug
  }, [incidents]);

  // Custom icon for user location marker (blue pulsing dot)
  const userLocationIcon = L.divIcon({
    className: 'user-location-marker',
    html: '<div class="user-location-dot"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10], // Center the icon
  });

  return (
    <div className="map-wrapper">

      {/* Loading overlay */}
      {isLoading && (
        <div className="map-loading">
          <div className="loading-spinner"></div>
        </div>
      )}
      {/* Main map container - takes full viewport */}
      <MapLegend />


      <MapContainer
        center={lagosCenter}
        zoom={initialZoom}
        zoomControl={true} // Show zoom +/- buttons
        style={{ height: '100vh', width: '100%' }}
        className="leaflet-map"
      >
        {/* Dark theme tile layer from CartoDB */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          maxZoom={19}
        />

        {/* Risk zones (render BEFORE markers so markers appear on top) - NEW */}
        {riskZones.map((zone) => (
          <RiskZoneOverlay key={zone.id} zone={zone} />
        ))}

        {/* User location marker with pulsing animation */}
        <Marker position={userLocation} icon={userLocationIcon}>
          <Popup>Your Location</Popup>
        </Marker>

        {/* Optional: Add a subtle circle around user location for better visibility */}
        <Circle
          center={userLocation}
          radius={500} // 500 meters
          pathOptions={{
            color: '#3b82f6', // Blue
            fillColor: '#3b82f6',
            fillOpacity: 0.1,
            weight: 2,
          }}
        />
        {/* Plot all incident markers (NEW) */}
        {incidents.map((incident) => (
          <IncidentMarker key={incident.id} incident={incident} />
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;