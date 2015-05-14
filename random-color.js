var array = [ "blue", "green", "red", "yellow", "purple", "white", "black" ];

function randomString() {

  return array[Math.floor(Math.random() * array.length)];
}

module.exports = randomString;
