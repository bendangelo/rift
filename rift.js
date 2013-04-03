/*! rift V0.1.0 %> */
(function( window ) {

var Rift = {};

// current rift version
Rift.VERSION = '0.1.0';

Rift.hitRect = function(x1, y1, w1, h1, x2, y2, w2, h2) {

};

Rift.distance = function(x1, y1, x2, y2) {

};
/*
Convert the given coordinate into tile space.

Example:

    Rift.toTile(50, 40); // returns 1

    var x = 10, y = 40, size = 40;

    player.tileX = Rift.tile(x, size);
    player.tileY = Rift.tile(y, size);

*/
Rift.tile = function(value, size) {

    return (value - size * 0.5) / size + 0.5 | 0;

};

/*
Convert the given coordinate into tile space and then back into world space.

Example:

    Rift.tileWorld(54, 50); // returns 50

    Rift.tileWorld(10, 40); // returns 0

*/
Rift.tileWorld = function(value, size){

    return Rift.tile(value, size) * size;

};

Rift.bisectX = function(value, width, tileWidth) {
    return bi % (width / sizeX) | 0;
};

Rift.bisectY = function(value, width, tileWidth) {
    return (bi * sizeX) / (width - 0.1) | 0;
};
/*
Clamps a number between a minimum and maximum.

Example:

    Rift.clamp(5, 0); // return 5

    Rift.clamp(101, 0, 100); // return 100
*/
Rift.clamp = function(value, min, max) {

    if (value == null) return null;

    if (value < min) {
        return min;
    }

    if (max != null && value > max) {
        return max;
    }

    return value;
};

if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {

    // comment this out if you don't want Rift in global namespace
    window.Rift = Rift;

    define(function() {
      return Rift;
    });

} else if(typeof module == "object" && module.exports) {

    // Export Rift for nodejs
    module.exports = Rift;

} else {

    window.Rift = Rift;

}

}(this));