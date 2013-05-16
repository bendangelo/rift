var should = require("should");
var Rift = require("../rift.js");

suite("trig");

test("#toDeg()", function(){

    Rift.toDeg(Math.PI).should.equal(180);

});

test("#toRad()", function(){

    Rift.toRad(180).should.equal(Math.PI);

});