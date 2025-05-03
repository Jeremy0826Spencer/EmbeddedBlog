import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectPage.css"

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="projects-container">
      {/* Hero Section */}
      <section className="projects-hero">
        <h1>All Projects</h1>
      </section>

      {/* Projects Grid Section */}
      <section className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {[
            {
              title:
                "ESP32 With Temperature and Humidity Sensor and OLED Screen",
              desc: "Live data from sensors displayed in real-time.",
              image: "/images/temp-humid-preview.jpg",
            },
            {
              title: "ESP32 PIR Motion Detection System",
              desc: "Reliable motion sensing with false trigger prevention.",
              image: "/images/pir-motion-preview.jpg",
            },
          ].map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <button
                  onClick={() =>
                    navigate(
                      index === 0
                        ? "/projects/temp-humid-tutorial"
                        : "/projects/pir-motion-tutorial"
                    )
                  }
                  className="project-button"
                >
                  Learn More
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
