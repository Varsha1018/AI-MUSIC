function setup() {
video=createCapture(VIDEO);
video.size(550, 550);
video.hide();
canvas=createCanvas(550, 430);
canvas.position(500, 250);
}

function draw(){
    image(video, 0, 0, 600, 500);
}