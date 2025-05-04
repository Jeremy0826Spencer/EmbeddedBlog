import React from "react";
import "./TempHumidTutorial.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";



const TempHumidTutorial: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="hero">
        <h1>ESP32 Temperature & Humidity Sensor Tutorial</h1>
        <p>
          Learn how to build a real-time temperature and humidity monitoring
          system using an ESP32 microcontroller, a DHT11 sensor, and an OLED
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
            <li>
              <a
                href="https://amzn.to/3YHgZeA"
                target="_blank"
                rel="noopener noreferrer"
              >
                ESP32 Development Board (ESP-WROOM-32)
              </a>{" "}
              – I used this one
            </li>
            <li>
              <a
                href="https://amzn.to/3YHgZeA"
                target="_blank"
                rel="noopener noreferrer"
              >
                DHT11 Temperature & Humidity Sensor
              </a>{" "}
              – I used this one
            </li>
            <li>
              <a
                href="https://amzn.to/3YHgZeA"
                target="_blank"
                rel="noopener noreferrer"
              >
                1.3 Inch I2C OLED Display (SH1106)
              </a>{" "}
              – This is a cool little screen
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
                Connect the DHT11 sensor and OLED display to the ESP32 using a
                breadboard and jumper wires. Refer to the wiring diagram and
                images provided below. Note that the ESP32 is too wide for most
                breadboards. There are several ways to handle this issue: some
                people cut a breadboard in half, while others, like me, use two
                separate breadboards. However, this method can be a tight fit,
                so be careful not to damage the GPIO pins when connecting the
                components.
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
                    src={`${process.env.PUBLIC_URL}/images/20250323_094007.jpg`}
                    alt="Wiring setup for ESP32 and DHT11"
                    className="rounded-lg shadow-md"
                  />
                  <img
                    src={`${process.env.PUBLIC_URL}/images/20250323_094016.jpg`}
                    alt="Close-up of ESP32 wiring"
                    className="rounded-lg shadow-md"
                  />
                  <img
                    src={`${process.env.PUBLIC_URL}/images/20250323_094021.jpg`}
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
                display in the Arduino IDE or PlatformIO. Simply copy and paste
                the code below into your <strong>platformio.ini</strong> file. I
                might also add a separate section on how to set up PlatformIO,
                which is the IDE used for this project. Personally, I use Visual
                Studio Code with the PlatformIO extension for development.
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
                on the OLED screen using the U8g2 library. This code will go in
                your <strong>main.cpp</strong> file. Once everything is
                connected, all you need to do is connect a USB-C cable from your
                computer (with PlatformIO running), build the project, and flash
                the code onto the ESP32.
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
              <h3 className="step-title">Step 4: Create the Project</h3>
              <p className="section-text">
                1. Connect your ESP32 to your computer via USB.
                <br />
                2. Name the project, select the board as{" "}
                <strong>Espressif ESP32 Dev Module</strong>, and choose{" "}
                <strong>Arduino</strong> as the framework.
                <br />
                3. Click the <strong>Finish</strong> button.
                <br />
                4. Copy and paste the above code into the{" "}
                <strong>platformio.ini</strong> and <strong>main.cpp</strong>{" "}
                files.
                <br />
                5. Press the checkmark to build your code. Debug any errors if
                necessary. Then, press the right arrow button to flash the
                program onto the board. You can now use the plug icon to monitor
                the output via the serial monitor or view the data on the OLED
                screen.
              </p>
            </div>
          </div>
        </div>

        {/* Working Screen Image */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            src={`/images/20250323_094112.jpg`}
            alt="OLED display showing temperature and humidity"
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
        <button className="cta-button" onClick={()=> navigate("/projects")}>
          Browse All Tutorials
        </button>
      </section>
    </div>
  );
};

export default TempHumidTutorial;
