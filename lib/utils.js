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