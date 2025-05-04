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
          and IoT development. If you're interested in 3D models or supporting
          content creation,{" "}
          <span className="nav-link" onClick={() => navigate("/about")}>
            visit the About page
          </span>
          . Whether you're a beginner or an experienced enthusiast, let's learn,
          build, and innovate together.
        </p>
      </section>

      {/* Latest Projects Section */}
      <section className="projects">
        <h2>Latest Projects</h2>
        <div className="projects-grid">
          {[
            {
              title: "ESP32 Temperature & Humidity Monitor",
              desc: "Live sensor data displayed on OLED screen in real-time.",
              image: "/images/20250323_094112.jpg",
              path: "/projects/temp-humid-tutorial",
            },
            {
              title: "ESP32 Motion Detection System",
              desc: "PIR motion sensor with visual feedback on OLED display.",
              image: "/images/oledmotionsensor4.jpg",
              path: "/projects/pir-motion-tutorial",
            },
            {
              title: "ESP32 Ultrasonic Distance Sensor",
              desc: "Accurate distance measurements with HC-SR04P sensor.",
              image: "/images/distance_sensor_wiring.jpg",
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
              <div className="project-card-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
              <div className="project-card-footer">
                <button onClick={() => navigate(project.path)}>
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
        <p>Explore our growing collection of embedded systems tutorials.</p>
        <button onClick={() => navigate("/projects")}>
          Browse All Projects
        </button>
      </section>
    </div>
  );
};

export default HomePage;
