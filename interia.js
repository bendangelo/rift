/*! interia V0.1.0 %> */
(function( window ) {

var Interia = {};

Interia.VERSION = '0.1.0';

Interia.clamp = function(value, min, max){
    if(value == null) return null;

    if(value < min){
        return min;
    }

    if(max != null && value > max){
        return max;
    }

    return value;
};

if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    window.Interia = Interia;

    define(function() {
      return Interia;
    });

} else if(typeof module != "undefined") {

    module.exports = Interia;

} else {

    window.Interia = Interia;

}

}(this));