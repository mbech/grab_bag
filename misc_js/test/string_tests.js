(function() {
  module("String functions");
  QUnit.test( "isPalindrome", function( assert ) {
    var result,
        nonPalindrome = "hellizlleh",
        palindrome = "amanaplanacanalpanama";

    result = isPalindrome(nonPalindrome);
    assert.equal( result === false, "non-palindrome" );
    result = isPalindrome(palindrome);
    assert.equal( result === true, "palindrome" );
  });
}());
