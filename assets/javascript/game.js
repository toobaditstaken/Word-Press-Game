var wins = 0;

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var letterChosenText = document.getElementById("letterschosen-text");
var winsText = document.getElementById("wins-text");

document.onkeyup = function(event) {
    var userGuess = event.key;
    var userInput = event.key.toUpperCase();
    

    userChoiceText.textContent = "You chose: " + userGuess;
    letterChosenText.textContent = "Already Guessed: " + userInput;
    winsText.textContent = "Wins: " + wins;
};