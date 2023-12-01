/*
document.querySelector("button").addEventListener("click", handleClick); // '()' is not there, because we don't it to tigger it by it own

function handleClick(){
    window.alert("You click A");
}
*/


var n = document.querySelectorAll(".drum").length;
for(var i=0; i<n; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var btnPressed = this.innerHTML;
        playSound(btnPressed);
        btnAnimation(btnPressed);
    });
    document.addEventListener("keypress", function(event){
        playSound(event.key);
        btnAnimation(event.key);
    });  
}

function playSound(x){
    //var btnPressed = this.innerHTML;
    switch (x) {
        case "a":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        
        case "s":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "f":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    
        default:
    }
}

function btnAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){activeButton.classList.remove("pressed");}, 150);
}