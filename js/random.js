window.onload = function() {
	var a = document.getElementById("random");
	a.onclick = function() {
		var num = document.querySelectorAll('.project').length;
		var random = Math.floor(Math.random() * num) + 1;
		if(random != 3) window.open('project' + random + '.html');
		else window.open('bumble/index.html');
		return false;
	}
}