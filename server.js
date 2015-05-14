var express = require( 'express' ),
	random = require( './random-color' ),
	jokes = require( './jokes' ),
	app = new express(),
	port = 3000;


app.get( '/', function( req, res ) {
	res.send( 'rocking code fellows!' );
});

app.get( '/color', function( req, res ) {
	res.send( random() );
});

app.get( '/jokes', function( req, res ) {
	res.json(jokes);
});

app.listen( port, function() {
	console.log( 'app started on port', port );
});
