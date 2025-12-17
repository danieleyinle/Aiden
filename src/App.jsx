import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page – judges see this first */}
        <Route path="/" element={<Landing />} />

        {/* Main app */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
