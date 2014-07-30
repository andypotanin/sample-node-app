var express = require( 'express' );
var app = express();

app.use( function( req, res ) {

  res.send( 'Sample Node.js application.' );

});


app.listen( process.env.PORT || 80, process.env.HOST || '0.0.0.0', function() {
  console.log( 'Express app online', this.address() );
});
