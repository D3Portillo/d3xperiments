import P5 from "p5"

export default class Sketch extends P5 {
  canvasSize = 480 // Default size for any created canvas

  public static start() {
    new this((p) => p, document.querySelector("#renderer")!)
  }

  private prepareSetup(setup: Function) {
    this.createCanvas(this.canvasSize, this.canvasSize)
    setup.call(this)
  }

  constructor(sketch: (p5: P5) => any, node: HTMLElement) {
    super(sketch, node)
    const __setup = this.setup // Proxy setup method
    this.setup = () => this.prepareSetup(__setup)
  }
}
