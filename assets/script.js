
window.onload=function() {
	var footer = document.createElement("footer");
	var footText = document.createTextNode("© 2017-2020 please contact @InkxtheSquid#0069 on discord for bugs and kinks");
	footer.appendChild(footText);
	return document.getElementById("copyright").appendChild(footer);
}