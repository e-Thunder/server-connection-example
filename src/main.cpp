#include <Arduino.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <esp32-hal.h>		 // temperatureRead function
#include <esp_log.h>		 // get timestamp in s
#include <utils_functions.h> // our utils function

const char *ssid = "Redmi";
const char *password = "robert000";
const char *insertion_address = "http://lukboz.cba.pl/esp/api/insert/";

void setup()
{
	Serial.begin(9600);

	WiFi.begin(ssid, password);
	while (WiFi.status() != WL_CONNECTED)
	{
		delay(500);
		Serial.println("Connecting to WiFi..");
	}
	Serial.println("Connected to the WiFi network");
}

void loop()
{
	if (WiFi.status() == WL_CONNECTED)
	{
		HTTPClient http;
		http.begin(insertion_address);
		http.addHeader("Content-Type", "application/x-www-form-urlencoded");

		// read temperature from buildin sensor
		auto currentTemperature = temperatureRead();
		// get current timestamp
		auto timestamp = esp_log_timestamp();

		float array[] = {currentTemperature, timestamp};
		auto message = prepare_message(array);

		int responseCode = http.POST(message.c_str());
		String responseMessage = http.getString();
		if (responseCode > 0)
			Serial.println("Code: " + String(responseCode) + "; Message: " + responseMessage);
		else
			Serial.println("Error on sending data");
		http.end();
	}
	// send request every 3 seconds
	delay(3000);
}