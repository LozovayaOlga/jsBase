var maindiv = document.createElement('div');
maindiv.className = "maindiv";
document.body.appendChild(maindiv);

for (var i = 0; i < 64; i++) {
	var mainDiv = document.querySelector('.maindiv');
	var div = document.createElement('div');
	if (i % 2) {
		div.className = "white";

	} else {
			div.className = "black";

	}
	mainDiv.appendChild(div);
}



