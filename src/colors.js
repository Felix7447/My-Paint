let black = document.getElementById("black");
let red = document.getElementById("red");
let green = document.getElementById("green");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");
let white = document.getElementById("white");

console.log(color);

//Event Listeners
black.addEventListener("click", function() {
    color = "black";
});

red.addEventListener("click", function() {
    color = "red";
});

blue.addEventListener("click", function() {
    color = "blue";
});

green.addEventListener("click", function() {
    color = "green";
});

yellow.addEventListener("click", function() {
    color = "yellow";
});

white.addEventListener("click", function() {
    color = "white";
});