import Sketch from "../Sketch"

export default class Noise extends Sketch {
  xOffset = 0.0
  yOffset = 0.0

  setup() {
    this.noStroke()
  }

  draw() {
    const { xOffset, yOffset, canvasSize: size } = this
    const speed = 0.009
    // Create an alpha blended background
    this.fill(248, 33)
    this.rect(0, 0, size, size)

    // Get a noise value based on xoff and scale
    const xNoise = this.noise(xOffset) * size
    const yNoise = this.noise(yOffset) * size
    const ballSize = 42 * 2
    this.fill(42)
    this.ellipse(xNoise, yNoise, ballSize, ballSize)
    this.xOffset += speed
    this.yOffset += speed
  }
}
