import './styles/index.css';
import './styles/buttons.css';
import './styles/canvas.css';
import './styles/colorButtons.css';

//Variables===========================================
var color = "black";
var pincelWidth = 2;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

const WIDTH = canvas.width;
const HEIGHT = canvas.height;

let black = document.getElementById("black");
let red = document.getElementById("red");
let green = document.getElementById("green");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");
let white = document.getElementById("white");

let clear = document.getElementById("clearButton");
let rangeButton = document.getElementById("rangeButton");
let colorButton = document.getElementById("colorButton");
let downloadButton = document.getElementById("downloadButton");

//====================================================


//Event Listeners=====================================
canvas.addEventListener("mousedown", draw);
canvas.addEventListener("mouseup", stop);


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

clear.addEventListener("click", clearCanvas);
rangeButton.addEventListener("click", changeRange);
colorButton.addEventListener("change", changeColor);
downloadButton.addEventListener("click", download);
//====================================================

//backgorund white
ctx.fillStyle = "white";
ctx.fillRect(0, 0, WIDTH, HEIGHT);

//Functions===========================================
function draw() {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = pincelWidth;
    ctx.moveTo(event.offsetX, event.offsetY);
    ctx.lineTo(event.offsetX + 1, event.offsetY + 1);
    ctx.stroke();
    canvas.addEventListener("mousemove", move);
}

function move() {
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = color;
    ctx.lineWidth = pincelWidth;
    ctx.lineTo(event.offsetX + 1, event.offsetY + 1);
    ctx.stroke();

    //To stop drawing out of canvas
    if (event.offsetX >= WIDTH || event.offsetX < 0){
        stop();
    }

    if (event.offsetY >= HEIGHT || event.offsetY < 0){
        stop();
    }
}

function stop() {
    canvas.removeEventListener("mousemove", move);
}

function clearCanvas() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

function changeRange() {
    pincelWidth = this.value;
}

function changeColor() {
    color = this.value;
}

function download() {
    let filename = prompt('Type the name of your draw', '');
    let link = document.createElement('a');
    
    link.download = filename;
    link.href = canvas.toDataURL("image/png");

    link.click();
}
//====================================================
