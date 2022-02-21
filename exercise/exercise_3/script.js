// I want when I click BTN the circle background colour changes to be blue
// i want when I refresh the circle keeps blue

// 1. select the circle by class .circle
// 2.select the BTN id circle-button

const circle = document.querySelector(".circle");
const circleActionBtn = document.querySelector("#circle-button");

// 3. I when I click on the BTN I show message

// get the bg Color and change my circle
const bgColor = localStorage.getItem("bgColor")
console.log("bgColor", bgColor);
circle.style.backgroundColor = bgColor;

circleActionBtn.addEventListener("click", function (){
    localStorage.setItem("bgColor","#00d4ff");
    console.log("hey you clicked the BTN");
    // I want to change the background color of th circle
    circle.style.backgroundColor = "#00d4ff";
});

// localStorage
