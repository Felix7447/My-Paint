import './styles/index.scss';
import './styles/range.scss';
import './styles/colors.scss';
import './styles/options.scss';

//Variables===========================================
var color = "black";
var pincelWidth = 2;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

let WIDTH = canvas.width;
let HEIGHT = canvas.height;

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

resiszeCanvas();

//====================================================


//Event Listeners=====================================
canvas.addEventListener("mousedown", draw);
canvas.addEventListener("mouseup", stop);

window.addEventListener("resize", function() {
    resiszeCanvas();
})

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

//Functions===========================================
function resiszeCanvas() {
    let userWidth = document.documentElement.scrollWidth;

    if (userWidth >= 800) {
        canvas.width = 500;
    } else if (userWidth > 400 && userWidth < 800) {
        canvas.width = 0.65 * userWidth;
    } else if (userWidth <= 400) {
        canvas.width = 0.8 * userWidth;
    }

    WIDTH = canvas.width;
    HEIGHT = canvas.height;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

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
