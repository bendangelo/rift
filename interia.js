/*! interia 2013-03-31 */
(function( window )) {
    var exports = (typeof exports === "undefined") ? window : exports;
Interia = {};

Interia.VERSION = '0.1.0';

exports.Interia = Interia;

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

}(this));