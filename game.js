let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);

//Animation & sound
$("#" + randomChosenColour).fadeOut(100).fadeIn(100);
let audio = new Audio("./sounds/" + randomChosenColour + ".mp3")
audio.play();

//
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4 );
    return randomNumber;
}