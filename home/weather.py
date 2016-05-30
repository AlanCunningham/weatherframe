# Author: Alan Cunningham
# Date 30/05/2016


import requests
import json


class Weather:
	location = {"lon": "51.4927245", "lat": "-0.2122906"}
	api_key = "6d73c99eb441945dcb1d1434a49db41e"
	url = "https://api.forecast.io/forecast/"
	result = None

	def __init__(self):
		# Make the initial weather request
		request_url = self.url + self.api_key + "/" + self.location["lon"] + "," + self.location["lat"]
		r = requests.get(request_url)
		resp = requests.get(url=request_url)
		self.result = json.loads(resp.text)

	def get_current_weather(self):
		return self.result["currently"]["summary"]

	def get_daily_weather(self):
		daily_weather = {
			"summary": self.result["daily"]["data"][0]["summary"],
			"icon": self.result["daily"]["data"][0]["icon"],
		}
		return daily_weather

	def set_location(self, long, lat):
		self.location["lon"] = lon
		self.location["lat"] = lat

	def get_location(self):
		return self.location
