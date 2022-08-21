import "./style.css"
import SketchList from "./sketches/list"

const sketchIdx = parseInt(location.hash.replace(/#|\//g, "") || "0")
const toRenderSketch = SketchList[sketchIdx]

if (toRenderSketch) {
  toRenderSketch.start()
} else {
  // TODO: render 404
}
