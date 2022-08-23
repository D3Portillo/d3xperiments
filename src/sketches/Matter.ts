import Sketch from "../Sketch"

const TOTAL_DOTS = 42
const MIN_DOT_SIZE = 42
const MAX_SPEED = 6
export default class Matter extends Sketch {
  dots: Array<{ size: number; grow: boolean }> = []
  setup() {
    this.noStroke()
    for (let i = 0; i < TOTAL_DOTS; ++i) {
      this.dots.push(this.randomWH())
    }
  }

  randomWH() {
    return {
      size: this.random(MIN_DOT_SIZE, this.width - MAX_SPEED),
      grow: true,
    }
  }

  draw() {
    const { width: canvasSize } = this
    // Reset each frame
    this.fill(255, 255, 255)
    this.rect(0, 0, canvasSize, canvasSize)

    this.translate(canvasSize / 2, canvasSize / 2)
    this.fill(0, 0, 0, this.random(32, 44))
    for (let i = 0; i < TOTAL_DOTS; ++i) {
      let SPEED = -this.random(1, MAX_SPEED)
      let { size: dotSize, grow } = this.dots[i]
      this.ellipse(0, 0, dotSize, dotSize)
      if (grow) {
        SPEED *= -1
      }
      if (dotSize > canvasSize - MAX_SPEED) {
        grow = false
      } else if (dotSize < MIN_DOT_SIZE) {
        grow = true
      }
      this.dots[i] = { size: dotSize + SPEED, grow }
    }
  }
}
