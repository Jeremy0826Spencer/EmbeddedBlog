import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to My Embedded Projects Blog</h1>
        <p>
          This blog is a gateway for us to explore hardware and piece together
          projects that will teach us about programming embedded systems and the
          possibilities of a made-from-scratch IoT smart home. With a computer
          science degree and a passion for programming, I am here to share my
          journey of learning how to make whatever we want. Join me as we dive
          into the fascinating realms of microcontrollers, embedded programming,
          and IoT development. Whether you're a beginner or an experienced
          enthusiast, let’s learn, build, and innovate together.
        </p>
      </section>

      {/* Latest Projects Section */}
      <section className="projects">
        <h2>Latest Projects</h2>
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

      {/* Call to Action */}
      <section className="cta">
        <h2>Want to see more projects?</h2>
        <p>More projects to come soon!</p>
        <button onClick={() => {navigate("/projects");}}>Browse All Projects</button>
      </section>
    </div>
  );
};

export default HomePage;
