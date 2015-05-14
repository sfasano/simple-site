//Q5 Write a function that returns a random string from an array of strings.
var array = [ "blue", "green", "red", "yellow", "purple", "white", "black" ];

function randomString(array) {

  return array[Math.floor(Math.random() * array.length)];
}

$( 'button' ).on('click', function() {
    $('h1').text(randomString(array));
});
//console.log(randomString(array));

