var simple_snippets = simple_snippets || {};

simple_snippets.isFirstCharUpper = function(string){
  var re = /^[A-Z]/;
  return string.match(re) ? true : false; 
}

simple_snippets.circleArea = function(radius){
  return (radius * radius) * Math.PI;
}
