// Author: Alan Cunningham
// Date 30/05/2016

window.onload = init;

function init() {
	set_icon();
	update_time();
}


function set_icon() {
	weather_type = $("#icon1").attr("class");
	weather_colour = get_icon_colour(weather_type);
	var skycons = new Skycons({"color": weather_colour});
	skycons.add("icon1", weather_type);
	skycons.play();
}

function get_icon_colour(weather) {
	var default_colour = "#0288d1";
	var colours = {
		"night": "#0d47a1",
		"rain": "#0288d1",
		"sun": "#ffb300",
		"clear": "#ffb300",
		"partly-cloudy": "#ffb300",
		"cloud": "#9e9e9e",
		"sleet": "#757575",
		"snow": "#e0e0e0",
		"wind": "#757575",
		"fog": "#757575",
	}
	for (var key in colours){
		if (weather.indexOf(key) > -1) {
			return colours[key];
		}
	}
	return default_colour;
}

function update_time() {
	var now = new Date();
	var hour = pad(now.getHours());
	var min = pad(now.getMinutes());
	var sec = pad(now.getSeconds());
	time = hour + ":" + min + ":" + sec;
	$(".time").text(time);
	setTimeout(update_time, 1000);
}

function pad(number) {
	if (number < 10) {
		number = "0" + number;
	}
	return number;
}
