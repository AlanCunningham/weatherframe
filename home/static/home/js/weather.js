// Author: Alan Cunningham
// Date: 08/06/2016
// Functions related to weather, including setting the weather icons
var weather = {

	set_main_icon: function() {
		var self = this;
		weather_type = $("#main-weather").attr("class");
		weather_colour = self.get_icon_colour(weather_type);
		var skycons = new Skycons({"color": weather_colour});
		skycons.add("main-weather", weather_type);
		skycons.play();
	},

	set_timeline_icons: function() {
		$("#timeline > div").children().each(function(){
			weather_type = $(this).attr("class");
			var skycons = new Skycons({"color": "white"});
			skycons.add(this, weather_type);
			// Too many animations is jumpy on the Pi 2.  Only animate rain.
			// Will replace this with static icons
			if (weather_type === "rain"
				|| weather_type === "wind"
				|| weather_type === "snow"
				|| weather_type === "sleet"){
				skycons.play();
			}

		});
	},

	get_icon_colour: function(weather) {
		// Quick and dirty fix to make rain more visible at dusk
		var now = new Date();
		var hour = pad(now.getHours());
		var default_colour;
		if (hour >= 19 && hour < 21) {
			default_colour = "#bbdefb";
		} else {
			default_colour = "#0288d1";
		}

		var colours = {
			"clear-day": "#ffb300",
			"partly-cloudy-day": "#ffb300",
			"clear-night": "#0d47a1",
			"partly-cloudy-night": "#0d47a1",
			"rain": default_colour,
			"sleet": default_colour,
			"cloudy": "#9e9e9e",
			"wind": "#9e9e9e",
			"snow": "#90a4ae",
			"fog": "#757575",
		}
		for (var key in colours){
			if (key === weather) {
				return colours[key];
			}
		}
		return default_colour;
	},



}
