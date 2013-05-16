/*
Convert the given radian intro degrees.

Example:

    Rift.toDeg(Math.PI) // returns 180

*/
Rift.toDeg = function(radians){
    return radians * 180.0 / Math.PI;
};

/*
Convert the given degree into radians.

Example:

    Rift.toRad(180) // returns Math.PI

*/
Rift.toRad = function(degrees){
    return degrees * Math.PI / 180.0;
};