// Author: Alan Cunningham
// Date 30/05/2016

window.onload = init;

function init() {
	set_icon();
}

function set_icon() {
	weather_type = $("#icon1").attr("class");
	var skycons = new Skycons({"color": "dodgerblue"});
	skycons.add("icon1", weather_type);
	skycons.play();
	update_time();
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
