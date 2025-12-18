import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './App.css';
import 'leaflet/dist/leaflet.css'; 
import Dashboard from "./pages/Dashboard";


import Landing from "./components/landing/Landing";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          
          <Route path="/" element={<Landing />} />

          
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
