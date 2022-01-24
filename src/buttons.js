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
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

function changeRange() {
    pincelWidth = this.value;
}

function changeColor() {
    color = this.value;
    console.log(color);
}

function download() {
    let filename = prompt('Type the name of your draw', '');
    let link = document.createElement('a');
    
    link.download = filename;
    link.href = canvas.toDataURL("image/png");

    link.click();
}
