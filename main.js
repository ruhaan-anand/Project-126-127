function preload(){
    song1 = loadSound("music.mp3")
    song2 = loadSound("music2.mp3")
}

function setup(){
    canvas = createCanvas(450, 250)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video, 0, 0, 450, 250)
}