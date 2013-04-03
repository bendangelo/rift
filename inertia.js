/*! inertia V0.1.0 %> */
(function( window ) {

var Interia = {};

// current interia version
Interia.VERSION = '0.1.0';

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

    // comment this out if you don't want Interia in global namespace
    window.Interia = Interia;

    define(function() {
      return Interia;
    });

} else if(typeof module == "object" && module.exports) {

    // Export interia for nodejs
    module.exports = Interia;

} else {

    window.Interia = Interia;

}

}(this));