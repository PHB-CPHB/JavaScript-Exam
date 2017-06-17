var fs = require('fs');

var string = fs.readFileSync(process.argv[2], "UTF-8");

var stringArray = [];
stringArray = string.split('\n');

console.log(stringArray.length-1)