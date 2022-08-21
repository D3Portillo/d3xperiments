import Sketch from "../Sketch"

class Playground extends Sketch {
  renderCount = 0

  setup() {
    this.stroke(0, 0, 0, 20)
  }

  draw() {
    this.renderCount++
    if (this.renderCount < 2000) {
      // Stop rendering lines at 2000 renderCount
      this.randomChord()
      this.randomChord()
    }
  }

  randomChord() {
    const getRandomPoint = () => {
      const hs = this.canvasSize * 0.5
      const randomAngle = this.random(0, 2 * Math.PI)
      return {
        x: hs + hs * this.cos(randomAngle),
        y: hs + hs * this.sin(randomAngle),
      }
    }
    const pointA = getRandomPoint()
    const pointB = getRandomPoint()

    // Draw a line between the 2 random them
    this.line(pointA.x, pointA.y, pointB.x, pointB.y)
  }
}

export default Playground
