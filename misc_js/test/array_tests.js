(function() {
  module("Array functions");
  QUnit.test( "secondMax", function( assert ) {
    var result,
        unsortedArray = [5,2,6,7,3,11,3,2],
        sortedArray = [1,2,3,4,5,6];

    result = secondMax(unsortedArray);
    assert.equal(result, 7, "unsorted array" );
    result = secondMax(sortedArray);
    assert.equal(result, 5, "sorted array" );
    result = secondMax([]);
    assert.equal(result, undefined, "empty array" );
  });
}());
