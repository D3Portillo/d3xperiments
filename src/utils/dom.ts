import { render, Renderable } from "lighterhtml"

export function withShadowUpdate(
  content: () => Renderable,
  signal: { setSignal: Function }
) {
  const shadowRoot = document.createElement("div").attachShadow({
    mode: "open",
  })
  function update() {
    return render(shadowRoot, content)
  }
  signal.setSignal(update)
  return update()
}

export function createUpdateSignal() {
  let signal = function () {}
  return {
    update() {
      signal()
    },
    setSignal(newSignal: typeof signal) {
      signal = newSignal
    },
  }
}
