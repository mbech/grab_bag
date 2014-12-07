var Stack = function(data){
  this.store = [data];
}

Stack.prototype = {
  pop: function(){
   return this.store.pop();
  },

  push: function(data){
    this.store.push(data);
    return this;
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
