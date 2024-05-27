var buttonColours=["green","red","yellow","blue"];
var gamePattern=[];
var userClickedPattern=[];

var started = false;
var level=0;
$(document).on("keydown",function(event){
    if(!started){ 
       $("#level-title").html("Level " + level);
       nextSequence();
       started=true;
    }
});



$(".btn").on("click",function(){
    var userChosenColour=$(this).attr("id");
    //console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour)
    Anim(userChosenColour);
   
   checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
         console.log("success");

    if(userClickedPattern.length==gamePattern.length){
        setTimeout(function () {
            userClickedPattern=[];
            nextSequence();
          }, 1000);
    }
}
else{
    $("h1").text("Game Over, Press Any Key to Restart")
    playsound("wrong");
    anim2("body");
    gamePattern=[];
    userClickedPattern=[];
    started=false;
    level=0;
}
    
}


function nextSequence(){

   level++;
   $("#level-title").html("Level " + level);

    var x= Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[x];
    gamePattern.push(randomChosenColour);
    playsound(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
}


function playsound(col){
    var audio = new Audio("./sounds/" + col +".mp3");
     audio.play();
}
function Anim(col){
    $("#"+col).addClass("pressed");
    setTimeout(function() { 
        $("#"+col).removeClass("pressed");
    }, 100);
    
}

function anim2(body){
    $(body).css("background-color","red");
    setTimeout(function() { 
        $(body).css("background-color","#011F3F")}
        , 100);
}


