import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './Pages/home';
import DashboardAdmin from './Pages/DashboardAdmin';
import DashboardUser from "./components/DashboardUser";
import Registerform from "./Pages/Registerform";
import Loginform from "./Pages/loginform";
import PYQ from './components/PYQ';
import MCQ from './components/MCQ';
import ResultAnalysis from './components/ResultAnalysis';
import CourseVideos from "./components/CourseVideos";
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
          <Route path="/pyq" element={<PYQ />} />
          <Route path="/mcq" element={<MCQ />} />
          <Route path="/result-analysis" element={<ResultAnalysis />} />
          <Route path="/admin-dashboard" element={<DashboardAdmin />} />
          <Route path="/course-viedoes" element={<CourseVideos />} />


          
        </Routes>
      </Router>
    </>
  );
}

export default App;
