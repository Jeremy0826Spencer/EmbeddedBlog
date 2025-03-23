import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero">
        <h1>All Projects</h1>
      </section>

      {/* Latest Projects Section */}
      <section className="projects">
        <h2>All Projects</h2>
        <div className="projects-grid">
          {[
            {
              title:
                "ESP32 With Temperature and Humidity Sensor and OLED Screen",
              desc: "Live data from sensors displayed in real-time.",
            },
          ].map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
              <div className="project-card-footer">
                {/* Navigate to the TempHumidTutorial page */}
                <button
                  onClick={() => navigate("/projects/temp-humid-tutorial")}
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
  );
};

export default ProjectsPage;
