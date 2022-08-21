import P5 from "p5";

export default class Sketch extends P5 {
  public static start(node: HTMLElement) {
    new this((p) => p, node);
  }
}
