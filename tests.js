QUnit.test( "Test the getCoCode function", function( assert ) {

    assert.throws( function() {
        getGoCode();
    }, "Message identifying the test succeeded in catching the error." );
