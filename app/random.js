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

var i = 0;

$('#jokes-display').on('click', function () {
  $.get( '/jokes', function (jokes) {
      //console.log(jokes);
      var main = $("main");
      main.html("");
      //jokes.forEach(function(joke) {
        main.append('<p>' + jokes[i].setup + '</p>');
        main.append('<p>' + jokes[i].punchline + '</p>');
        i++;
        if (i >= jokes.length) { i = 0; }
      //});
  });
});

$( window ).load( function () {
  $.get( '/youtube', function (youtube) {
      var div = $("div");
      div.html("");
      youtube.forEach(function(video) {
        div.append('<p class="title">TITLE: ' + video.title + '</p>');
        div.append('<p class="uploader">UPLOADED BY: ' + video.uploader + '</p>');
        div.append('<p class="views">NUMBER OF VIEWS: ' + video.views + '</p><br>');
      });
  });
});
