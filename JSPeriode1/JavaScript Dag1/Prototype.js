var names = ["kurt", "ole", "ib"];

//This is my NEW version of forEach
//It does not really make sense here, what does this refer to?
function myforEach(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}
//myforEach((name)=>console.log(name));
//Now it makes sense, when attached to the Array.prototype
Array.prototype.myforEach = myforEach;
Array.prototype.myFilter = myFilter;
Array.prototype.myMap = myMap;
//Observe how it's used exactly as the the original forEach
names.myforEach(function (name) {
  console.log(name);
})

console.log("-------------------------------")

function myFilter(callback) {
  for (var i = 0; i < this.length; i++) {
    if (this[i].length >= 3) {
      callback(this[i]);
    }
  }
}

names.myFilter(function (name) {
  console.log(name);
})

console.log("-------------------------------")

function myMap(callback) {
  let arrayToReturn = [];
  for (var i = 0; i < this.length; i++) {
    arrayToReturn.push(this[i]);
  }
  callback(arrayToReturn);
}

names.myMap(function (name) {
  console.log(name);
})