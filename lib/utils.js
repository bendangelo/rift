/*
Clamps a number between a minimum and maximum.

Example:

    Rift.clamp(5, 0); // return 5

    Rift.clamp(101, 0, 100); // return 100
*/
Rift.clamp = function(value, min, max) {

    if (value === undefined) return;

    if (value < min) {
        return min;
    }

    if (max !== undefined && value > max) {
        return max;
    }

    return value;
};
