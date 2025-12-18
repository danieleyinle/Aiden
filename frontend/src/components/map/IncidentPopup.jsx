// src/components/map/IncidentPopup.jsx

import './IncidentPopup.css';

const IncidentPopup = ({ incident }) => {
  // Format timestamp
  const formatTimestamp = (timestamp) => {
    const minutes = Math.floor((Date.now() - timestamp) / (1000 * 60));
    if (minutes < 60) return `${minutes} min ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hr ago`;
    return `${Math.floor(hours / 24)} days ago`;
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

  // Get urgency level for styling
  const getUrgencyClass = (timestamp) => {
    const hoursAgo = (Date.now() - timestamp) / (1000 * 60 * 60);
    if (hoursAgo < 1) return 'urgency-critical';
    if (hoursAgo < 3) return 'urgency-high';
    return 'urgency-medium';
  };

  return (
    <div className={`incident-popup-container ${getUrgencyClass(incident.timestamp)}`}>
      {/* Header with icon and type */}
      <div className="incident-popup-header">
        <span className="incident-popup-icon">{getIncidentIcon(incident.type)}</span>
        <div className="incident-popup-title">
          <h3 className="incident-type">{incident.type.toUpperCase()}</h3>
          <span className="incident-time">{formatTimestamp(incident.timestamp)}</span>
        </div>
      </div>

      {/* Description */}
      <div className="incident-popup-body">
        <p className="incident-description">{incident.description}</p>
      </div>

      {/* Footer with metadata */}
      <div className="incident-popup-footer">
        <div className="incident-meta">
          {incident.verified ? (
            <span className="incident-verified">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Verified
            </span>
          ) : (
            <span className="incident-unverified">Unverified</span>
          )}
        </div>
        <button className="incident-directions">
          Get Directions
        </button>
      </div>
    </div>
  );
};

export default IncidentPopup;