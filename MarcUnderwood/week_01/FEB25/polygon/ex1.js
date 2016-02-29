//Part 1, Rectangle
var rectangle = {
  length: 4,
  width: 4
};
var rectangle2 = {
  length: 40,
  width: 4
};

var isSqaure = function(r) {
  if (r.length === r.width) {
    return true;
  } else {
    return false;
  }
};

var area = function(r) {
  return r.length * r.width;
};

var perimeter = function(r) {
  return ((r.length * 2) + (r.width * 2));
};

console.log(isSqaure(rectangle));
console.log(isSqaure(rectangle2));
console.log(area(rectangle2));
console.log(perimeter(rectangle2));
