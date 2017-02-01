//Makes a shallow clone of a string
String.prototype.clone = function(){
  return this.split('').slice(0).join('');
};

//Makes a shallow clone of an Array
Array.prototype.clone = function(){
  return this.slice(0);
};

//Makes an array an array of arrays params number of rows and columns
Array.prototype.gridify = function(n){
  var grid = [];
  for(var i = 0; i < n; i++){
    grid.push( this.slice((n * i) , (n * (i + 1))));
  }
  return grid;
};

//Spins an array of arrays clockwise once
Array.prototype.transpose = function(){
  var working_array = this;
  var new_array = this[0].map(function(col, i) {
    return working_array.map(function(row) {
      return row[i];
    });
  });
  return new_array.reverse();
};

///Test code
var testArr = [1,2,3,4,5,6,7,8,9];
var test2 = "ABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(test2.split('').gridify(5))
