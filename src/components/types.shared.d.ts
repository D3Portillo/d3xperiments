import SketchClass from "../Sketch"

export type HTMLProps<Element> = {
  class?: string
} & Partial<Element>

export type Sketch = typeof SketchClass
