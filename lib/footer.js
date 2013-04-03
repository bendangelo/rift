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