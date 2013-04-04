/*! rift V0.1.0 %> */
(function( window ) {

var Rift = {};

// current rift version
Rift.VERSION = '0.1.0';

/*
Checks if two rectangles overlap.

Example:

    Rift.hitTest(0, 0, 10, 10, 9, 9, 5, 5); // returns true

*/
Rift.hitTest = function(x1, y1, w1, h1, x2, y2, w2, h2) {
    return !
    (
    x1 > x2 + w2 ||
    x1 + w1 < x2 ||
    y1 > y2 + h2 ||
    y1 + h1 < y2
    );
};

/*
Calculates distance between two points.

Example:

    Rift.distance(10, 10, 20, 40); // returns 31

*/
Rift.distance = function(x1, y1, x2, y2) {
  var kx, ky;
  kx = x2 - x1;
  ky = y2 - y1;

  return Math.sqrt(kx*kx + ky*ky);
};
/*
Randomly find an array element, object value or number.

Example:

    Rift.random(); // returns 0-1

    Rift.random(10); // returns 0-9

    Rift.random(5, 15); // returns 5-14

    Rift.random({ key: "value" }); // returns "key"

    Rift.random([10, 1, 5]); // returns random element

*/
Rift.random = function(max, min) {

    var rand = Math.random();
    if (max instanceof Array) {

        // find array element
        return max[rand * max.length | 0];

    } else if (typeof max == "object") {

        // return random object key
        var result;
        for (var prop in max) {
            if (Math.random() < 1 / ++rand || !result) {
                result = prop;
            }
        }

        return result;
    }

    // return random number based on arguments
    switch (arguments.length) {
        case 0:
            return rand;
        case 1:
            return rand * max;
        case 2:
            return rand * (max - min + 1) + min;
    }

};

/*
Same as "Rift.random()" except always returns an integer value.
*/
Rift.randomInt = function() {
    return Rift.random.apply(Rift, arguments)| 0;
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
Convert a tile value into a x tile position. This is useful for sprites where you have a single id that can be used to identify x and y positions. Values returned are in tile space.

Example:

    Rift.bisectX(1, 160, 60); // returns 1

*/
Rift.bisectX = function(value, tileWidth, totalWidth) {
    return value % (totalWidth / tileWidth) | 0;
};

/*
Convert a tile value into a y tile position. This is useful for sprites where you have a single id that can be used to identify x and y positions. Values returned are in tile space.

Example:

    Rift.bisectY(1, 160, 60); // returns 0

*/
Rift.bisectY = function(value, tileWidth, totalWidth) {
    return (value * tileWidth) / (totalWidth - 0.1) | 0;
};

/*
Convert tile x and y positions into a single number that can later be retrived from bisectX / bisectY.

Example:

    Rift.toBisect(1, 2, 40, 80);

*/
Rift.toBisect = function(tileX, tileY, tileWidth, totalWidth) {
    return (tileX + (tileY * (totalWidth / tileWidth)));
}

/*
Convert a given position into an isometric x coordinate.

Example:

    Rift.isoX(-9, 90, 30); // returns 2

*/
Rift.isoX = function(x, y, tileWidth) {
    var ym = (2 * y - x) * 0.5;
    var xm = x + ym;

    return Math.round(xm / tileWidth) - 1;
};

/*
Convert a given position into an isometric y coordinate.

Example:

    Rift.isoY(-5, 30, 30); // returns 1

*/
Rift.isoY = function(x, y, tileDepth) {
    var ym = (2 * y - x) * 0.5;

    return Math.round(ym / tileDepth);
};

/*
Convert a given position into an isometric z coordinate.

Example:

    Rift.isoZ(2, 30); // returns 0

*/
Rift.isoZ = function(z, tileHeight) {
    return Rift.tile(z, tileHeight);
};

/*
Convert given isometric coordinates into a x position. This can be used to render isometric tiles.

Example:

    Rift.worldIsoX(4, 1, 30); // returns 90

*/
Rift.worldIsoX = function(isoX, isoY, tileWidth) {
    return (isoX - isoY) * tileWidth;
};

/*
Convert given isometric coordinates into a y position. This can be used to render isometric tiles.

Example:

    Rift.worldIsoY(3, 2, 30); // returns 75

*/
Rift.worldIsoY = function(isoX, isoY, tileDepth) {
    return (isoX + isoY) * tileDepth * 0.5;
};

/*
Convert given isometric z position into a y position. This can be used to find an isometric tile's height.

Example:

    Rift.worldIsoZ(1, 30); // return 30

*/
Rift.worldIsoZ = function(isoZ, tileHeight) {
    return isoZ * tileHeight;
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