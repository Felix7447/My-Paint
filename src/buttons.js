let clear = document.getElementById("clearButton");
let rangeButton = document.getElementById("rangeButton");
let colorButton = document.getElementById("colorButton");
let downloadButton = document.getElementById("downloadButton");

//Event Listeners
clear.addEventListener("click", clearCanvas);
rangeButton.addEventListener("click", changeRange);
colorButton.addEventListener("change", changeColor);
downloadButton.addEventListener("click", download);

//Functions
function clearCanvas() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function changeRange() {
    pincelWidth = this.value;
}

function changeColor() {
    color = this.value;
    console.log(color);
}

function download() {
    console.log('download');
}
