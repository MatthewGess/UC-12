QUnit.test( "A title for the test", function( assert ) {
    assert.throws( function() {
        yourFunction(badInput);
    }, "Message identifying the test succeeded in catching the error." );
