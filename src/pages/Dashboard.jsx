 // src/pages/Dashboard.jsx

import MapView from '../components/map/Map';
import './Dashboard.css';

const Dashboard = () => {
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

      {/* Floating report button */}
      <button className="report-fab">
        <span className="fab-icon">📍</span>
        <span className="fab-text">Report Incident</span>
      </button>
    </div>
  );
};

export default Dashboard;