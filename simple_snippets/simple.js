var simple_snippets = simple_snippets || {};

simple_snippets.isFirstCharUpper = function(string){
  console.log("string[0] is: " + string[0]);
  console.log("string[0].toUpperCase is: " + string[0].toUpperCase());

  return string[0] === string[0].toUpperCase(); 
}

simple_snippets.runTests = function(){
  console.log(this.isFirstCharUpper("test") + " - should be false");
  console.log(this.isFirstCharUpper("Really") + " - should be true");
  console.log(this.isFirstCharUpper("42") + " - should be false");
}

simple_snippets.runTests();
