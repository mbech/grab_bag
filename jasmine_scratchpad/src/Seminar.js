var Seminar = {};

Seminar.create = function(initObj){
  var instance = Object.create(this);
  instance.name = initObj.name || "Unknown";
  instance.price = initObj.price || "Unknown";
  return instance;
};

Seminar.getName = function(){
  return this.name;
};

Seminar.getPrice = function(){
  return this.price;
};

Seminar.getGrossPrice = function(){
  return this.price * 1.20;
};
