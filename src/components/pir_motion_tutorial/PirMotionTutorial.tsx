import React from "react";
import { useNavigate } from "react-router-dom";

const PirMotionTutorial: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="hero">
        <h1>ESP32 PIR Motion Sensor Tutorial</h1>
        <p>
          Learn how to build a motion detection system using an ESP32
          microcontroller and HC-SR501 PIR sensor with troubleshooting for false
          triggers.
        </p>
      </section>

      {/* Tutorial Content Section */}
      <section className="tutorial-content">
        {/* Introduction */}
        <div className="mb-12">
          <h2 className="section-title">Introduction</h2>
          <p className="section-text">
            This tutorial covers setting up an ESP32 with a HC-SR501 PIR motion
            sensor. We'll implement reliable motion detection with serial output
            and include solutions for common false trigger issues.
          </p>
        </div>

        {/* Materials Needed */}
        <div className="mb-12">
          <h2 className="section-title">Materials Needed</h2>
          <ul className="materials-list">
            <li>
              <a
                href="https://amzn.to/3YHgZeA"
                target="_blank"
                rel="noopener noreferrer"
              >
                ESP32 Development Board (ESP-WROOM-32)
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
            <li>
              <a
                href="https://amzn.to/3YHgZeA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Breadboard
              </a>{" "}
              and
              <a
                href="https://amzn.to/4jCYAHU"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jumper Wires
              </a>
            </li>
            <li>USB Cable for Power</li>
          </ul>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="mb-12">
          <h2 className="section-title">Step-by-Step Instructions</h2>
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="step">
              <h3 className="step-title">Step 1: Wiring the Components</h3>
              <p className="section-text">
                Connect the HC-SR501 sensor to the ESP32. The PIR sensor has
                three pins: VCC, OUT, and GND. Make sure to connect them
                properly to avoid damage.
              </p>

              <div className="bg-gray-200 p-4 mt-4 rounded-lg">
                <h4 className="font-semibold mb-2">Wiring Diagram</h4>
                <p className="text-sm text-gray-600">
                  <strong>ESP32 to HC-SR501:</strong>
                  <br />
                  - PIR VCC → ESP32 3.3V
                  <br />
                  - PIR GND → ESP32 GND
                  <br />- PIR OUT → ESP32 GPIO13
                </p>
                {/* Placeholder for images - add your actual image paths */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img
                    src="/images/pir-wiring.jpg"
                    alt="PIR sensor wiring diagram"
                    className="rounded-lg shadow-md"
                  />
                  <img
                    src="/images/pir-esp32-setup.jpg"
                    alt="Completed PIR sensor setup"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step">
              <h3 className="step-title">Step 2: PlatformIO Configuration</h3>
              <p className="section-text">
                Create a new PlatformIO project and configure the platformio.ini
                file. No special libraries are needed for basic PIR
                functionality.
              </p>
              <pre className="code-block">
                <code>
                  {`[env:esp32dev]
platform = espressif32
board = esp32dev
framework = arduino
monitor_speed = 115200`}
                </code>
              </pre>
            </div>

            {/* Step 3 */}
            <div className="step">
              <h3 className="step-title">Step 3: Motion Detection Code</h3>
              <p className="section-text">
                Here's the complete code with debouncing to prevent false
                triggers. This version includes a stabilization period and
                reliable state detection.
              </p>
              <pre className="code-block">
                <code>
                  {`#define PIR_PIN 13

// Variables with debounce
int pirState = LOW;
int stablePirState = LOW;
unsigned long lastDebounceTime = 0;
unsigned long debounceDelay = 100; // milliseconds

void setup() {
  Serial.begin(115200);
  pinMode(PIR_PIN, INPUT);
  
  // Longer stabilization time (important!)
  Serial.println("Initializing PIR sensor...");
  for(int i = 20; i > 0; i--) {
    Serial.printf("Stabilizing... %d seconds remaining\\n", i);
    delay(1000);
  }
  Serial.println("System ready");
}

void loop() {
  int reading = digitalRead(PIR_PIN);
  
  // Debounce logic
  if (reading != pirState) {
    lastDebounceTime = millis();
    pirState = reading;
  }

  if ((millis() - lastDebounceTime) > debounceDelay) {
    if (pirState != stablePirState) {
      stablePirState = pirState;
      
      if (stablePirState == HIGH) {
        Serial.println("Motion detected!");
      } else {
        Serial.println("Motion ended");
      }
    }
  }

  delay(10);
}`}
                </code>
              </pre>
            </div>

            {/* Step 4 */}
            <div className="step">
              <h3 className="step-title">
                Step 4: Troubleshooting False Triggers
              </h3>
              <p className="section-text">
                If you're getting false triggers, try these solutions:
              </p>
              <div className="bg-yellow-50 p-4 mt-4 rounded-lg">
                <h4 className="font-semibold mb-2">Hardware Adjustments</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Adjust the sensitivity potentiometer (turn counter-clockwise
                    to reduce)
                  </li>
                  <li>
                    Adjust the time delay potentiometer (turn clockwise to
                    shorten trigger duration)
                  </li>
                  <li>
                    Add a 100μF capacitor between VCC and GND near the PIR
                    sensor
                  </li>
                  <li>
                    Ensure stable power supply (3.3V is fine, but noisy power
                    causes issues)
                  </li>
                </ul>

                <h4 className="font-semibold mt-4 mb-2">Physical Setup</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Keep the sensor away from air vents and direct sunlight
                  </li>
                  <li>Avoid heat sources and vibrating objects</li>
                  <li>Mount it firmly to prevent movement-induced triggers</li>
                  <li>
                    Ensure the sensor has a clear view of the detection area
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mb-12">
          <h2 className="section-title">Conclusion</h2>
          <p className="section-text">
            You've now created a reliable motion detection system with your
            ESP32. This project can be expanded with WiFi notifications, LED
            indicators, or integration with home automation systems.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2 className="cta-title">Ready for More Projects?</h2>
        <p className="cta-text">
          Check out our other ESP32 tutorials to build more IoT devices.
        </p>
        <button onClick={() => navigate("/projects")} className="cta-button">
          Browse All Projects
        </button>
      </section>
    </div>
  );
};

export default PirMotionTutorial;
