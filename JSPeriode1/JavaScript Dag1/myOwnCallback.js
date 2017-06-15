

let names = ["Kasper", "Bo", "Hazem", "phillip"];

function myMap (arr, callback){
    let arrayToReturn = [];
    arr.forEach(function(name) {
        let shouldInclude = callback(name);
        if (shouldInclude) { 
            arrayToReturn.push(name);
        }
    })
    return arrayToReturn;
};
var testMyMap = myMap(names, function(name){
    console.log("Test Map " + name);
});

console.log(testMyMap);

function myFilter(names, callback){
    let arrayToReturn = [];
    names.forEach(function(name){
        if (name.length >= 3)  {
            arrayToReturn.push(name);
        }
    })
    return arrayToReturn;
};

var testMyFilter = myFilter(names, function(name){
    console.log(name);
})

console.log(testMyFilter);

