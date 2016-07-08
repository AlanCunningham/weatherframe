// Author: Alan Cunningham
// Date: 08/06/2016
// Updates and formats the time

function update_time() {
	var now = new Date();
	var hour = pad(now.getHours());
	var min = pad(now.getMinutes());
	var sec = pad(now.getSeconds());
	time = hour + ":" + min + ":" + sec;
	$(".time").text(time);
	set_background(hour);
	setTimeout(update_time, 1000);
}

function pad(number) {
	if (number < 10) {
		number = "0" + number;
	}
	return number;
}

function set_background(hour) {
	if (hour >= 5 && hour < 9) {
		$("html").removeClass("night");
		$("html").addClass("dawn");
	}
	else if (hour >= 9 && hour < 19) {
		$("html").removeClass("dawn");
		$("html").addClass("day");
	}
	else if (hour >= 19 && hour < 21) {
		$("html").removeClass("day");
		$("html").addClass("dusk");
	}
	else {
		$("html").removeClass("dusk");
		$("html").addClass("night");
	}
}
