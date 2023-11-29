document.getElementById("generateButton").onclick = function() {
    document.getElementById("myModal").style.display = "block";
}

document.getElementById("yesButton").onclick = function() {
    document.getElementById("myModal").style.display = "none";
    // Handle the "Yes" action here
}

document.getElementById("noButton").onclick = function() {
    document.getElementById("myModal").style.display = "none";
    // Handle the "No" action here
}
