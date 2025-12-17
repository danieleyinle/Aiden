 // src/pages/Dashboard.jsx

import React, { useState } from 'react';
import MapView from '../components/map/Map';
import './Dashboard.css';
import ReportButton from '../components/ui/ReportButton';
import ReportModal from '../components/ui/ReportModal';

const Dashboard = () => {
  const [isReportOpen, setIsReportOpen] = useState(false);

  return (
    <div className="dashboard">
      {/* Top header bar */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="logo-section">
            <span className="logo-icon">🛡️</span>
            <h1 className="logo-text">AIDEN</h1>
          </div>
          <div className="header-status">
            <span className="status-dot"></span>
            <span className="status-text">Live Monitoring</span>
          </div>
        </div>
      </header>

      {/* Main map area */}
      <main className="dashboard-main">
        <MapView />
      </main>

      {/* Floating report button + modal */}
      <ReportButton onClick={() => setIsReportOpen(true)} />
      <ReportModal isOpen={isReportOpen} onClose={() => setIsReportOpen(false)} />
    </div>
    
  );
};

export default Dashboard;