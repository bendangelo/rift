var should = require("should");
var Interia = require("../interia.js");

suite("utils");

test("#clamp()", function(){

    Interia.clamp(10, 0).should.equal(10);
    Interia.clamp(10, 0, 5).should.equal(5);
    Interia.clamp(-1, 0, 5).should.equal(0);
    Interia.clamp(9, 10).should.equal(10);

});