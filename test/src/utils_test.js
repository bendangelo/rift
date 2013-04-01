var should = require("should");

suite("utils");

test("#clamp()", function(){

    Interia.clamp(10, 0).should.equal(10);

});