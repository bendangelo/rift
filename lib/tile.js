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