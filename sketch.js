let img;
//var slider;

preload = () => {
 img = loadImage('april_18.png');
}
setup = () => {
var canvas = createCanvas(windowWidth, windowHeight);
// canvas.parent('sketch-container');
pixelDensity(1);
}



draw = () => {
background(220);
// Display camera image
image(img, 0, 0);
img.resize(windowWidth, 0);
// Load camera image pixels
img.loadPixels();
// Loop through every 50th x and 50th y location
for (let x = 0; x < img.width; x += 5) {
    for (let y = 0; y < img.height; y += 5) {
        // Get the pixel array for each pixel
        // [r,g,b,a]
        let colorFromImage = img.get(x, y);
        // Get the brightness from the rgba array
        fill(colorFromImage);

        rect(x, y, img.width/2, img.height);
    }
}

}
