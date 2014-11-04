describe("Simple Snippets", function() {

  beforeEach(function() {
  });

  describe("Function isFirstCharUpper(string)", function(){
    var lower_string = "not passing";
    var upper_string = "Should work";
    var number_string = "4543";

    it("should return true if first char of string is A-Z", function() {
      expect(simple_snippets.isFirstCharUpper(upper_string)).toBeTruthy();
    });
    it("should return false if first char of string is lowercase a-z", function() {
      expect(simple_snippets.isFirstCharUpper(lower_string)).toBeFalsy();
    });
    it("should return false if first char of string is a non-char (number)", function() {
      expect(simple_snippets.isFirstCharUpper(lower_string)).toBeFalsy();
    });

  });

});
