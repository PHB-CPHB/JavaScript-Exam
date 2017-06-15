var expect = require("chai").expect;
var calc = require("../BasisMocha/calculator");

describe('Testing divide', function(){
    it('It should devide a and b', function(){
      expect(calc.divide(10, 5)).to.be.equal(2);
    });
  });

  describe('Testing multiply', function(){
    it('It should multiply a and b', function(){
      expect(calc.multi(10, 5)).to.be.equal(50);
    });
  });

  describe('Testing add', function(){
    it('It should add a and b', function(){
      expect(calc.add(10, 5)).to.be.equal(15);
    });
  });

  describe('Testing sub', function(){
    it('It should sub a and b', function(){
      expect(calc.sub(10, 5)).to.be.equal(5);
    });
  });

