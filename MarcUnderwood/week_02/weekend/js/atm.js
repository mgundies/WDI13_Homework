var savVal = 0;
var chqVal = 0;
var sReset = "enter an amount";

var testVal = function (inValue) {
  if (!($.isNumeric(inValue))) {
    console.log("Must be a positive amount");
    return false;
  }
  if (inValue <= 0) {
    console.log("Must be a positive amount");
    return false;
  }
  return true;
}

var updateBG = function (x,y) {
  if (x <=0) {
    y.css("background-color","red");
  }
  else {
    y.css("background-color","#E3E3E3");
  }
}

$("#checking-deposit").click(function() {
  if (testVal($("#checking-amount").val())) {
    chqVal += parseFloat($("#checking-amount").val());
    console.log(chqVal);
    $('#checking-balance').html('$'+chqVal.toString());
  }
  updateBG(chqVal, $("#checking-balance"));
  $('#checking-amount').val("");
});

$("#checking-withdraw").click(function() {
  if (testVal($("#checking-amount").val())) {
    if (parseFloat($("#checking-amount").val()) > chqVal) {
      if (!(
          Math.abs(chqVal - parseFloat($("#checking-amount").val()))
          <= (savVal )
      )) {
          console.log("not enuf");
        }
      else {
        savVal += chqVal - parseFloat($("#checking-amount").val());
        chqVal = 0;
        $('#savings-balance').html('$'+savVal.toString());
        $('#checking-balance').html('$'+chqVal.toString());
      }
    }
    else {
      chqVal -= parseFloat($("#checking-amount").val());
      console.log(chqVal);
      $('#checking-balance').html('$'+chqVal.toString());
    }
  }
  updateBG(chqVal, $("#checking-balance"));
  $('#checking-amount').val("");
});


$("#savings-deposit").click(function() {
  if (testVal($("#savings-amount").val())) {
    savVal += parseFloat($("#savings-amount").val());
    console.log(savVal);
    $('#savings-balance').html('$'+savVal.toString());
  }
  updateBG(savVal, $("#savings-balance"));
  $("#savings-amount").val("");
});

$("#savings-withdraw").click(function() {
  if (testVal($("#savings-amount").val())) {
    if (parseFloat($("#savings-amount").val()) > savVal) {
      alert("not enuf");
    }
    else {
      savVal -= parseFloat($("#savings-amount").val());
      console.log(savVal);
      $('#savings-balance').html('$'+savVal.toString());
    }
  }
  updateBG(savVal, $("#savings-balance"));
  $("#savings-amount").val("");
});
