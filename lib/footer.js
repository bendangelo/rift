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