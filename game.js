let gamePattern = [];
let userClickedPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let gameStarted = false;
let keyCount = 0;
let level = 0;
//

$(document).on("keydown", function (e) {
    gameStarted = true;
    keyCount++;
    if (gameStarted && keyCount === 1) {
        $("#level-title").text("Level " + level);
        nextSequence();

    }
});


function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    //Animation & sound
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    $("#level-title").text("Level " + ++level);

}

$(".btn").on("click", function () {
    let userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
})

function playSound(name) {
    let audio = new Audio("./sounds/" + name + ".mp3")
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(() => {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}
