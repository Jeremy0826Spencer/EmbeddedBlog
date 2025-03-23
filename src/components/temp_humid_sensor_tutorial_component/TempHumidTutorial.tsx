import React from "react";
import "./TempHumidTutorial.css"; // Import the CSS file
import wiringImage1 from "../../images/20250323_094007.jpg"
import wiringImage2 from "../../images/20250323_094016.jpg";
import wiringImage3 from "../../images/20250323_094021.jpg";
import workingScreen from "../../images/20250323_094112.jpg";

const TempHumidTutorial: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="hero">
        <h1>ESP32 Temperature & Humidity Sensor Tutorial</h1>
        <p>
          Learn how to build a real-time temperature and humidity monitoring
          system using an ESP32 microcontroller, DHT11 sensor, and an OLED
          display.
        </p>
      </section>

      {/* Tutorial Content Section */}
      <section className="tutorial-content">
        {/* Introduction */}
        <div className="mb-12">
          <h2 className="section-title">Introduction</h2>
          <p className="section-text">
            In this tutorial, we'll walk you through the steps to set up an
            ESP32 with a DHT11 temperature and humidity sensor. We'll also
            display the data on an OLED screen in real-time using the U8g2
            library.
          </p>
        </div>

        {/* Materials Needed */}
        <div className="mb-12">
          <h2 className="section-title">Materials Needed</h2>
          <ul className="materials-list">
            <li>ESP32 Development Board (ESP-WROOM-32)</li>
            <li>DHT11 Temperature & Humidity Sensor</li>
            <li>1.3 Inch I2C OLED Display (SH1106)</li>
            <li>Breadboard and Jumper Wires</li>
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
                Connect the DHT11 sensor and OLED display to the ESP32 using the
                breadboard and jumper wires. Refer to the wiring diagram and
                images below.
              </p>
              {/* Wiring Diagram and Images */}
              <div className="bg-gray-200 p-4 mt-4 rounded-lg">
                <h4 className="font-semibold mb-2">Wiring Diagram</h4>
                <p className="text-sm text-gray-600">
                  <strong>ESP32 to DHT11:</strong>
                  <br />
                  - DHT11 VCC → ESP32 3.3V
                  <br />
                  - DHT11 GND → ESP32 GND
                  <br />
                  - DHT11 Data → ESP32 GPIO 4
                  <br />
                  <br />
                  <strong>ESP32 to OLED Display:</strong>
                  <br />
                  - OLED VCC → ESP32 3.3V
                  <br />
                  - OLED GND → ESP32 GND
                  <br />
                  - OLED SCL → ESP32 GPIO 22
                  <br />- OLED SDA → ESP32 GPIO 21
                </p>
                {/* Images */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img
                    src={wiringImage1}
                    alt="Wiring setup for ESP32 and DHT11"
                    className="rounded-lg shadow-md"
                  />
                  <img
                    src={wiringImage2}
                    alt="Close-up of ESP32 wiring"
                    className="rounded-lg shadow-md"
                  />
                  <img
                    src={wiringImage3}
                    alt="Completed wiring for the project"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step">
              <h3 className="step-title">
                Step 2: Installing Required Libraries
              </h3>
              <p className="section-text">
                Install the necessary libraries for the DHT11 sensor and OLED
                display in the Arduino IDE or PlatformIO.
              </p>
              <pre className="code-block">
                <code>
                  {`[env:esp32dev]
platform = espressif32
board = esp32dev
framework = arduino
monitor_speed = 115200

lib_deps =
    adafruit/Adafruit Unified Sensor @ ^1.1.9
    adafruit/DHT sensor library @ ^1.4.4
    adafruit/Adafruit GFX Library @ ^1.11.9
    olikraus/U8g2 @ ^2.34.1`}
                </code>
              </pre>
              <p className="section-text mt-2">
                Add the above configuration to your{" "}
                <strong>platformio.ini</strong> file to install the required
                libraries.
              </p>
            </div>

            {/* Step 3 */}
            <div className="step">
              <h3 className="step-title">Step 3: Writing the Code</h3>
              <p className="section-text">
                Write the code to read data from the DHT11 sensor and display it
                on the OLED screen using the U8g2 library.
              </p>
              <pre className="code-block">
                <code>
                  {`#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <U8g2lib.h>

// Define the DHT11 sensor
#define DHTPIN 4         // GPIO 4 for DHT11 data
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

// Initialize the OLED display (SH1106) using U8g2 (I2C)
U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);

void setup() {
    Serial.begin(115200);
    dht.begin();
    
    // Initialize the OLED display
    u8g2.begin();
    u8g2.clearBuffer();
    u8g2.setFont(u8g2_font_ncenB08_tr); // Set font
    u8g2.drawStr(10, 20, "Initializing...");
    u8g2.sendBuffer();
    delay(1000);
}

void loop() {
    // Read temperature and humidity
    float temp = dht.readTemperature();
    float hum = dht.readHumidity();

    // Check if reading is valid
    if (isnan(temp) || isnan(hum)) {
        Serial.println("Failed to read from DHT sensor!");
        return;
    }

    // Print values to Serial Monitor
    Serial.print("Temperature: "); Serial.print(temp); Serial.println("°C");
    Serial.print("Humidity: "); Serial.print(hum); Serial.println("%");

    // Display on OLED using U8g2
    u8g2.clearBuffer();
    u8g2.setFont(u8g2_font_ncenB10_tr); // Set font size

    // Display temperature
    u8g2.setCursor(0, 20);
    u8g2.print("Temp: ");
    u8g2.print(temp);
    u8g2.print("C");
    u8g2.setCursor(0, 40);
    u8g2.print(temp * 1.8 + 32);
    u8g2.print("F");

    // Display humidity
    u8g2.setCursor(0, 60);
    u8g2.print("Hum: ");
    u8g2.print(hum);
    u8g2.print("%");

    u8g2.sendBuffer(); // Update screen

    delay(2000); // Wait 2 seconds before next read
}`}
                </code>
              </pre>
            </div>

            {/* Step 4 */}
            <div className="step">
              <h3 className="step-title">Step 4: Uploading the Code</h3>
              <p className="section-text">
                1. Connect your ESP32 to your computer via USB.
                <br />
                2. Select the correct board and port in PlatformIO or Arduino
                IDE:
                <br />- <strong>Board:</strong> ESP32 Dev Module
                <br />- <strong>Port:</strong> Select the correct COM port
                <br />
                3. Click the <strong>Upload</strong> button.
                <br />
                4. Open the Serial Monitor to verify the output.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            src={workingScreen}
            alt="Oled with temperature and humidity"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Conclusion */}
        <div className="mb-12">
          <h2 className="section-title">Conclusion</h2>
          <p className="section-text">
            Congratulations! You've successfully built a temperature and
            humidity monitoring system using an ESP32. You can now expand this
            project by adding more sensors or integrating it with IoT platforms.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2 className="cta-title">Want to Build More Projects?</h2>
        <p className="cta-text">
          Explore our collection of embedded systems and IoT tutorials to take
          your skills to the next level.
        </p>
        <button className="cta-button">Browse All Tutorials</button>
      </section>
    </div>
  );
};

export default TempHumidTutorial;