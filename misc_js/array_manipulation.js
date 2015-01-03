//Find second highest number in an integer array
secondMax = function(array) {
  var sorted = array.sort();
  var max = sorted[sorted.length - 1];
  return sorted[sorted.indexOf(max) - 1];
};

//In an array 1-100 exactly one number is duplicate how do you find it
findDuplicate = function(array) {
  var hash = {}; 
  var i = array.length;
  while (i--) {
    if (hash[array[i]]) {
      return array[i];
    } else {
      hash[array[i]] = true; 
    }
  }
};

//Implement bubblesort
bubbleSort = function(array) {
  var len = array.length;
  var sorted = false;
  
  while (i-- || sorted) {
      
  }
};
