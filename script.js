const  displayKey = document.querySelector(".key h2");
const  displayKeyCode = document.querySelector(".keyCode h2");
const  displaykeyEvent = document.querySelector(".keyEvent h2");
const  keyCodeDiv = document.querySelector (".keyCode");
const  overlay = document.querySelector(".overlay");

document.addEventListener ('keydown', (e) =>{
    overlay.classList.add('hide');
    displayKey.innerHTML = event.key;
    displayKeyCode.innerHTML = event.keyCode;
    displaykeyEvent.innerHTML = event.code;
})

