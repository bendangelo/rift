/*! rift V0.1.0 %> */
(function( window ) {

var Rift = {};

// current interia version
Rift.VERSION = '0.1.0';

/*
Clamps a number between a minimum and maximum.

Example:

    Interia.clamp(5, 0); // return 5

    Interia.clamp(101, 0, 100); // return 100
*/
Interia.clamp = function(value, min, max) {

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