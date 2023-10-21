var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

//check with of the button is clicked by the user
$(".btn").click(function(){
var userChosenColour = $(this).attr("id");
userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
})




function nextSequence(){
var randomNumber = Math.floor(Math.random() * 4);
var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
//choose the button using the button id
$("#"+randomChosenColour).fadeOut(100).fadeIn(100);
//now if the random chosen colur is something
//then we should play that sound
playSound(randomChosenColour)

}

//create a play sound function
function playSound(name){
var audio = new Audio("sounds/" + name + ".mp3");
audio.play();
}






