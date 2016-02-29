// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

//Map data.
var l_N = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
var l_L = ["8th", "6th", "Union Square", "3rd", "1st"];
var l_6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
var mtaMap = {
  "l_N": l_N,
  "l_L": l_L,
  "l_6": l_6
};
//object to recover strings with Line names
var LineNames = {
  "l_N": "Line N",
  "l_L": "Line L",
  "l_6": "Line 6"
};

//Calculates path within a line. Line must not be a circle.
var inLineRoute = function(Strt, Fnsh, Line) {
  var strDir = ""; // value to return with directions
  var d; //distance to travel. negative go right. positive go left
  var s;
  var f;
  var stops = 0.0;
  // var inL_answer = new answer;

  s = Line.indexOf(Strt);
  f = Line.indexOf(Fnsh)
  d = s - f;
  stops = Math.abs(d);

  if (d === 0) {
    strDir = "Stay at current stop";


  } else if (d > 0) {
    strDir = "Board at: " + Line[s] + ". " + '\n';
    if (Math.abs(d) > 1) {
      strDir += "Travel through these stations: "
      for (var i = (s - 1); i > f; i--) {
        strDir += (Line[i] + ", ");
      }
    }
    strDir = strDir.slice(0, -2)
    strDir += '\n' + "Alight at: " + Line[f] + ".";
    strDir += ". [Number of stops: " + Math.abs(d) + "]" + '\n';

  } else if (d < 0) {
    strDir = "Board at: " + Line[s] + ". " + '\n';
    if (Math.abs(d)>1) {
    strDir += "Travel through these stations: "
      for (var i = (s + 1); i < f; i++) {
        strDir += (Line[i] + ", ");
      }
    }
    strDir = strDir.slice(0, -2);
    strDir += '\n' + "Alight at: " + Line[f];
    strDir += ". [Number of stops: " + Math.abs(d) + "]" + '\n';
  }
  return {
    "strR" : strDir ,
    "numStops" : stops
  };
};

//Calculater Route from a starting Line and station to a destonation line/station
//Only interchange is Union Station: this is hardcoded.
var acrossLineRoute = function(ac_Strt, ac_sLine, ac_Fnsh, ac_fLine) {
  var strDirMain;
  var routeData;
  stops = 0.0;
  if (ac_sLine === ac_fLine) {
    strDirMain += "Travel on: " + LineNames[ac_sLine] + ". " + '\n' ;
    routeData = inLineRoute(ac_Strt, ac_Fnsh, mtaMap[ac_sLine]);
    strDirMain += routeData.strR;
    stops += routeData.numStops;
  } else {
    strDirMain = "Travel on: " + LineNames[ac_sLine] + ". " + '\n'
    routeData = inLineRoute(ac_Strt, "Union Square", mtaMap[ac_sLine]);
    strDirMain += routeData.strR + '\n';
    stops += routeData.numStops;
    strDirMain += "Change to " + LineNames[ac_fLine] + ". " + '\n'
    routeData = inLineRoute("Union Square", ac_Fnsh, mtaMap[ac_fLine]);
    strDirMain += routeData.strR;
    stops += routeData.numStops;
  }
  strDirMain += '\n';
  strDirMain += "Total number of stops = " + stops + '\n';
  return strDirMain;
};

//Determine if parameters being passed exist, report error(s) if not.
var isValidInput = function (tst_Strt, tst_sLine, tst_Fnsh, tst_fLine) {
  var tstLine;
  var found = false;
  if (!(mtaMap.hasOwnProperty(tst_sLine))) {
    return "Invalid input: " + tst_sLine + '\n';
  }
  else {
    found = false;
    tstLine = mtaMap[tst_sLine];
    for (var i = 0; i < tstLine.length; i++) {
      if (tstLine[i] === tst_Strt) {
        found = true;
      }
    };
    if (found === false) {
    return "Invalid input: " + tst_Strt + '\n';    }
  };

  if (!(mtaMap.hasOwnProperty(tst_fLine))) {
    return "Invalid input: " + tst_fLine + '\n';
  }
  else {
    found = false;
    tstLine = mtaMap[tst_fLine];
    for (var i = 0; i < tstLine.length; i++) {
      if (tstLine[i] === tst_Fnsh) {
        found = true;
      }
    };
    if (found === false) {
    return "Invalid input: " + tst_Fnsh + '\n';    }
  };
  return false;
};

//Test cases
//within same line
if (!isValidInput("28th", "l_N", "Times Square", "l_N")) {
  console.log(acrossLineRoute("28th", "l_N", "Times Square", "l_N"));
};
//accross lines
if (!isValidInput("23rd", "l_6", "1st", "l_L")) {
  console.log(acrossLineRoute("23rd", "l_6", "1st", "l_L"));
};
// if (!isValidInput("Times Square", "l_N", "8th", "l_L")) {
//   console.log(acrossLineRoute("Times Square", "l_N", "8th", "l_L"));
// };
//invalid input tests
console.log(isValidInput("asdf", "l_6", "1st", "l_L"));
console.log(isValidInput("23rd", "bsdf", "1st", "l_L"));
console.log(isValidInput("23rd", "l_6", "csdf", "l_L"));
console.log(isValidInput("23rd", "l_6", "1st", "dsdf"));
