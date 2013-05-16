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
};

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

    Rift.worldIsoX(4, 1) * 30; // returns 90

*/
Rift.worldIsoX = function(isoX, isoY) {
    return (isoX - isoY);
};

/*
Convert given isometric coordinates into a y position. This can be used to render isometric tiles.

Example:

    Rift.worldIsoY(3, 2) * 30; // returns 75

*/
Rift.worldIsoY = function(isoX, isoY) {
    return (isoX + isoY) * 0.5;
};

/*
Convert given isometric z position into a y position. This can be used to find an isometric tile's height.

Example:

    Rift.worldIsoZ(1) * 30; // return 30

*/
Rift.worldIsoZ = function(isoZ) {
    return isoZ;
};