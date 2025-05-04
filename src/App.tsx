import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectsPage from "./components/project_page_component/ProjectPage";
import AboutPage from "./components/about_page_component/AboutPage";
import HomePage from "./components/home_page_component/HomePage";
import Navbar from "./components/nav_bar_component/Navbar";
import TempHumidTutorial from "./components/temp_humid_sensor_tutorial_component/TempHumidTutorial";
import PirMotionTutorial from "./components/pir_motion_tutorial/PirMotionTutorial";
import DistanceSensorTutorial from "./components/distance_sensor_tutorial/DistanceSensorTutorial";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route
          path="/projects/temp-humid-tutorial"
          element={<TempHumidTutorial />}
        />
        <Route
          path="/projects/pir-motion-tutorial"
          element={<PirMotionTutorial />}
        />
        <Route
          path="/projects/distance-sensor-tutorial"
          element={<DistanceSensorTutorial />}
        />
      </Routes>
    </Router>
  );
}

export default App;