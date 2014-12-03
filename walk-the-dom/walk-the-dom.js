//Function to traverse all children of supplied element and apply function
//supplied as a parameter
var walkTheDOM = function(node, func){
  func(node);
  var childNode = node.firstChild;
  while ( childNode ){
    walkTheDOM(childNode, func);
    childNode = childNode.nextSibling;  
  }
}

walkTheDOM(document.body, function(node){
  console.log("On node name: ");
  console.log(node);
});
