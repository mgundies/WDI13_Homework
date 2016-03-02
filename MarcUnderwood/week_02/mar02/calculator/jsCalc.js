

var sqInput = document.getElementById('square-input');
var onSqChange = function() {
    var x1 = document.getElementById('square-input').value;
    var x2 = x1 * x1;
    document.getElementById('solution').innerHTML = x2;
};
sqInput.addEventListener('click', onSqChange, false);


var keylogger = function (event) {
  //console.log(event.which);
  if (event.which === 13) {
    console.log('you hit enter');
  }
};

input.addEventListener('keypress', keylogger);





var halfButton = document.getElementById('half-button');
var halfButtonClick = function() {
    var x1 = document.getElementById('half-input').value;
    var x2 = 0.5* x1;
    document.getElementById('solution').innerHTML = x2;
};
halfButton.addEventListener('click', halfButtonClick, false);

//calculate a fraction as a percentage when given numerator and denominator
var fracB = document.getElementById('fracB');
var fracBClick = function() {
    var numX = document.getElementById('num').value;
    var denomX = document.getElementById('dom').value;
    var pCent = (100*(numX/denomX)) + " percent";
    document.getElementById('solution').innerHTML = pCent;
};
fracB.addEventListener('click', fracBClick, false);

//calculate a fraction as a percentage when given numerator and denominator
var radB = document.getElementById('area-button');
var radBClick = function() {
    var radius = document.getElementById('radius').value;
    var area = Math.PI*radius*radius;
    strArea = "Area is: " + area;
    document.getElementById('solution').innerHTML = strArea;
};
radB.addEventListener('click', radBClick, false);
