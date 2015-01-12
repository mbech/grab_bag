(function() {
  module("Object Manipulation");
  QUnit.test( "incrementor", function( assert ) {
    var incr = incrementor(),
        incr2 = incrementor();

    assert.equal( incr(), 1, "Initial returned value is 1" );
    assert.equal( incr(), 2, "Next returned value is 2" );
    assert.equal( incr(), 3, "Next returned value is 3" );
    
    assert.equal( incr2(), 1, "New instances don't share same counter" );
  });
}());
