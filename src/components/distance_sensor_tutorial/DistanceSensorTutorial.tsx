import React from "react";
import "./DistanceSensorTutorial.css";

const DistanceSensorTutorial: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="hero">
        <h1>ESP32 Distance Measurement with HC-SR04P</h1>
        <p>
          Learn how to measure distances using an ESP32 and HC-SR04P ultrasonic
          sensor with this simple tutorial.
        </p>
      </section>

      {/* Tutorial Content Section */}
      <section className="tutorial-content">
        {/* Materials Needed */}
        <div className="mb-12">
          <h2 className="section-title">Materials Needed</h2>
          <ul className="materials-list">
            <li>ESP32 Development Board</li>
            <li>HC-SR04P Ultrasonic Sensor</li>
            <li>Breadboard and Jumper Wires</li>
            <li>USB Cable for Power</li>
          </ul>
        </div>

        {/* Wiring Instructions */}
        <div className="mb-12">
          <h2 className="section-title">Wiring the Components</h2>
          <div className="bg-gray-200 p-4 mt-4 rounded-lg">
            <h3 className="font-semibold mb-2">Connection Diagram</h3>
            <p className="text-sm text-gray-600">
              <strong>HC-SR04P to ESP32:</strong>
              <br />
              - VCC → ESP32 3.3V
              <br />
              - Trig → GPIO13
              <br />
              - Echo → GPIO12
              <br />- GND → ESP32 GND
            </p>
            <div className="flex justify-center mt-4">
              <img
                src={`${process.env.PUBLIC_URL}/images/distance_sensor_wiring.jpg`}
                alt="HC-SR04P wiring to ESP32"
                className="rounded-lg shadow-md max-w-full h-auto"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
        </div>

        {/* Code Section */}
        <div className="mb-12">
          <h2 className="section-title">Uploading the Code</h2>
          <div className="step">
            <h3 className="step-title">Step 1: PlatformIO Configuration</h3>
            <p className="section-text">
              Create a new PlatformIO project with this configuration:
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

          <div className="step">
            <h3 className="step-title">Step 2: Main Code</h3>
            <p className="section-text">
              Copy this code to your <strong>main.cpp</strong> file:
            </p>
            <pre className="code-block">
              <code>
                {`const int trigPin = 13;
const int echoPin = 12;

void setup() {
  Serial.begin(115200);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  // Clear trigger
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  
  // Send 10μs pulse
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // Measure echo duration
  long duration = pulseIn(echoPin, HIGH);
  
  // Calculate distance (cm)
  float distance = duration * 0.034 / 2;
  
  // Display results
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  
  delay(500); // Wait between measurements
}`}
              </code>
            </pre>
          </div>

          <div className="step">
            <h3 className="step-title">Step 3: Upload and Monitor</h3>
            <p className="section-text">
              1. Connect your ESP32 via USB
              <br />
              2. Click the upload button in PlatformIO
              <br />
              3. Open the serial monitor (115200 baud) to see distance readings
            </p>
            <img
              src={`${process.env.PUBLIC_URL}/images/outputdistancesensor.jpg`}
              alt="Serial monitor output showing distance measurements"
              className="rounded-lg shadow-md mt-4 w-full max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Conclusion */}
        <div className="mb-12">
          <h2 className="section-title">Troubleshooting</h2>
          <ul className="materials-list">
            <li>No readings? Check your wiring connections</li>
            <li>Getting 0cm? Ensure nothing is blocking the sensor</li>
            <li>Inconsistent values? Try adding software filtering</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DistanceSensorTutorial;
