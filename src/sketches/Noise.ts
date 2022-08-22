import Sketch from "../Sketch"

export default class Noise extends Sketch {
  xOffset = 0
  yOffset = 0
  yDestination = 0
  lastYDestination = 0

  setup() {
    this.yDestination = this.canvasSize * 0.75
    this.noStroke()
  }

  draw() {
    const {
      xOffset,
      yOffset,
      canvasSize: size,
      yDestination,
      lastYDestination,
    } = this
    const SPEED = 0.009
    // Create an alpha blended background
    this.fill(250, 25)
    this.rect(0, 0, size, size)

    // Get a noise value based on xoff and canvas size
    const xNoise = this.noise(xOffset) * size
    const currY = this.lerp(lastYDestination, yDestination, this.yOffset)
    if (yOffset >= 1) {
      this.yOffset = 0
      this.lastYDestination = yDestination
      this.yDestination = this.random(0, size)
    }
    const ballSize = 42 * 2
    this.fill(42)
    this.ellipse(xNoise, currY, ballSize, ballSize)
    this.xOffset += SPEED
    this.yOffset += SPEED
  }
}
