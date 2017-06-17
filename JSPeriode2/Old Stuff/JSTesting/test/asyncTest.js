var expect = require("chai").expect;
var dirSearcher = require("../BasisMocha/asynchronousCode");
let fs = require("fs");

describe('Testing async', function () {
    var foo = false; 
    dirSearcher(__dirname, "js", function (done, list, error) {
        if (error) {
            return console.log("Error: ", error);
        }
        list.forEach(function (file) {
            console.log(file);
            foo = true;
            done();
        })
    });
    it('It should find all .js files', function () {
        expect(foo).to.equal(true);
    });
});

