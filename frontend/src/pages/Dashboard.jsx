import React, { useState, useEffect } from 'react';
import MapView from '../components/map/Map';
import './Dashboard.css';
import ReportButton from '../components/ui/ReportButton';
import ReportModal from '../components/ui/ReportModal';
// Import the API service
import { fetchUsers } from '../services/api'; 

const Dashboard = () => {
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [users, setUsers] = useState([]); // State to hold database users
  const [loading, setLoading] = useState(true);

  // Fetch data when the component loads
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchUsers();
        setUsers(response.data); // Axios data is in .data
      } catch (error) {
        console.error("Error loading users from backend:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div className="dashboard">
      {/* Top header bar */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="logo-section">
            <span className="logo-icon">💠</span>
            <h1 className="logo-text">AIDEN</h1>
          </div>
          
          <div className="header-status">
            <span className="status-dot"></span>
            <span className="status-text">
              {loading ? 'Connecting to Backend...' : `Live Monitoring (${users.length} Users)`}
            </span>
          </div>
        </div>
      </header>

      {/* Main content area */}
      <main className="dashboard-main">
        <div className="dashboard-layout">
          {/* Left Side: Map Area */}
          <div className="map-container">
            <MapView />
          </div>

          {/* Right Side: Data List (New Section) */}
          <aside className="data-sidebar">
            <h2>System Users</h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="user-list">
                {users.map((user) => (
                  <div key={user._id} className="user-card">
                    <strong>{user.name}</strong>
                    <span>{user.email}</span>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </main>

      {/* Floating report button + modal */}
      <ReportButton onClick={() => setIsReportOpen(true)} />
      <ReportModal 
        isOpen={isReportOpen} 
        onClose={() => setIsReportOpen(false)} 
      />
    </div>
  );
};

export default Dashboard;