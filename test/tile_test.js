var should = require("should");
var Rift = require("../rift.js");

suite("tile");

var size = 40;

test("#tile()", function(){

    Rift.tile(20, size).should.eql(0);
    Rift.tile(50, size).should.eql(1);

});

test("#toTileWorld", function(){

    Rift.tileWorld(20, size).should.eql(0);
    Rift.tileWorld(63, size).should.eql(size);

});

test("#bisectX", function(){

});

test("#bisectY", function(){

});