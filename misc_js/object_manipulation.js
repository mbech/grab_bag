var myClone = function(obj){
  var cloneObj = {};
  if(obj === null || typeof obj != "object"){
    return obj;
  } else {
    for (var prop in obj){
      console.log("Adding " + prop);
      cloneObj[prop] = myClone(obj[prop]);
    }
  }
  return cloneObj;
};

var incrementor = function(baseval){
  if(typeof baseval === "undefined"){
    baseval = 0; 
  }

  return function(){
      return ++baseval;
    };
  
};
