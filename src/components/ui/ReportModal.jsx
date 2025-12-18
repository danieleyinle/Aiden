import React, { useState } from 'react';
import { X, MapPin, ShieldAlert, Send } from 'lucide-react';
import Button from './Button';
import './ReportModal.css';

const ReportModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    type: '',
    location: '',
    description: '',
    urgency: 'medium'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting incident:", formData);
    
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content glass-card">
        <div className="modal-header">
          <div className="header-title">
            <ShieldAlert className="title-icon" />
            <h2>Report Incident</h2>
          </div>
          <button className="close-btn" onClick={onClose}><X /></button>
        </div>

        <form onSubmit={handleSubmit} className="report-form">
          <div className="input-group">
            <label>Incident Type</label>
            <select 
              value={formData.type} 
              onChange={(e) => setFormData({...formData, type: e.target.value})}
              className="glass-input"
              required
            >
              <option value="">Select Type...</option>
              <option value="banditry">Banditry / Attack</option>
              <option value="kidnapping">Attempted Kidnapping</option>
              <option value="roadblock">Illegal Roadblock</option>
              <option value="suspicious">Suspicious Movement</option>
            </select>
          </div>

          <div className="input-group">
            <label>Location Details</label>
            <div className="input-with-icon">
              <MapPin className="input-icon" />
              <input 
                type="text" 
                placeholder="e.g., Kaduna-Abuja Express, near KM 20"
                className="glass-input"
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Description (Short)</label>
            <textarea 
              placeholder="What did you see? Stay safe while reporting."
              className="glass-input"
              rows="3"
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <div className="modal-actions">
            <Button variant="secondary" onClick={onClose}>Cancel</Button>
            <Button 
              type="submit" 
              variant="danger" 
              icon={Send}
            >
              Submit Report
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportModal;