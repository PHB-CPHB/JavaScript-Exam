const path = require("path");
let fs = require("fs");

let dirSearcher = function (PathToDir, ext, callback) {
    fs.readdir(PathToDir, function (err, data) {
        if (err) {
            return callback(err)
        }
        var filtered = data.filter((file) => path.extname(file) === "."+ext);
        callback(null, filtered);

    })
}
module.exports = dirSearcher;