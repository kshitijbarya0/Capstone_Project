import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './Pages/home';
import DashboardAdmin from './Pages/DashboardAdmin';
import DashboardUser from "./Pages/DashboardUser";
import Registerform from "./Pages/Registerform";
import Loginform from "./Pages/loginform";
import './App.css';

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Registerform />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/student-dashboard" element={<DashboardUser />} />
        <Route path="/admin-dashboard" element={<DashboardAdmin />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
