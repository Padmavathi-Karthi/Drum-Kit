// alert("welcome!");

// Using For loop, to add response for all the buttons, when it is clicked


//  Detecting Button Press

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// (or)

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

        // switch (buttonInnerHTML) {
        //     case "w":
        //         var tom3 = new Audio('sounds/tom-3.mp3');
        //         tom3.play();
        //         break;
        //     case "a":
        //         var tom1 = new Audio('sounds/tom-1.mp3');
        //         tom1.play();
        //         break;
        //     case "s":
        //         var snare = new Audio('sounds/snare.mp3');
        //         snare.play();
        //         break;
        //     case "d":
        //         var crash = new Audio('sounds/crash.mp3');
        //         crash.play();
        //         break;
        //     case "j":
        //         var kick = new Audio('sounds/kick-drum.mp3');
        //         kick.play();
        //         break;
        //     case "k":
        //         var tom2 = new Audio('sounds/tom-2.mp3');
        //         tom2.play();
        //         break;
        //     case "l":
        //         var tom4 = new Audio('sounds/tom-4.mp3');
        //         tom4.play();
        //         break;
        //     default:
        //         console.log(buttonInnerHTML);
        // }

    });
}

// this.style.color = "white";  ===> whenever the button is clicked, it change the text colour to white

//  Detecting Keyboard press

document.addEventListener("keydown", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key){

    switch (key) {
        case "w":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "a":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "j":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "k":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-drum.mp3');
            kick.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }

}

function buttonAnimation (currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed")
    }, 100);

}