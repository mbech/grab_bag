//Find second highest number in an integer array
secondMax = function(array){
  var sorted = array.sort();
  var max = sorted[sorted.length - 1];
  console.log(sorted);
  console.log(max);
  return sorted[sorted.indexOf(max) - 1];
}
