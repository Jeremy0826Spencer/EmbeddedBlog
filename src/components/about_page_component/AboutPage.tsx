import React from "react";
import "./AboutPage.css";

const AboutPage: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">Welcome to My Creative Space</h1>

        <div className="about-description">
          <p>
            I love programming and making little things. I'm currently diving
            deep into 3D printing and plan to share my creations here soon.
          </p>
          <p>Check out my 3D printing designs on Printables:</p>
          <a
            href="https://www.printables.com/@JeremySpence_2600867"
            target="_blank"
            rel="noopener noreferrer"
            className="printables-link"
          >
            My Printables Profile
          </a>
        </div>

        <div className="support-section">
          <p>
            Enjoy my content? Support my work on Patreon for exclusive updates!
          </p>
          <a
            href="https://patreon.com/JErBEr111?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
            target="_blank"
            rel="noopener noreferrer"
            className="patreon-button"
          >
            Support on Patreon
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
