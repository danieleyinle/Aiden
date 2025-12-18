// src/components/map/RiskZoneOverlay.jsx

import { Circle, Popup } from 'react-leaflet';
import './RiskZoneOverlay.css';

const RiskZoneOverlay = ({ zone }) => {
  // Color and style based on severity
  const getZoneStyle = (severity) => {
    if (severity === 'high') {
      return {
        color: '#ef4444',        
        fillColor: '#ef4444',    
        fillOpacity: 0.15,       
        weight: 2,
        className: 'risk-zone-high'
      };
    } else {
      return {
        color: '#f59e0b',        
        fillColor: '#f59e0b',    
        fillOpacity: 0.1,
        weight: 2,
        className: 'risk-zone-medium'
      };
    }
  };

  const style = getZoneStyle(zone.severity);

  return (
    <>
      {/* Main risk zone circle */}
      <Circle
        center={zone.center}
        radius={zone.radius}
        pathOptions={style}
      >
        <Popup className="risk-zone-popup">
          <div className="zone-popup-content">
            <div className="zone-popup-header">
              <span className="zone-icon">
                {zone.severity === 'high' ? '🚨' : '⚠️'}
              </span>
              <span className="zone-severity">
                {zone.severity === 'high' ? 'HIGH RISK ZONE' : 'CAUTION ZONE'}
              </span>
            </div>
            <p className="zone-description">
              {zone.count} incidents reported in this area
            </p>
            <div className="zone-incidents">
              {zone.incidents.slice(0, 3).map((incident, idx) => (
                <div key={idx} className="zone-incident-item">
                  • {incident.type}: {incident.description.substring(0, 40)}...
                </div>
              ))}
              {zone.count > 3 && (
                <div className="zone-more">
                  +{zone.count - 3} more incidents
                </div>
              )}
            </div>
          </div>
        </Popup>
      </Circle>

      {/* Outer warning circle for high-risk zones */}
      {zone.severity === 'high' && (
        <Circle
          center={zone.center}
          radius={zone.radius * 1.5}
          pathOptions={{
            color: '#ef4444',
            fillColor: 'transparent',
            fillOpacity: 0,
            weight: 1,
            dashArray: '10, 10',
            className: 'risk-zone-outer'
          }}
        />
      )}
    </>
  );
};

export default RiskZoneOverlay;