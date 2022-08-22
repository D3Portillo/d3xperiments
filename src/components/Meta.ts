import { html } from "lighterhtml"
import { getSketchName } from "../sketches/list"

export default function Meta() {
  const { index } = window.sketch
  const sketchName = getSketchName(index)
  const pageTitle = `${index.toString().padStart(2, "0")} | ${sketchName}`
  const headDefs = html.node` <title>${pageTitle}</title> `
  document.querySelector("head")?.append(headDefs)
  return ""
}
