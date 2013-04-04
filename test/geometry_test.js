var should = require("should");
var Rift = require("../rift.js");

suite("core");

test("#distance()", function(){

    (Rift.distance(10, 10, 20, 40) | 0).should.eql(31);

});

test("#hitTest()", function(){

    Rift.hitTest(0, 0, 10, 10, 9, 9, 5, 5).should.eql(true);

    Rift.hitTest(0, 0, 10, 10, 11, 11, 5, 5).should.eql(false);

});