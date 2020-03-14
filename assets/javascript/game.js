var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userLetter = [];
var eachofLetters = null;
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];



     function countGuessesLeft() {
        document.querySelector("#guessesLeft").innerHTML = "Guesses Remaining: " + guessesLeft;
    }
    

    



function guessesSoFar() {
	document.querySelector("#currentGuess").innerHTML = "Your current guesses: " + userLetter.join(' ');
}


var restart = function () {
    guessesLeft = 9;
    userLetter = [];
    var computerGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

document.onkeyup = function (event) {
        
        guessesLeft--;

        var userGuesses = String.fromCharCode(event.keyCode).toLowerCase();
        userLetter.push(userGuesses);
        guessesSoFar();
        countGuessesLeft();


        
    if (userGuesses === computerGuess) {
            wins++;
            document.querySelector("#wins").innerHTML = "Wins:" + wins;
            restart();
        }
    else if (guessesLeft === 0) {
            losses++;
            document.querySelector("#losses").innerHTML = "Losses:" + losses;
            restart();
        }
       
    };


