import Playground from "./Playground"
import Noise from "./Noise"
import SketchClass from "../Sketch"

type Sketch = typeof SketchClass
const list: Array<Sketch> = []
const sketchNames: Array<string> = []
const sketchURLs: Array<string> = []

function setSketchList(
  ...args: Array<{ sketch: Sketch; name: string; url: string }>
) {
  args.map(({ sketch, name, url }) => {
    list.push(sketch)
    sketchNames.push(name)
    sketchURLs.push(url)
  })
}

function __getSketchURL(file: string) {
  return `https://github.com/D3Portillo/d3xperiments/blob/master/src/sketches/${file}`
}

setSketchList(
  {
    sketch: Playground,
    name: "Genesis",
    url: __getSketchURL("Playground.ts"),
  },
  {
    sketch: Noise,
    name: "Noise",
    url: __getSketchURL("Noise.ts"),
  }
)

export const size = list.length
export const lastIndex = size - 1
export const getSketchName = (idx: number) => sketchNames[idx]
export const getSketchURL = (idx: number) => sketchURLs[idx]
export default list
