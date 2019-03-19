var wins = 0;

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");

document.onkeyup = function(event) {
    var userGuess = event.key;

    

    userChoiceText.textContent = "You chose: " + userGuess;
    winsText.textContent = "wins: " + wins;
};