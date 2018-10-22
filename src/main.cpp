#include <Arduino.h>
#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "<<WIFI SSID>>";
const char* password = "<<WIFI PASSWORD>>";
const char* insertionAddress = "http://lukboz.cba.pl/esp/api/insert/";

void setup() {
	Serial.begin(9600);

	WiFi.begin(ssid, password);
	while (WiFi.status() != WL_CONNECTED) {
		delay(500);
		Serial.println("Connecting to WiFi..");
	}
	Serial.println("Connected to the WiFi network");
}

void loop() {
	if(WiFi.status() == WL_CONNECTED){
		HTTPClient http;
		http.begin(insertionAddress);
		http.addHeader("Content-Type", "application/x-www-form-urlencoded");

		String message = "param1=value1&param2=value2";

		int responseCode = http.POST(message);
		String responseMessage = http.getString();

		if(responseCode > 0)
			Serial.println("Code: " + String(responseCode) + "; Message: " + responseMessage);
		else
			Serial.println("Error on sending data");

		http.end();
	}

	// send request every 3 seconds
	delay(3000);
}