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
