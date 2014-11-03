function Song(name) {
  this._name = name;
}

Song.prototype.getName = function(){
  return this._name;
};

Song.prototype.persistFavoriteStatus = function(value) {
  // something complicated
  throw new Error("not yet implemented");
};
