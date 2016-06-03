# Author: Alan Cunningham
# Date 29/05/2016

from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

from datetime import datetime
from weather import Weather


# Create your views here.
def index(request):
	template = loader.get_template('home/index.html')
	weather = Weather()
	context = {
		"greeting": "Hello there",
		"date": current_date(),
		"daily_weather": weather.get_daily_weather(),
		"current_weather": weather.get_current_weather(),
		"hourly_weather": weather.get_hourly_weather(),
	}
	return HttpResponse(template.render(context, request))

def current_date():
	now = datetime.now()
	date = {
		"day": now.strftime("%A"),
		"full_date": now.strftime("%x"),
	}
	return date
