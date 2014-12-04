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
