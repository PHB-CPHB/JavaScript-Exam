var myModul = require("./MakeItModularExport.js");

const PathToDir = process.argv[2];
const ext = process.argv[3];

myModul(PathToDir, ext, function callback(error, data){
    if (error) {
        return callback(error);
    }
    for(var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
});