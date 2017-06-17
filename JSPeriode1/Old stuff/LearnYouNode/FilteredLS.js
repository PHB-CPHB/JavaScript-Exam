const path = require("path");
let fs = require("fs");

const PathToDir = process.argv[2];
const ext = "." + process.argv[3];
var stringArray = [];

    fs.readdir(PathToDir, function(error, data){
        if (error) {
            return callback(err)
        }
           var list = data.filter((file) => path.extname(file) === ext);
           for(var i = 0; i < list.length; i++){
               console.log(list[i]);
           }
        
        
    })