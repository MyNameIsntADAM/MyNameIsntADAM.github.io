window.onload = function() {
	var a = document.getElementById("random");
	a.onclick = function() {
		var num = document.querySelectorAll('.project').length;
		var random = Math.floor(Math.random() * num) + 1;
		window.open('project' + random + '.html');
		return false;
	}
}