//Implement the getElementsByClassName(element, className) function.

var getElementsByClassName = function(element, className){
  var matchedElements = [];
  var childNodes = element.children;

  if(childNodes.length === 0){
    console.log("no children of element:");
    console.log(element);
    return [];
  } 
  for(var i=0, len=childNodes.length; i < len; i++){
    console.log("checking out children of:");
    console.log(element);
    console.log(childNodes[i]);

    if (childNodes[i].className.split(" ").indexOf(className) > -1){
      matchedElements.push(childNodes[i]);
      getElementsByClassName(childNodes[i]);
    }
  }
  return matchedElements;
}

console.log(getElementsByClassName(document.body, "header"));
