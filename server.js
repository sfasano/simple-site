var express = require( 'express' ),
	random = require( './random-color' ),
	jokes = require( './jokes' ),
	app = new express(),
	path = require( 'path' ),
	port = 3000;

app.use( express.static( path.join(__dirname, 'app') ) );

app.get( '/color', function( req, res ) {
	res.send( random() );
});

app.get( '/jokes', function( req, res ) {
	res.json(jokes);
});

app.listen( port, function() {
	console.log( 'app started on port', port );
});
