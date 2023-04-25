song1 = "";
song2 = "";

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(480, 360);
    canvas.position(400, 200);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 480, 360);
}