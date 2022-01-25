/*
  -very long story short: the plan is to have a starting color, and for each new line drawn,
   use the previous line's RGBA value to determine the RGBA component of the new line, using soe color incrementation 
   factor.
   -For example, if line 5's color is RGBA(25, 152, 37, 0.7), and we have a color_incrementation_factor of 50,
    our next line's color will be RGBA(75, 202, 87, [some new alpha]).
  -reasoning: ...i don't know, i think it'll look cool???
  -future goals:
    -line color gradients
      -would have to learn how pixel array stuff works better so i can have line color gradients and math-y functions
     and stuff
      - i would definitely have to draw pixel-by-pixel for color gradient stuff

*/
let lines = [];
let timings = [];
let previousColor = null;
let newColor = null;

// code stolen from here: https://p5js.org/reference/#/p5/pixels
// and here: https://p5js.org/reference/#/p5/get
function GetPixelRGBAAtCoordinate(x, y) {
  let d = pixelDensity();
  // for (let i = 0; i < d; i++) {
  //   for (let j = 0; j < d; j++) {
  //     // loop over
  //     index = 4 * ((y * d + j) * windowWidth * d + (x * d + i));
  //   }
  // } 
  let offset = (y * windowWidth + x) * d * 4;
  let RGBAComponents = [
    pixelDensity[offset],
    pixelDensity[offset + 1],
    pixelDensity[offset + 2],
    pixelDensity[offset + 3]
  ];

  return RGBAComponents;
}

function InitLScanLineArray(separation_factor, startColor, color_increment_factor, color_ceiling, allowColorCeiling) {
  lines.push(new ScanLine(0, 0, windowWidth, 0, 1, startColor));
  newColor = startColor;
  for (let i = 1; i < windowHeight; i += windowHeight / separation_factor) {
    if (allowColorCeiling && newColor >= color(color_ceiling, color_ceiling, color_ceiling)) {//if we want to have a color we "stop" at eventually when adding
      newColor = color(color_ceiling, color_ceiling, color_ceiling);
    }
    else if (newColor + color_increment_factor > 255) { //else, underflow to new color incrementation if we reach 255
      prevColor = get()
      newColor = (newColor + color_increment_factor) - 255;
    }
    else { //else, just add to color as normal
      newColor = color_increment_factor;
    }
    lines.push(new ScanLine(0, i + separation_factor, windowWidth, i + separation_factor));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // colorMode(HSB, 360);
  let l = new ScanLine(0,
    0,
    windowWidth,
    0,
    windowWidth,
    100,
    100,
    100,
    1);
  // l.display();
  lines.push(l);
  // lines[0].display();
  strokeWeight(2);
  stroke(150);

  // set timings for each line draw, in terms of ms 
  timeInterval = 500;
  for (let index = 0; index < 10; index++) {
    timings[index] = timeInterval * index;
  }
}

function draw() {
  // background(100, 100, 100, 100);
  background(255);

  for (let index = 0; index < windowHeight; index += windowWidth / 64) {
    // const element = array[index];
    strokeWeight(1);
    stroke(0, windowWidth / index, index);
    line(0, index, windowWidth, index / 3);
    line(0, index, windowWidth, index / .1);
    // line(0, index, windowWidth, index / 2);
    // line(0, index, windowWidth, index / .3);
  }

  // lines[0].display();
}
