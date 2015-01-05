//Find second highest number in an integer array
secondMax = function(array) {
  var sorted = array.sort(function(a,b){
    return a - b;
  });
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
  var unsorted = true;
  var totalSwaps = 0;

  while (unsorted) {
    var swaps = 0;
    for (var i = 0, l = array.length; i < l; i ++) {
      //note: array[i+1] will be undefined on last interation, ">" comparison
      //will fail (false condition for if statment) and not attempt to swap
      if (array[i] > array[i+1]) {
        var swap = array[i+1]; 
        array[i+1] = array[i];
        array[i] = swap;
        swaps++;
      }
    }
    if (swaps === 0) {
      //No swaps on this pass, so array is sorted
      unsorted = false; 
    }
    totalSwaps += swaps;
  }
  console.log("total swaps: " + totalSwaps);
  return array;
};

/*
Input: array of strings
Output: array of only palindrome strings

Palindrome array filter
*/
function palindromeFilter(array){
        return array.filter(function(ele){
            return isPalindromeHelper(ele); 
        });
    };
   
function isPalindromeHelper(string){
    var leftIndex = 0,
        rightIndex = string.length - 1;
        
    while (leftIndex < rightIndex){
        if (string[leftIndex] !== string[rightIndex]){
            return false;
        }
        ++leftIndex;
        --rightIndex;
    }
    return true;
};
