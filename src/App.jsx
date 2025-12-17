import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 1. Imports from Your code (Styles & Dashboard)
import './App.css';
import 'leaflet/dist/leaflet.css'; // Vital for the map!
import Dashboard from "./pages/Dashboard";

// 2. Imports from Teammate's code (Landing Page)
import Landing from "./components/landing/Landing";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Landing page – judges/users see this first */}
          <Route path="/" element={<Landing />} />

          {/* Main app – Your Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
