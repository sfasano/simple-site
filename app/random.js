/* //Q5 Write a function that returns a random string from an array of strings.
var array = [ "blue", "green", "red", "yellow", "purple", "white", "black" ];

function randomString(array) {

  return array[Math.floor(Math.random() * array.length)];
}
*/
/*
$( 'button' ).on('click', function() {
    $('h1').text(randomString(array));
});
//console.log(randomString(array));
*/

$('#color-picker').on('click', function () {

    $.get('/color', function(color){
      $('h1').text(color).css('color', color).css('background', "grey");
    });
});

$.get( '/jokes', function (jokes) {
    //console.log(jokes);
    var main = $("main");
    jokes.forEach(function(joke) {
      main.append('<p>' + joke.setup + '</p>');
      main.append('<p>' + joke.punchline + '</p>');
    });
});
