const express = require( 'express' );

const router = express.Router();

// route to root directory
router.get( '/', function( req, res ) {
    res.render( 'home/index' );
} );

module.exports = router;
