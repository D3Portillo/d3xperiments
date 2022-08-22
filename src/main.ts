import "./style.css"
import { html } from "lighterhtml"

import App from "./components/App"
import SketchList from "./sketches/list"

/**
 * If no 404 file present Cloudfare considers the deploy as an SPA.
 * We can then extract path to match sketch item to render
 * @see https://developers.cloudflare.com/pages/platform/serving-pages/#single-page-app-spa-rendering
 */
const sketchIdx = parseInt(location.pathname.replace("/", "") || "0")
const toRenderSketch = SketchList[sketchIdx]
window.sketch = { index: sketchIdx, instance: toRenderSketch }

if (toRenderSketch) {
  window.app.appendChild(html.node`${App()}`)
  toRenderSketch.start()
} else {
  // TODO: render 404
}
