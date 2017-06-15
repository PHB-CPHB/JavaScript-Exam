var expect = require("chai").expect;
var jokes = require("../model/nockJoke");
var nock = require("nock");
var testJoke = { "id": 1234, "joke": "ha ha ha", "reference": "unknown" };
var myjoke = { "id": 1, "joke": "It's good to be a vamp", "ref": "unknown" };

var n = nock('http://jokes-plaul.rhcloud.com');

describe('Person API Get', function () {
    before(function (done) {
        n.get('/api/joke')
            .reply(200, testJoke);
        done();
    });

    it('should fetch the vampire joke', function (done) {
        jokes.getJoke(function (err, joke) {
            if (err) {
                throw err;
            }
            expect(joke.reference).to.be.equal("unknown");
            expect(joke).to.be.eql(testJoke);
            done();
        })
    });
});

describe('Get a joke with nock', function () {
    before(function (done) {
        n.get("/api/joke")
            .reply(200, myjoke);
        done();
    });
    it("It should get a bad joke", function (done) {
        jokes.getJoke(function (err, joke) {
            if (err) {
                throw err;
            }
            expect(joke.id).to.be.equal(1);
            expect(joke).to.be.eql(myjoke);
            done();

        })
    });
});