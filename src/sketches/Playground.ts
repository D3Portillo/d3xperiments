import Sketch from "../Sketch";

class Playground extends Sketch {
  setup() {
    this.createCanvas(400, 400);
    this.background(255, 255, 255);

    // translucent stroke using alpha value
    this.stroke(0, 0, 0, 15);
  }

  draw() {
    // draw two random chords each frame
    this.randomChord();
    this.randomChord();
  }

  randomChord() {
    // find a random point on a circle
    let angle1 = this.random(0, 2 * this.PI);
    let xpos1 = 200 + 200 * this.cos(angle1);
    let ypos1 = 200 + 200 * this.sin(angle1);

    // find another random point on the circle
    let angle2 = this.random(0, 2 * this.PI);
    let xpos2 = 200 + 200 * this.cos(angle2);
    let ypos2 = 200 + 200 * this.sin(angle2);

    // draw a line between them
    this.line(xpos1, ypos1, xpos2, ypos2);
  }
}

export default Playground;
