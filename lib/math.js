/*
Checks if two rectangles overlap.

Example:

    Rift.hitTest(0, 0, 10, 10, 9, 9, 5, 5); // returns true

*/
Rift.hitTest = function(x1, y1, w1, h1, x2, y2, w2, h2) {
  return !(
  x1 > x2 + w2 || x1 + w1 < x2 || y1 > y2 + h2 || y1 + h1 < y2);
};

/*
Calculates distance between two points.

Example:

    Rift.distance(10, 10, 20, 40); // returns 31

*/
Rift.distance = function(x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;

  return Math.sqrt(dx * dx + dy * dy);
};