var fs = require('fs');
var stringArray = [];
fs.readFile(process.argv[2], "UTF-8", function callback(error, data){
if (error) {
    console.log("Error")
}
stringArray = data.split("\n");
console.log(stringArray.length - 1);
});