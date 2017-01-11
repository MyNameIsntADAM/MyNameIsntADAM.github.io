window.onload = function() {
	var a = document.getElementById("random");
	a.onclick = function() {
		var num = document.querySelectorAll('.project').length;
		var random = Math.floor(Math.random() * num) + 1;
		/* Do this when you actually have three projects up
		window.open('project' + random + '.html');
		*/
		window.open('project1.html');
		return false;
	}
}