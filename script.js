var song
var fft

function preload() {
    song = loadSound('relax.mp3')
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES)
    fft = new p5.FFT()
}

function draw() {
    background(0)
    stroke(255)
    noFill()

    translate(width / 2, height / 2)

    var wave = fft.waveform()
    
    beginShape()
    for (var i = 0; i < width; i ++) {
        var index = floor(map(i, 0, width, 0, wave.length -1))

        var r = map(wave[index], -1, 1, 150, 350)

        var x = r * -sin(i)
        var y = r * cos(i)
        vertex(x,y)
    }
    endShape()
}



function mouseClicked() {
    if (song.isPlaying()) {
        song.pause()
        noLoop()
    } else {
        song.play()
        loop()
    }
}