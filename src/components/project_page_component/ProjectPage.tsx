import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectPage.css";

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="projects-container">
      {/* Hero Section */}
      <section className="projects-hero">
        <h1>All Projects</h1>
        <p>
          Explore my collection of ESP32 projects with detailed tutorials and
          step-by-step guides.
        </p>
      </section>

      {/* Projects Grid Section */}
      <section className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {[
            {
              title: "ESP32 Temperature & Humidity Monitor",
              desc: "Live sensor data displayed on OLED screen in real-time.",
              image: "/images/20250323_094112.jpg", // OLED display image
              path: "/projects/temp-humid-tutorial",
            },
            {
              title: "ESP32 Motion Detection System",
              desc: "PIR motion sensor with visual feedback on OLED display.",
              image: "/images/oledmotionsensor4.jpg", // Motion detected image
              path: "/projects/pir-motion-tutorial",
            },
            {
              title: "ESP32 Ultrasonic Distance Sensor",
              desc: "Accurate distance measurements with HC-SR04P sensor.",
              image: "/images/distance_sensor_wiring.jpg", // Wiring image
              path: "/projects/distance-sensor-tutorial",
            },
          ].map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-image-overlay"></div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <button
                  onClick={() => navigate(project.path)}
                  className="project-button"
                >
                  View Tutorial →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="projects-cta">
        <h2>More Projects Coming Soon</h2>
        <button onClick={() => navigate("/")} className="cta-button">
          Return Home
        </button>
      </section>
    </div>
  );
};

export default ProjectsPage;
