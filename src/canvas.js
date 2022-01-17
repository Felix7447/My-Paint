//Variables===========================================
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let pincelWidth = 2;

const WIDTH = canvas.width;
const HEIGHT = canvas.height;

console.log(WIDTH, HEIGHT);

//====================================================


//Event Listeners=====================================
canvas.addEventListener("mousedown", draw);
canvas.addEventListener("mouseup", stop);
//====================================================


//Functions===========================================
function draw() {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = pincelWidth;
    ctx.moveTo(event.layerX, event.layerY);
    ctx.lineTo(event.layerX + 1, event.layerY + 1);
    ctx.stroke();
    canvas.addEventListener("mousemove", move);
}

function move() {
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = pincelWidth;
    //ctx.moveTo(event.layerX, event.layerY);
    ctx.lineTo(event.layerX, event.layerY);
    ctx.stroke();
}

function stop() {
    canvas.removeEventListener("mousemove", move);
}
//====================================================