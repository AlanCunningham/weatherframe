// Author: Alan Cunningham
// Date: 08/06/2016
// Functions related to weather, including setting the weather icons
var weather = {

	set_icon: function() {
		var self = this;
		weather_type = $("#icon1").attr("class");
		weather_colour = self.get_icon_colour(weather_type);
		var skycons = new Skycons({"color": weather_colour});
		skycons.add("icon1", weather_type);
		skycons.play();
	},

	get_icon_colour: function(weather) {
		var default_colour = "#0288d1";
		var colours = {
			"clear-day": "#ffb300",
			"partly-cloudy-day": "#ffb300",
			"clear-night": "#0d47a1",
			"partly-cloudy-night": "#0d47a1",
			"rain": "#0288d1",
			"sleet": "#0288d1",
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
