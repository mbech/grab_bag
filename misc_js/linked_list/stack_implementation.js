//Implement a stack using either a linked list or a dynamic array, 
//and justify your decision. Design the interface to your stack to be complete, 
//consistent, and easy to use.

//LIFO

var Node = function(data){
  this.data = data;
  this.nextNode = null;
};

var Stack = function(data){
  this.head = new Node(data);
};

Stack.prototype = {
  push: function(data){
    var currentNode = this.head;
    while(currentNode.nextNode !== null){
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = new Node(data);
    return this;
  },
  pop: function(data){
    var currentNode = this.head,
    prevNode = null,
    popData = null;

    if(currentNode === null){
      return null; 
    }
    if(currentNode.nextNode === null){
      popData = currentNode.data;
      this.head = null;
      return popData;
    }
    while(currentNode.nextNode !== null){
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    popData = currentNode.data;
    prevNode.nextNode = null;
    return popData;
  }
};

var myStack = new Stack(15);
console.log(myStack);
myStack.push(55).push("hello").push(33);
console.log(myStack);
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
