var colors = [ "blue", "green", "red", "yellow", "purple", "white", "black" ];

function randomColor() {
	return colors[ Math.floor( Math.random() * colors.length ) ];
}

module.exports = randomColor;
