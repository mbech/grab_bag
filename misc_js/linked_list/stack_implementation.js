//Implement a stack using either a linked list or a dynamic array, 
//and justify your decision. Design the interface to your stack to be complete, 
//consistent, and easy to use.

//FILO

var Stack = function(initial_value){
  this.data = initial_value;
  this.next_node = null;
}

Stack.prototype.push = function(value){
  this.getLastNode().next_node = {
    data: value,
    next_node: null
  }
  return 1;
}

Stack.prototype.pop = function(){
  var current_node = this.next_node;
  var prev_node = {};
  //if it's the last value on the stack, null data field and return 
  if(current_node === null){
    var value = this.data;
    this.data = null;
    return value;
  }
  while(current_node.next_node !== null){
    prev_node = current_node;
    current_node = current_node.next_node;
  }
  prev_node.next_node = null;
  return current_node.data;
}

Stack.prototype.getLastNode = function(){
  var current_node = this.next_node;
  while(current_node.next_node !== null){
    current_node = current_node.next_node; 
  }
  return current_node;
}

Stack.prototype.toString = function(){
  if(this.data === null){
    return "Stack is empty";
  }
  var stackStr = "| " + this.data;
  var current_node = this.next_node;
  while(current_node.next_node !== null){
    stackStr += current_node.data;
    current_node = current_node.next_node; 
  }
  return (stackStr + " |");
}

console.log("making stack...");
var my_stack = new Stack(22);
console.log(my_stack.toString());

