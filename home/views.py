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
		"weather": weather.get_daily_weather(),
	}
	return HttpResponse(template.render(context, request))

def current_date():
	now = datetime.now()
	date = {
		"day": now.strftime("%A"),
		"full_date": now.strftime("%x"),
	}
	return date

def time_based_greeting():
	hour = datetime.today().hour
	print(hour)
	if hour >= 4 and hour < 12:
		return "Good morning"
	elif hour >= 12 and hour < 17:
		return "Good afternoon"
	elif hour > 17 and hour < 4:
		return "Good evening"
