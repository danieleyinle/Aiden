// src/components/map/MapLegend.jsx

import './MapLegend.css';

const MapLegend = () => {
  return (
    <div className="map-legend">
      <h4 className="legend-title">Risk Levels</h4>
      
      <div className="legend-items">
        {/* Incident markers */}
        <div className="legend-section">
          <span className="legend-label">Incidents</span>
          <div className="legend-item">
            <div className="legend-marker marker-critical"></div>
            <span className="legend-text">Critical (&lt;1hr)</span>
          </div>
          <div className="legend-item">
            <div className="legend-marker marker-high"></div>
            <span className="legend-text">Recent (1-3hr)</span>
          </div>
          <div className="legend-item">
            <div className="legend-marker marker-medium"></div>
            <span className="legend-text">Active (3-6hr)</span>
          </div>
          <div className="legend-item">
            <div className="legend-marker marker-old"></div>
            <span className="legend-text">Old (6+hr)</span>
          </div>
        </div>

        {/* Risk zones */}
        <div className="legend-section">
          <span className="legend-label">Zones</span>
          <div className="legend-item">
            <div className="legend-zone zone-high"></div>
            <span className="legend-text">High Risk (3+ incidents)</span>
          </div>
          <div className="legend-item">
            <div className="legend-zone zone-medium"></div>
            <span className="legend-text">Caution (2+ incidents)</span>
          </div>
        </div>

        {/* User location */}
        <div className="legend-section">
          <div className="legend-item">
            <div className="legend-user"></div>
            <span className="legend-text">Your Location</span>
          </div>
        </div>
      </div>

      {/* Stats footer */}
      <div className="legend-footer">
        <div className="legend-stat">
          <span className="stat-number">13</span>
          <span className="stat-label">Active Reports</span>
        </div>
        <div className="legend-stat">
          <span className="stat-number">2</span>
          <span className="stat-label">Risk Zones</span>
        </div>
      </div>
    </div>
  );
};

export default MapLegend;