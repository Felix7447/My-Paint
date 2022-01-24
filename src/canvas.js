//Variables===========================================
var color = "black";
var pincelWidth = 2;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');


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
    ctx.strokeStyle = color;
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
    ctx.strokeStyle = color;
    ctx.lineWidth = pincelWidth;
    //ctx.moveTo(event.layerX, event.layerY);
    ctx.lineTo(event.layerX, event.layerY);
    ctx.stroke();

    //To stop drawing out of canvas
    if (event.layerX >= WIDTH || event.layerX < 0){
        stop();
    }

    if (event.layerY >= HEIGHT || event.layerY < 0){
        stop();
    }
}

function stop() {
    canvas.removeEventListener("mousemove", move);
}
//====================================================