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
	},



}
