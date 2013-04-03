/*
Randomly find an array element, object value or number.

Example:

    Rift.random(); // returns 0-1

    Rift.random(10); // returns 0-9

    Rift.random(5, 15); // returns 5-14

    Rift.random({ key: "value" }); // returns "key"

    Rift.random([10, 1, 5]); // returns random element

*/
Rift.random = function(max, min) {

    var rand = Math.random();
    if (max instanceof Array) {

        // find array element
        return max[rand * max.length | 0];

    } else if (typeof max == "object") {

        // return random object key
        var result;
        for (var prop in max) {
            if (Math.random() < 1 / ++rand || !result) {
                result = prop;
            }
        }

        return result;
    }

    // return random number based on arguments
    switch (arguments.length) {
        case 0:
            return rand;
        case 1:
            return rand * max;
        case 2:
            return rand * (max - min + 1) + min;
    }

};

/*
Same as "Rift.random()" except always returns an integer value.
*/
Rift.randomInt = function() {
    return Rift.random.apply(Rift, arguments)| 0;
};