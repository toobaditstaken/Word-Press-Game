var wins = 0;
//var computerChoices = ["button", "apple", "abbott"]

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var letterChosenText = document.getElementById("letterschosen-text");
var guessCountText = document.getElementById("guess-count");
var wordText = document.getElementById("word-text");
var winsText = document.getElementById("wins-text");
var arrayPossible =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arraySelector =[];
var guessCount = 10;
var wordChoice = ["T","E","X","A","S"];
var displayWord = ["_","_","_","_","_"];
//var wordText = document.getElementById("word-text")

function words(userInput) {
   var isFound = false;
    for (var i = 0; i < wordChoice; i++) {
        if(wordChoice[i].toUpperCase() === userInput) {
            displayWord[i] = userInput;
            isFound = true;
        }
    }
    return isFound;
}



document.onkeyup = function(event) {
    var userGuess = event.key;
    var userInput = event.key.toUpperCase() ;
    var isInWord = false;
    var isFound = false;
    
        for ( var i = 0; i < arrayPossible.length; i++) {
        if 
        (
        arrayPossible[i].toUpperCase() === userInput
        )
        {
        arrayPossible.splice(i,1)
        isFound = true;
        }
        if 
        (isFound){
        isInWord = words(userInput);
        if (isInWord === false){
        guessCount--;}
        arraySelector.push(userInput);
        arraySelector.sort;
        break;
        }
        
        
    }

    userChoiceText.textContent = "You chose: " + userGuess;

    wordText.textContent = "Word: " + displayWord;
    
    letterChosenText.textContent = "Already Guessed: " + arraySelector; 
    
    guessCountText.textContent = "Guesses: " + guessCount;

    winsText.textContent = "Wins: " + wins;

}