#define FASTLED_ESP8266_RAW_PIN_ORDER
#define FASTLED_ESP8266_NODEMCU_PIN_ORDER
#define FASTLED_ESP8266_D1_PIN_ORDER
#include <FastLED.h>
#include "EspMQTTClient.h"
#include <ESP8266WebServer.h>
///////////////////////////////////////////////////////////////////////////////////////////
#define NUM_LEDS 60
#define DATA_PIN 5
CRGB leds[NUM_LEDS];
EspMQTTClient client(
  "Heimnetz",
  "Superteam1700",
  "192.168.1.101",  // MQTT Broker server ip
  "homeassistant",   // Can be omitted if not needed
  "password",   // Can be omitted if not needed
  "TestClient313",     // Client name that uniquely identify your device
  31883              // The MQTT port, default to 1883. this line can be omitted
);

ESP8266WebServer server(80);
void handleGet();
void initLedStrip();
void configureHttpServer();



void setup() {
  delay(2000);
  Serial.begin(115200);
  Serial.println('\n');
  Serial.println("Start setup");
  client.enableDebuggingMessages();
  configureHttpServer();
  initLedStrip();
   
 Serial.println("Done Setup");
}

boolean xxx = true;

void loop() {
  client.loop();
  xxx = !xxx;
  for(int led = 0; led<=60; led++) { leds[led] = CRGB::Black;}
  if(xxx) {
    leds[0] = CRGB::Red;
  } else {
    leds[0] = CRGB::Green;
  }
  if(client.isMqttConnected()) {
    leds[1] = CRGB::Red;
  } else {
    leds[1] = CRGB::Green;
  }  
  if(client.isWifiConnected()) {
    leds[2] = CRGB::Red;
  } else {
    leds[2] = CRGB::Green;
  }


  
   for(int whiteLed = 50; whiteLed < NUM_LEDS; whiteLed = whiteLed + 1) {
      leds[whiteLed] = CRGB::Green;
      FastLED.show();
      delay(100);
      leds[whiteLed] = CRGB::Red;
     server.handleClient();                    // Listen for HTTP requests from clients
  }
}

void onConnectionEstablished() {
  Serial.println("Connection Established");
  client.subscribe("mytopic/test", [] (const String &payload)  {
    Serial.println(payload);
  });

  client.publish("mytopic/test", "This is a message");
}

void initLedStrip() {
  FastLED.addLeds<WS2811, DATA_PIN, RGB>(leds, NUM_LEDS);  
}

void configureHttpServer() {
  server.on("/",HTTP_GET, handleRoot);   
  server.begin(); // Start the HTTP Server
}


void handleRoot() {
  server.send(200, "text/html", "<html>Hello Worldxx</html>");
}

   
   
