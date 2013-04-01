if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    window.Interia = Interia;

    define(function() {
      return Interia;
    });
} else {

    window.Interia = Interia;

}

}(this));