// src/components/MapView.jsx

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Circle, Popup } from 'react-leaflet';
import L from 'leaflet';

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

  // Custom icon for user location marker (blue pulsing dot)
  const userLocationIcon = L.divIcon({
    className: 'user-location-marker',
    html: '<div class="user-location-dot"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10], // Center the icon
  });

  return (
    <div className="map-wrapper">
      {/* Main map container - takes full viewport */}
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
      </MapContainer>
    </div>
  );
};

export default MapView;