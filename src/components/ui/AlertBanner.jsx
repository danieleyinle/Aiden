import React, { useEffect, useState } from 'react';
import { AlertOctagon, X, BellRing } from 'lucide-react';
import './AlertBanner.css';

const AlertBanner = ({ 
  message = "Emergency Alert: High risk activity detected in your current zone.", 
  type = 'danger', 
  onClose 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger slide-in animation on mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!message) return null;

  return (
    <div className={`alert-banner-container ${isVisible ? 'show' : ''} alert-${type}`}>
      <div className="alert-glass-wrapper">
        <div className="alert-content">
          <div className="alert-icon-wrapper">
            <AlertOctagon className="alert-icon" />
          </div>
          <div className="alert-text-content">
            <span className="alert-label">URGENT NOTIFICATION</span>
            <p className="alert-message">{message}</p>
          </div>
        </div>
        
        <button className="alert-close-btn" onClick={onClose}>
          <X size={20} />
        </button>
      </div>
      <div className="alert-progress-bar"></div>
    </div>
  );
};

export default AlertBanner;