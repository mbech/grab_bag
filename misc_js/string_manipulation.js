//Write a method which will remove any given character from a String
var removeChar = function(string, character){
  var len = string.length;
  var output = "";

  for(var i = 0; i < len; i++){
    if ( string[i] !== character ){
      output += string[i];
    }
  }
  return output;
};

//Print all permutation of String 
var recursiveStringPermute = function(string, prefix){
  if(typeof prefix === "undefined"){
    prefix = "";
  }
  var len = string.length;
  if (len === 1){
    //recursion bottomed out
    console.log(prefix + string);
  } else {
    for(var i = 0; i < len; i++){
      var substring = string.slice(0, i) + string.slice(i+1);
      recursiveStringPermute(substring, prefix + string[i]);
    }
  }
};

//Write a function to find out longest palindrome in a given string?
var findLongestPalindrome = function(str){
  var charHash = {};
  var i = str.length;
  while (i--){
    if(str[i] in charHash){
      charHash[str[i]] += 1;
    } else {
      charHash[str[i]] = 1;
    }
  }
  var palindrome = "";
  for(var prop in charHash){
    if(charHash.hasOwnProperty(prop)){
      while (charHash[prop] > 1){
        palindrome = prop + palindrome + prop;
        charHash[prop] -= 2;
      }
    }
  }
  return palindrome;
};
