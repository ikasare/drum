// alert("Hello");

// document.querySelector("button").addEventListener("click", handleClick);
//
// function handleClick() {
//     alert("I got clicked!");
// }

// var btn = document.querySelectorAll("button.drum");
// for (var i=0; i<btn.length; i++) {
//     btn[i].addEventListener("click", function () {alert("I got clicked!");});
// };


//Detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML.toLowerCase());
        buttonAnimation(buttonInnerHTML.toLowerCase());

        // switch (buttonInnerHTML) {
        //     case "w":
        //         var tom1 = new Audio("sounds/tom-1.mp3");
        //         tom1.play();
        //         break;
        //
        //     case "a":
        //         var tom2 = new Audio("sounds/tom-2.mp3");
        //         tom2.play();
        //         break;
        //
        //     case "s":
        //         var tom3 = new Audio("sounds/tom-3.mp3");
        //         tom3.play();
        //         break;
        //
        //     case "d":
        //         var tom4 = new Audio("sounds/tom-4.mp3");
        //         tom4.play();
        //         break;
        //
        //     case "j":
        //         var snare = new Audio("sounds/snare.mp3");
        //         snare.play();
        //         break;
        //
        //     case "k":
        //         var crash = new Audio("sounds/crash.mp3");
        //         crash.play();
        //         break;
        //
        //     case "l":
        //         var kickbass = new Audio("sounds/kick-bass.mp3");
        //         kickbass.play();
        //         break;
        //
        //     default: console.log(buttonInnerHTML);
        //
        // };

    });

};

// Detecting keyboard press
document.addEventListener("keydown", function(event) {
    // alert("Key was pressed!")
    // console.log(event);
    makeSound((event.key).toLowerCase());
    buttonAnimation((event.key).toLowerCase());
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;

        default: console.log(buttonInnerHTML);

};

};

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);
};

        // this.style.color = "#fff";
//         if (this.innerHTML === "w") {
//             var audio = new Audio("sounds/tom-1.mp3");
//             audio.play();
//         }
//         else if (this.innerHTML === "a") {
//             var audio = new Audio("sounds/tom-2.mp3");
//             audio.play();
//         }
//         else if (this.innerHTML === "s") {
//             var audio = new Audio("sounds/tom-3.mp3");
//             audio.play();
//         }
//         else if (this.innerHTML === "d") {
//             var audio = new Audio("sounds/tom-4.mp3");
//             audio.play();
//         }
//         else if (this.innerHTML === "j") {
//             var audio = new Audio("sounds/snare.mp3");
//             audio.play();
//         }
//         else if (this.innerHTML === "k") {
//             var audio = new Audio("sounds/crash.mp3");
//             audio.play();
//         }
//         else if (this.innerHTML === "l") {
//             var audio = new Audio("sounds/kick-bass.mp3");
//             audio.play();
//         };
//
//     });
//
// };


// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();


// var btn = document.querySelectorAll("button.drum");
// for (var i=0; i<btn.length; i++) {
//     btn[i].addEventListener("click", function () {
//         var audio = new Audio("sounds/tom-1.mp3");
//                 audio.play();});
// };
