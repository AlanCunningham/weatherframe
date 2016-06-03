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
		"sun": "#ffb300",
		"rain": "#0288d1",
		"cloud": "#9e9e9e",
		"sleet": "#9e9e9e",
		"snow": "#9e9e9e",
		"wind": "#9e9e9e",
		"fog": "#9e9e9e",
	}
	for (var key in colours){
		if (weather.indexOf(key) > -1) {
			console.log(weather + " | " + key + " | " + "Match!");
			return colours[key];
		} else {
			console.log(weather + " | " + key + " | " + "No match!");
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
