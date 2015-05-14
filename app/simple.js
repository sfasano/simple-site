$('p').css('color', 'green');


// option 2
$('#color-picker').on( 'click', function(){

	$.get( '/color', function(color) {
		$('#color').text(color).css('color', color);
	})
});

var ractive = new Ractive({
	el: 'main',
	template: '#template',
	save: function(){
		console.log('data is', this.get('jokes'))
	}
});

$.get( '/jokes', function(jokes){
	ractive.set('jokes', jokes);
})





/*
// option 3
function setColor(color){
	$('main').text(color).css('color', color);
}

$('#color-picker').on( 'click', function(){
	$.get( '/color', setColor)
})


// option 1
function setColor(color){
	$('main').text(color).css('color', color);
}

$('#color-picker').on( 'click', function(){

	$.get( '/color', function( response) {
		setColor(response);
	})
})
*/
