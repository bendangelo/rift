var should = require("should");
var Rift = require("../rift.js");

suite("tile");

var size = 40;

test("#tile()", function(){

    Rift.tile(20, size).should.eql(0);
    Rift.tile(50, size).should.eql(1);

});

test("#bisectX()", function(){

    Rift.bisectX(1, 60, 160).should.eql(1);

});

test("#bisectY()", function(){

    Rift.bisectY(1, 60, 160).should.eql(0);

});

test("#toBisect()", function(){

    var x = 1, y = 0;

    Rift.toBisect(x, y, size, 80).should.eql(1);

    Rift.bisectX(1, 40, 80).should.eql(x);
    Rift.bisectY(1, 40, 80).should.eql(y);

});

test("#isoX()", function(){

    Rift.isoX(-9, 90, 30).should.eql(2);

});

test("#isoY()", function(){

    Rift.isoY(-5, 30, 30).should.eql(1);

});

test("#isoZ()", function(){

    Rift.isoZ(30, 30).should.eql(1);
    Rift.isoZ(29, 30).should.eql(0);

});

test("#worldIsoX()", function(){

    Rift.worldIsoX(4, 1, 30).should.eql(90);
});

test("#worldIsoY()", function(){

    Rift.worldIsoY(3, 2, 30).should.eql(75);
});

test("#worldIsoZ()", function(){
    Rift.worldIsoZ(1, 30).should.eql(30);
});