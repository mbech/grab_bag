var simple_snippets = simple_snippets || {};

simple_snippets.isFirstCharUpper = function(string){
  var re = /^[A-Z]/;
  return string.match(re) ? true : false; 
};

simple_snippets.circleArea = function(radius){
  return (radius * radius) * Math.PI;
};

simple_snippets.arraySum = function(array){
  var sum = array.reduce(function(prev_val, current_val){
    return prev_val + current_val; 
  });
  return sum;
};
