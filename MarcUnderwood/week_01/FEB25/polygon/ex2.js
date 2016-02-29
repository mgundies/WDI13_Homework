//Part 2, Triangle
var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
var triangleB = {
  sideA: 3,
  sideB: 4,
  sideC: 5
};
var triangleE = {
  sideA: 2,
  sideB: 2,
  sideC: 2
};

var triangleO = {
  sideA: 5,
  sideB: 14,
  sideC: 10
};

var isEquilateral= function(tri) {
  if (tri.sideA === tri.sideB && tri.sideB === tri.sideC) {
    return true;
  } else {
    return false;
  }
};

var isIso= function(tri) {
  if (tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC) {
    return true;
  } else {
    return false;
  }
};

var area = function(t) {
  p = 0.5 * (t.sideA + t.sideB + t.sideC);
  return Math.sqrt(p * (p - t.sideA) * (p - t.sideB) * (p - t.sideC));

};

function sortNumber(a,b)
{
  return a - b;
}

var isObtuse = function(t) {
  var sides = [,,]
  var orderedSides = [0,0,0]
  sq1 = t.sideA * t.sideA;
  sq2 = t.sideB * t.sideB;
  sq3 = t.sideC * t.sideC;
  sides[0] = sq1;
  sides[1] = sq2;
  sides[2] = sq3;
  console.log(sides);
  sides.sort(sortNumber);
  console.log(sides);
  if ((sides[0] + sides[1]) < sides[2]) {
    return "obtuse";}
    else {
    return "not obtuse";
    }
};


//console.log(isEquilateral(triangleE));
//console.log(isEquilateral(triangleB));
// console.log(isIso(triangle));
// console.log(isIso(triangleB));
// console.log(isIso(triangleE));
//console.log(area(triangleB));
console.log(isObtuse(triangleO));
