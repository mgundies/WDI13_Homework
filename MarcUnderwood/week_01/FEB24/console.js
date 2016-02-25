var getGuess = function() {
  thisGuess= prompt("Please enter your guess; only first letter will be used.", "");
  return thisGuess.substring(0,1).toUpperCase();
}

var Compare_Arrays = function(ar1,ar2) {
  if (ar1.length !== ar2.length) {
    return false;}
  var checkSum=0;
  for (var i = 0; i < ar1.length; i++) {
    if (ar1[i] === ar2[i]) {
      checkSum++;}
  };
  if (checkSum !== ar2.length) {
    return false;}
  else {
    return true;}
};

var main_F = function(wordToGuess,numOfGuesses) {
  var aGuess = null;
  var bFinished = false;
  aCompletedWord = new Array(wordToGuess.length);

  for (var i = 0; i < numOfGuesses; i++) {
    guessLetter = getGuess();
    for (var j = 0; j < wordToGuess.length; j++) {
      if (wordToGuess[j] === guessLetter) {
        aCompletedWord[j] = guessLetter;
      }
    }
    bFinished = Compare_Arrays(wordToGuess,aCompletedWord);
    if ( bFinished === true ) {
      window.alert("Congrats. You guessed in " + (i+1)
      + " guesses.  The word was: " + wordToGuess);
      return;
    }
  }
  window.alert("Out of guesses. Any last requests?");
};

main_F("FOXY",5);
