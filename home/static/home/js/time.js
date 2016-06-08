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
	setTimeout(update_time, 1000);
}

function pad(number) {
	if (number < 10) {
		number = "0" + number;
	}
	return number;
}
