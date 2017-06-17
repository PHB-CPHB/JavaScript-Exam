var expect = require("chai").expect;
var airline = require("../model/airline");
var nock = require("nock");
var date = new Date(2016-03-09);
var testInfo = { airline: 'AngularJS Airline',
  flights: 
   [ { flightID: 'COL2215x100x2016-03-09T08:00:00.000Z',
       numberOfSeats: 4,
       date: '2016-03-09T08:00:00.000Z',
       totalPrice: 340,
       traveltime: 60,
       origin: 'SXF',
       destination: 'CPH' } ] };

var n = nock('http://angularairline-plaul.rhcloud.com');

  describe('Get a flight with nock', function () {
    before(function (done) {
        n.get("/api/flightinfo/")
            .reply(200, testInfo);
        done();
    });
    it("This should return Flight Info", function (done) {
        airline.getAvailTickets("SFX",date, 4,function (err, flight) {
            if (err) {
                throw err;
            }
            expect(testInfo.origin).to.be.equal("SXF");
            expect(flight).to.be.eql(testInfo);
            done();

        })
    });
});     