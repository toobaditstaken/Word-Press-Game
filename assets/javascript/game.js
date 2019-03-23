
var wins = 0;

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var letterChosenText = document.getElementById("letterschosen-text");
var guessCountText = document.getElementById("guess-count");
var wordText = document.getElementById("word-text");
var winsText = document.getElementById("wins-text");
var wonText = document.getElementById("won-text");
var loseText = document.getElementById("lose-text");
var arrayPossible =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arraySelector =[];
var guessCount = 5;
var wordChoice = [];
var displayWord = [];
var resetGame = false;


function giveWord() {
    var wordSelection = ["Button", "Tree", "Candy", "Madonna", "Thunder", "Water", "Superman", "Photosynthesis", "England", "Barnacle"]
    var random = Math.floor((Math.random() * 10));
    return wordSelection[random].split('');
};

function wordGiven() {
    var whateverTheFu = [];
    for (var i = 0; i < wordChoice.length; i++) {
        whateverTheFu.push(" _ ");
    }
    return whateverTheFu;
};

function onLoad() {
    wordChoice = giveWord();
    displayWord = wordGiven();
    onDisplay("p");
};

function onDisplay(z) {
    wordText.textContent = "Word: " + displayWord;
    wonLoss(z);
};

function words(userInput) {
   var isFound = false;
    for (var i = 0; i < wordChoice.length; i++) {
        if(wordChoice[i].toUpperCase() === userInput) {
            displayWord[i] = userInput;
            isFound = true;
        }
    }
    return isFound;
};

function wonLoss(y) {
    var x = document.getElementById("won-text");
    var x2 = document.getElementById("lose-text");
    if(y === "w") {
        x.style.visibility = "visible";
        x2.style.visibility = "hidden";
    }
    else if (y === "l") {
        x.style.visibility = "hidden";
        x2.style.visibility = "visible";
    }
    else {
        x.style.visibility = "hidden";
        x2.style.visibility = "hidden";
    }
}



document.onkeyup = function(event) {
    if (resetGame) {
        onLoad();
        resetGame = false;
        guessCount = 5;
        guessCountText.textContent = "Guesses: " + guessCount;
        arrayPossible =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        arraySelector =[];
        return;
    }
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
        
        if (displayWord.indexOf(" _ ") < 0) {
            onDisplay("w");
            resetGame = true;
            wins++;
        }
        if (isInWord === false){
        guessCount--;
        if (guessCount === 0) {
        onDisplay("l");
        resetGame = true;
        
        }
        }
        arraySelector.push(userInput);
        arraySelector.sort;
        break;
        }
        
        
    };

    if (resetGame) {
        userChoiceText.textContent = "You chose: ";
        letterChosenText.textContent = "Already Guessed: ";
    }
    else {
        userChoiceText.textContent = "You chose: " + userGuess;
        letterChosenText.textContent = "Already Guessed: " + arraySelector;
    }
    

    wordText.textContent = "Word: " + displayWord;
    
    guessCountText.textContent = "Guesses: " + guessCount;

    winsText.textContent = "Wins: " + wins;

}