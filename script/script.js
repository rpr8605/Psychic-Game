// variables
var won = 0;
var lost = 0;
var attempts = 10;
var usedArray = [];
var randoLetter = randoLetter;
var letters = "abcdefghijklmnopqrstuvwxyz"

// getting secret letter
randoLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(randoLetter);

function jsGuess() {
      randoLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(randoLetter);

}

//onkey to select the correct letter
document.onkeyup = function (event) {
      var Guess = event.key;

      //right guesses
      if (Guess === randoLetter) {
            won++;
            attempts = 10;
            usedArray = [];

      }

      //Wrong guesses
      jsGuess();
      if (Guess !== randoLetter) {
            attempts--;

      }

      //adding to Losses when you lose
      if (attempts == 0) {
            lost++;
            usedArray = []
            attempts = 10;
      }

     
      if (usedArray.indexOf(Guess) >= 0) {

      } else {
        
            usedArray.push(Guess);
            document.getElementById('Guess').innerHTML = usedArray;
            console.log(usedArray);

      }
      //Updating the scores
      document.getElementById('won').innerHTML = won;
      document.getElementById('lost').innerHTML = lost;
      document.getElementById('attempts').innerHTML = attempts;

}