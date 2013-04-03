var should = require("should");
var Rift = require("../rift.js");

suite("random");

test("#random()", function(){
    var i;

    Rift.random(1,1).should.above(1);

    for(i=0; i<10; i++){
        Rift.random(i).should.be.within(0, i+1);
        Rift.random(i, i*2).should.be.within(i, i*2+1);
    }

    Rift.random({ key: "value" }).should.equal("key");

    for(i=0; i<10; i++){
        Rift.random([6, 10, 99]).should.be.above(5);
    }

});

test("#randomInt()", function(){

    for(var i=0; i<10; i++){
        Rift.randomInt(i).should.be.within(0, i);
        Rift.randomInt(i, i*2).should.be.within(i, i*2);
    }

});