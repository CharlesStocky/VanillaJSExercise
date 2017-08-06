var actualWords = function() {
    var possibleWords = ["monitor", "program", "application", "javascript", "windows", "linux", "react", "microsoft", "apple"];
    var actuallyWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    guessCheck.actualWord = actuallyWord;
    blankSpace(actuallyWord);
    view.displayWordView();
};
var blankSpace = function(word) {
    var blankSpace = "_".repeat(word.length);        // used to generate blankspaces(underscores) that represent unguessed letters
    guessCheck.userWord = blankSpace; 
};

var guessCheck = {

  actualWord : "",
  userWord : "",
  turns: 8, 
  checkGuess: function(letterGuessInput) {
   
    var userGuess = letterGuessInput;
    //incorrect guess check
    if (!isNaN(parseInt(userGuess))) { // in Javascript, emtpy strings are === 0, hence parseInt  //if userGuess is a number
      view.guessCheckDisplay("That's a number!");
      return;
    } else if (userGuess.length < 1) {              //if nothing is entered  
      view.guessCheckDisplay("You didn't enter a guess!");
      return; 
    } else if (userGuess.length > 1) {         // if user enters more than one guess 
      view.guessCheckDisplay("You've entered more than one character!");      
      return;
    
    //correct type guess check  
    } else if(this.userWord.includes(userGuess)){              //if user enters an already guessed correct letter
      view.guessCheckDisplay("You've already guessed that letter!");
      return;
    } else if (this.actualWord.includes(userGuess)){           //if user guess is in actualWord

        for (var i = 0; i < this.actualWord.length; i++){
          var iteratedLetter = this.actualWord[i];
          if (iteratedLetter === userGuess){                    //checks each index of actualWord for userGuess
            this.userWord = this.userWord.substring(0, i) + iteratedLetter + this.userWord.substring(i + 1); //replace underscore with correct letter
            view.guessCheckDisplay("That letter is in the word!");
            view.displayWordView(); 
          } 
          
          if (this.userWord === this.actualWord) {          // the only time the winning condition is triggered is after the user guesses the last correct letter in actualWord  
            view.guessCheckDisplay("The word is " + this.userWord + " congrats! 50 thousand dollars will be sent to your address.");
          } 
        } 
      
    } else {                                                // if user's guess isn't in actualWord
      view.guessCheckDisplay("That letter isn't in the word.");
      this.turns--;
      view.guessCheckDisplay("You have " + this.turns + " turns left.");
      var hangmanPic = document.getElementById("hangmanPic");
      //display hangman picture as user guess incorrectly 
      debugger;
      if(this.turns === 7){
        document.getElementById("stand").style = "none";
      } else if (this.turns === 6) {
        document.getElementById("crossBar").style = "none";
      } else if (this.turns === 5) {
        document.getElementById("rope").style = "none";
      } else if (this.turns === 4) {
        document.getElementById("head").style = "none"
      } else if (this.turns === 3) {
        document.getElementById("torso").style = "none"
      } else if (this.turns === 2) {
        document.getElementById("leftArm").style = "none";
      } else if (this.turns === 1) {
        document.getElementById("rightArm").style = "none";
      } else if (this.turns === 0) {
        document.getElementById("leftLeg").style = "none";
        document.getElementById("rightLeg").style = "none";
      }
      
      if (this.turns === 0) {                                  // the only time turns should be checked is the last time a user enters an incorrect letter, hence why it's inside of this else
        view.guessCheckDisplay("You've used all of your guesses. Goodbye");   
        return;
      } else if (this.turns < 0){
        view.guessCheckDisplay("You've used all your guesses gaawl")
      }
      document.getElementById("letterGuessInput").value = "";  
    }  
  } 
};

      /*HANGMAN RULES: 8 incorrect guesses(8 pieces of the hangman picture)
      show incorrect guessed letters, show turn count*/

var handlers = {
  call: function() {
    var letterGuessInput = document.getElementById("letterGuessInput");
    guessCheck.checkGuess(letterGuessInput.value);
    letterGuessInput.value = "";
  }
}; 

var view = {
  displayWordView: function(){ //used to display word as user guesses
    var word = guessCheck.userWord; 
    document.querySelector('#userWordDis').innerHTML = word; 
  },
  guessCheckDisplay: function(wuts){ // tells the user if the guess is in the word, warns user if guess isnt a single letter
    var wordStatus = wuts; 
    document.querySelector('#userGuessCheckDisplay').innerHTML = wordStatus;
  },
  displayPic: function() {
  
  }
};


document.getElementById("stand").style.visibility = "hidden";
document.getElementById("crossBar").style.visibility = "hidden";
document.getElementById("rope").style.visibility = "hidden";
document.getElementById("head").style.visibility = "hidden";
document.getElementById("torso").style.visibility = "hidden";
document.getElementById("leftArm").style.visibility = "hidden";
document.getElementById("rightArm").style.visibility = "hidden";
document.getElementById("leftLeg").style.visibility = "hidden";
document.getElementById("rightLeg").style.visibility = "hidden"




















   
