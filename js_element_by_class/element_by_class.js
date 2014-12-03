//Implement the getElementsByClassName(element, className) function.

var getElementsByClassName = function(element, className){
  var matchedElements = [];

  var recursiveChildSearch = function(element, className){
    var childNodes = element.children;
    if(childNodes.length === 0){
      return [];
    } 
    for(var i=0, len=childNodes.length; i < len; i++){
      if (childNodes[i].className.split(" ").indexOf(className) > -1){
        matchedElements.push(childNodes[i]);
      }
      if (childNodes[i].children.length > 0){
        recursiveChildSearch(childNodes[i], className);
      }
    }
  }
  recursiveChildSearch(element, className);

  return matchedElements;
}

console.log(getElementsByClassName(document.body, "header"));
console.log(getElementsByClassName(document.body, "inner"));
