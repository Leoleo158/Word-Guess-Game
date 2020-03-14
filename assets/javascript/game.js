var lettersGuessed = [];
var guessesRemain = 9;
var Wins = 0;
var losses = 0;
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function (event) {


    
    var userInput = event.key;
    var ComputerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    var userOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    if (userOptions.indexOf(userInput) > -1 ) {
        if (userInput === computerOptions) {
            Wins++;
            document.querySelector("#numWins").innerHTML = "wins" + numWins;
            guessesRemain = 9;
            lettersGuessed = [];
        }
        else if (guessesRemain === 0) {
            losses++;
            document.querySelector("#Losses").innerHTML = "Wins" + numWins;
            lettersGuessed = [];
        }
       
    }
};

