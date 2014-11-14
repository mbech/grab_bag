var Seminar = {};

Seminar.create = function(initObj){
  var instance = Object.create(this);
  instance.name = initObj.name || "Unknown";
  return instance;
};

Seminar.getName = function(){
  return this.name;
};
