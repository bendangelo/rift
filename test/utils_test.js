var should = require("should");
var Rift = require("../rift.js");

suite("utils");

test("#clamp()", function(){

    Rift.clamp(10, 0).should.equal(10);
    Rift.clamp(10, 0, 5).should.equal(5);
    Rift.clamp(-1, 0, 5).should.equal(0);
    Rift.clamp(9, 10).should.equal(10);

});