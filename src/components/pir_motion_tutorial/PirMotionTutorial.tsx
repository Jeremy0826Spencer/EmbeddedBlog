import React from "react";
import { useNavigate } from "react-router-dom";
import "./PirMotionTutorial.css";

const PirMotionTutorial: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pir-motion-container">
      {/* Hero Section */}
      <section className="pir-motion-hero">
        <h1>ESP32 Motion Detection System</h1>
        <p>
          Build a PIR motion detector with ESP32 (basic version), then enhance
          it with visual feedback using an OLED display (advanced version).
        </p>
      </section>

      {/* Tutorial Content Section */}
      <section className="pir-motion-content">
        {/* Introduction */}
        <div className="intro-section">
          <h2>Introduction</h2>
          <p>
            This tutorial is divided into two parts. First, we'll create a basic
            motion detector using just the PIR sensor. Then, we'll enhance it by
            adding an OLED display for visual feedback. All wiring diagrams and
            code samples are included.
          </p>
        </div>

        {/* Materials Needed */}
        <div className="materials-section">
          <h2>Materials Needed</h2>
          <div className="materials-grid">
            {/* Basic Materials */}
            <div className="materials-card basic-materials">
              <h3>Basic Version</h3>
              <ul>
                <li>
                  <a
                    href="https://amzn.to/3YHgZeA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ESP32 Development Board
                  </a>
                </li>
                <li>
                  <a
                    href="https://amzn.to/3z5LyQY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HC-SR501 PIR Motion Sensor
                  </a>
                </li>
                <li>Breadboard and Jumper Wires</li>
                <li>USB Cable</li>
              </ul>
            </div>

            {/* Enhanced Materials */}
            <div className="materials-card enhanced-materials">
              <h3>OLED Enhanced</h3>
              <ul>
                <li>All basic version components</li>
                <li>
                  <a
                    href="https://amzn.to/3SH1106-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    1.3" OLED Display (SH1106)
                  </a>
                </li>
                <li>Additional jumper wires</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="steps-section">
          <h2>Step-by-Step Instructions</h2>
          <div className="steps-container">
            {/* PART 1: BASIC PIR SENSOR */}
            <div className="step basic-step">
              <h3>Part 1: Basic Motion Detection</h3>

              {/* Wiring */}
              <div className="wiring-section">
                <h4>Wiring Diagram</h4>
                <div className="wiring-diagram">
                  <p>
                    <strong>ESP32 to HC-SR501:</strong>
                    <br />
                    - PIR VCC → 3.3V
                    <br />
                    - PIR GND → GND
                    <br />- PIR OUT → GPIO13
                  </p>
                  <div className="wiring-images">
                    <img
                      src="/images/wiringmotionsensoronly.jpg"
                      alt="Front view"
                    />
                    <img
                      src="/images/wiringmotionsensoronly2.jpg"
                      alt="Side view"
                    />
                    <img
                      src="/images/wiringmotionsensoronly3.jpg"
                      alt="Close-up"
                    />
                  </div>
                </div>
              </div>

              {/* Code */}
              <div className="code-section">
                <h4>Basic Code</h4>
                <pre>
                  <code>
                    {`#define PIR_PIN 13

void setup() {
  Serial.begin(115200);
  pinMode(PIR_PIN, INPUT);
  Serial.println("PIR Sensor Ready");
}

void loop() {
  if (digitalRead(PIR_PIN) == HIGH) {
    Serial.println("Motion detected!");
    delay(1000); // Debounce
  }
}`}
                  </code>
                </pre>
              </div>

              {/* Output */}
              <div className="output-section">
                <h4>Expected Output</h4>
                <div className="serial-output">
                  <img
                    src="/images/Screenshot_motionsensoronlyoutput.jpg"
                    alt="Serial output"
                  />
                  <pre>
                    <code>Motion detected!\n(serial monitor output)</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* PART 2: OLED ENHANCEMENT */}
            <div className="step enhanced-step">
              <h3>Part 2: Adding OLED Display</h3>

              {/* Wiring */}
              <div className="wiring-section">
                <h4>Additional Wiring</h4>
                <div className="wiring-diagram">
                  <p>
                    <strong>Add these OLED connections:</strong>
                    <br />
                    - OLED VCC → 3.3V
                    <br />
                    - OLED GND → GND
                    <br />
                    - OLED SDA → GPIO21
                    <br />- OLED SCL → GPIO22
                  </p>
                  <div className="wiring-images">
                    <img src="/images/oled_wiring1.jpg" alt="OLED wiring" />
                  </div>
                </div>
              </div>

              {/* Code */}
              <div className="code-section">
                <h4>Enhanced Code</h4>
                <pre>
                  <code>
                    {`#include <U8g2lib.h>
#include <Wire.h>

#define PIR_PIN 13
U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0);

void displayMessage(const char* line1, const char* line2 = "") {
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_helvB10_tr);
  u8g2.drawStr(0, 15, line1);
  u8g2.drawStr(0, 35, line2);
  u8g2.sendBuffer();
}

void setup() {
  Serial.begin(115200);
  pinMode(PIR_PIN, INPUT);
  u8g2.begin();
  displayMessage("System", "Ready");
}

void loop() {
  if (digitalRead(PIR_PIN) == HIGH) {
    displayMessage("Motion", "Detected!");
    Serial.println("Motion detected!");
    delay(1000);
  } else {
    displayMessage("Ready for", "motion...");
  }
}`}
                  </code>
                </pre>
              </div>

              {/* Output */}
              <div className="output-section">
                <h4>Enhanced Output</h4>
                <div className="enhanced-output">
                  <div className="serial-output">
                    <h5>Serial Monitor</h5>
                    <img
                      src="/images/Screenshot_motionsensoronlyoutput.jpg"
                      alt="Serial output"
                    />
                    <pre>
                      <code>Motion detected!\n(serial + OLED feedback)</code>
                    </pre>
                  </div>

                  <div className="oled-states">
                    <h5>OLED Display States</h5>
                    <div className="oled-images">
                      <div>
                        <img
                          src="/images/oledmotionsensor1.jpg"
                          alt="Initializing"
                        />
                        <p>Initializing</p>
                      </div>
                      <div>
                        <img
                          src="/images/oledmotionsensor2.jpg"
                          alt="Stabilizing"
                        />
                        <p>Stabilizing</p>
                      </div>
                      <div>
                        <img src="/images/oledmotionsensor3.jpg" alt="Ready" />
                        <p>System Ready</p>
                      </div>
                      <div>
                        <img
                          src="/images/oledmotionsensor4.jpg"
                          alt="Motion detected"
                        />
                        <p>Motion Detected</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="conclusion-section">
          <h2>Conclusion</h2>
          <p>
            You've now built both a basic and enhanced motion detection system.
            The basic version provides serial output, while the OLED-enhanced
            version adds visual feedback. Both versions can be expanded with
            WiFi capabilities, additional sensors, or integration with smart
            home systems.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pir-motion-cta">
        <button onClick={() => navigate("/projects")}>
          View More Projects
        </button>
      </section>
    </div>
  );
};

export default PirMotionTutorial;
