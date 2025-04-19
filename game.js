let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
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
    userClickedPattern = [];
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    //Animation & sound
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    $("#level-title").text("Level " + ++level);

}

//User Click
$(".btn").on("click", function () {
    let userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
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

function startOver() {
    level = 0;
    keyCount = 0;
    gameStarted = false;
    gamePattern = [];

}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success")

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    } else {
        let wrongSound = new Audio("./sounds/wrong.mp3");
        wrongSound.play();

        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 300);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        console.log("wrong")
        startOver();
        
    }
}