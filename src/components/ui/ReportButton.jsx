import React from 'react';
import { AlertCircle } from 'lucide-react';
import './ReportButton.css';

const ReportButton = ({ onClick }) => {
  return (
    <button className="report-fab glow-button" onClick={onClick}>
      <div className="btn-glow"></div>
      <span className="btn-content">
        <AlertCircle className="fab-icon" />
        <span className="fab-text">Report Incident</span>
      </span>
    </button>
  );
};

export default ReportButton;