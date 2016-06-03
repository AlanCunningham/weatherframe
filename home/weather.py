# Author: Alan Cunningham
# Date 30/05/2016


import requests
import json
from datetime import datetime

class Weather:
	location = {"lon": "51.4927245", "lat": "-0.2122906"}
	api_key = "6d73c99eb441945dcb1d1434a49db41e"
	url = "https://api.forecast.io/forecast/"
	units = "uk2"
	result = None

	def __init__(self):
		# Make the initial weather request
		request_url = self.url + self.api_key + "/" + self.location["lon"] + "," + self.location["lat"] + "?units=" + self.units
		r = requests.get(request_url)
		resp = requests.get(url=request_url)
		self.result = json.loads(resp.text)

	def get_current_weather(self):
		current = self.result["currently"]
		current_weather = {
			"summary": current["summary"],
			"temp": int(round(current["temperature"])),
		}

		return current_weather

	def get_daily_weather(self):
		daily_result = self.result["daily"]["data"][0]
		daily_weather = {
			"summary": daily_result["summary"],
			"icon": daily_result["icon"],
			"wind_speed": int(round(daily_result["windSpeed"])),
			"temp_high": int(round(daily_result["temperatureMax"])),
			"temp_low": int(round(daily_result["temperatureMin"])),
		}
		return daily_weather

	def get_hourly_weather(self):
		hourly_weather = self.result["hourly"]["data"]
		for keys in hourly_weather:
			keys["time"] = self.convert_epoch(keys["time"])

		return hourly_weather

	def convert_epoch(self, epoch_time):
		converted = datetime.fromtimestamp(epoch_time).strftime('%H:%M')
		return converted


	def set_location(self, long, lat):
		self.location["lon"] = lon
		self.location["lat"] = lat

	def get_location(self):
		return self.location
