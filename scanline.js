class ScanLine {
  // constructor(startX, startY, endX, endY, stroke_color, stroke_weight) {
  ScanLine(startX, startY, endX, endY, stroke_weight, r, g, b, a) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.isDisplayed = false;
    this.stroke_weight = stroke_weight;
    // this.stroke_color = color(r, g, b, a);
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  // constructor for line with variable length
  ScanLine(startX, startY, endX, endY, stroke_weight, color, line_length) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.isDisplayed = false;
    this.stroke_weight = stroke_weight;
    this.stroke_color = color;
  }

  // random line at random place
  ScanLine() {
    this.startX = random(0, windowWidth);
    this.startY = random(0, windowHeight);
    this.endX = random(0, windowWidth);
    this.endY = random(0, windowHeight);
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);
    this.a = random(0, 255);
    // this.stroke_color = random(0, 255);
    this.stroke_weight = 1;
    this.isDisplayed = false;
  }

  getLineLength() {
    return sqrt(sq(this.endX - this.startX) + sq(this.endY - this.startY));
  }

  display() {
    // stroke(this.r, this.g, this.b, this.a);
    stroke(color(this.r, this.g, this.b, this.a));
    strokeWeight(this.strokeWeight);
    line(this.startX, this.startY, this.endX, this.endY);
    this.isDisplayed = true;
  }

  undisplay() {

    this.isDisplayed = false;
  }

  /* if we're doing simple one-color lines, we can cheat and just get the color 
     first pixel of the line. otherwise, we have to do...other stuff (le gasp!)
  */
  getLineColor() {
    loadPixels();
    let d = pixelDensity();
  }

  flicker(flickerFactor) {
    // this.stroke_color = 
    // this.a = 
  }

  update() {

  }
}