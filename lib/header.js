(function(window) {

    var Rift;

    if (typeof exports != "undefined") {
        Rift = exports;
    } else {
        Rift = window.Rift = {};
    }

    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {

        define(function() {
            return Rift;
        });

    }

    // current rift version
    Rift.VERSION = '<%= pkg.version %>';