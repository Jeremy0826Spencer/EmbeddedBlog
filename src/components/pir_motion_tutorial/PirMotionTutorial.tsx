import React from "react";
import { useNavigate } from "react-router-dom";

const PirMotionTutorial: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="hero">
        <h1>ESP32 Motion Detection System</h1>
        <p>
          Build a PIR motion detector with ESP32 (basic version), then enhance
          it with visual feedback using an OLED display (advanced version).
        </p>
      </section>

      {/* Tutorial Content Section */}
      <section className="tutorial-content">
        {/* Introduction */}
        <div className="mb-12">
          <h2 className="section-title">Introduction</h2>
          <p className="section-text">
            This tutorial is divided into two parts. First, we'll create a basic
            motion detector using just the PIR sensor. Then, we'll enhance it by
            adding an OLED display for visual feedback. All wiring diagrams and
            code samples are included.
          </p>
        </div>

        {/* Materials Needed */}
        <div className="mb-12">
          <h2 className="section-title">Materials Needed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Basic Materials */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Basic Version
              </h3>
              <ul className="materials-list space-y-2">
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
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-center">
                OLED Enhanced
              </h3>
              <ul className="materials-list space-y-2">
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
        <div className="mb-12">
          <h2 className="section-title">Step-by-Step Instructions</h2>
          <div className="space-y-12">
            {/* PART 1: BASIC PIR SENSOR */}
            <div className="step border-b pb-8">
              <h3 className="step-title text-2xl">
                Part 1: Basic Motion Detection
              </h3>

              {/* Wiring */}
              <div className="mt-6">
                <h4 className="font-semibold text-lg mb-3">Wiring Diagram</h4>
                <div className="bg-gray-200 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>ESP32 to HC-SR501:</strong>
                    <br />
                    - PIR VCC → 3.3V
                    <br />
                    - PIR GND → GND
                    <br />- PIR OUT → GPIO13
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <img
                      src="/images/wiringmotionsensoronly.jpg"
                      alt="Front view"
                      className="rounded-lg border border-gray-300"
                    />
                    <img
                      src="/images/wiringmotionsensoronly2.jpg"
                      alt="Side view"
                      className="rounded-lg border border-gray-300"
                    />
                    <img
                      src="/images/wiringmotionsensoronly3.jpg"
                      alt="Close-up"
                      className="rounded-lg border border-gray-300"
                    />
                  </div>
                </div>
              </div>

              {/* Code */}
              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-3">Basic Code</h4>
                <pre className="code-block">
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
              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-3">Expected Output</h4>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <img
                    src="/images/Screenshot_motionsensoronlyoutput.jpg"
                    alt="Serial output"
                    className="rounded-lg mb-4 border border-gray-600"
                  />
                  <pre className="text-green-400 overflow-x-auto">
                    <code>Motion detected!\n(serial monitor output)</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* PART 2: OLED ENHANCEMENT */}
            <div className="step">
              <h3 className="step-title text-2xl">
                Part 2: Adding OLED Display
              </h3>

              {/* Wiring */}
              <div className="mt-6">
                <h4 className="font-semibold text-lg mb-3">
                  Additional Wiring
                </h4>
                <div className="bg-gray-200 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Add these OLED connections:</strong>
                    <br />
                    - OLED VCC → 3.3V
                    <br />
                    - OLED GND → GND
                    <br />
                    - OLED SDA → GPIO21
                    <br />- OLED SCL → GPIO22
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img
                      src="/images/oled_wiring1.jpg"
                      alt="OLED wiring"
                      className="rounded-lg border border-gray-300"
                    />
                    <img
                      src="/images/oled_wiring2.jpg"
                      alt="Complete setup"
                      className="rounded-lg border border-gray-300"
                    />
                  </div>
                </div>
              </div>

              {/* Code */}
              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-3">Enhanced Code</h4>
                <pre className="code-block">
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
              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-3">Enhanced Output</h4>
                <div className="space-y-6">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h5 className="text-gray-100 font-medium mb-2">
                      Serial Monitor
                    </h5>
                    <img
                      src="/images/Screenshot_motionsensoronlyoutput.jpg"
                      alt="Serial output"
                      className="rounded-lg mb-2 border border-gray-600"
                    />
                    <pre className="text-green-400">
                      <code>Motion detected!\n(serial + OLED feedback)</code>
                    </pre>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">OLED Display States</h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <img
                          src="/images/oledmotionsensor1.jpg"
                          alt="Initializing"
                          className="rounded-lg border border-gray-300"
                        />
                        <p className="text-sm text-center mt-1">Initializing</p>
                      </div>
                      <div>
                        <img
                          src="/images/oledmotionsensor2.jpg"
                          alt="Stabilizing"
                          className="rounded-lg border border-gray-300"
                        />
                        <p className="text-sm text-center mt-1">Stabilizing</p>
                      </div>
                      <div>
                        <img
                          src="/images/oledmotionsensor3.jpg"
                          alt="Ready"
                          className="rounded-lg border border-gray-300"
                        />
                        <p className="text-sm text-center mt-1">System Ready</p>
                      </div>
                      <div>
                        <img
                          src="/images/oledmotionsensor4.jpg"
                          alt="Motion detected"
                          className="rounded-lg border border-gray-300"
                        />
                        <p className="text-sm text-center mt-1">
                          Motion Detected
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mb-12">
          <h2 className="section-title">Conclusion</h2>
          <p className="section-text">
            You've now built both a basic and enhanced motion detection system.
            The basic version provides serial output, while the OLED-enhanced
            version adds visual feedback. Both versions can be expanded with
            WiFi capabilities, additional sensors, or integration with smart
            home systems.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <button onClick={() => navigate("/projects")} className="cta-button">
          View More Projects
        </button>
      </section>
    </div>
  );
};

export default PirMotionTutorial;
