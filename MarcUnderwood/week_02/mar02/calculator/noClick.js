

var sqinput = document.getElementById('square-input');
var onSqChange = function(event) {
    if (event.which === 13) {
      var x1 = document.getElementById('square-input').value;
      var x2 = x1 * x1;
      document.getElementById('solution').innerHTML = x2;
    }
};
sqinput.addEventListener('keypress', onSqChange, false);


var halfChange = document.getElementById('half-input');
var onHalfChange = function(event) {
  if (event.which === 13) {
    var x1 = document.getElementById('half-input').value;
    var x2 = 0.5* x1;
    document.getElementById('solution').innerHTML = x2;
  }
};
halfChange.addEventListener('keypress', onHalfChange, false);

//calculate a fraction as a percentage when given numerator and denominator
var fracChangeN = document.getElementById('num');
var fracChangeD = document.getElementById('dom');
var onFracChangeN = function(event) {
    if (event.which === 13) {
      if (!(isNaN(document.getElementById('num').value)) &&
          !(isNaN(document.getElementById('dom').value))) {
            var numX = document.getElementById('num').value;
            var denomX = document.getElementById('dom').value;
            var pCent = (100*(numX/denomX)) + " percent";
            document.getElementById('solution').innerHTML = pCent;
          }
    }
};
var onFracChangeD = function(event) {
    if (event.which === 13) {
      if (!(isNaN(document.getElementById('num').value)) &&
          !(isNaN(document.getElementById('dom').value))) {
            var numX = document.getElementById('num').value;
            var denomX = document.getElementById('dom').value;
            var pCent = (100*(numX/denomX)) + " percent";
            document.getElementById('solution').innerHTML = pCent;
          }
    }
};
fracChangeN.addEventListener('keypress', onFracChangeN, false);
fracChangeD.addEventListener('keypress', onFracChangeD, false);

//calculate a fraction as a percentage when given numerator and denominator
var radChange = document.getElementById('radius');
var onRadChange = function(event) {
    var radius = document.getElementById('radius').value;
    var area = Math.PI*radius*radius;
    strArea = "Area is: " + area;
    document.getElementById('solution').innerHTML = strArea;
};
radChange.addEventListener('keypress', onRadChange, false);
