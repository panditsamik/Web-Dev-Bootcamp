var array = [];
for (let index = 0; index < 7; index++) {
    array.push(document.querySelectorAll('button')[index].innerHTML);
}


// Make Sound through Click
for (let index = 0; index < array.length; index++) {
    document.querySelectorAll('button')[index].addEventListener("click", function () {
        makeSoundThroughClick(document.querySelectorAll('button')[index].innerHTML);
        activateButton(document.querySelectorAll('button')[index].innerHTML);
    });
    
}

function makeSoundThroughClick(key) {
    switch (key) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log('Wrong Choice!');
            break;
    }
}



// Make Sound through Keyboard.
for (let index = 0; index < array.length; index++) {
    document.querySelectorAll('button')[index].addEventListener("keypress", function (event) {
        makeSoundThroughKeyboard(event.key);
        activateButton(event.key.toString());
    });
}

function makeSoundThroughKeyboard(key) {
    switch (key) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log('Wrong Choice!');
            break;
    }
}

function activateButton(k){
    var temp = "button." + k;
    document.querySelector(temp).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(temp).classList.remove("pressed");
    }, 100);
}
