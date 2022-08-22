import { html } from "lighterhtml"
import { createUpdateSignal, withShadowUpdate } from "../utils/dom"
import { getSketchURL } from "../sketches/list"

import ExternalLink from "./ExternalLink"

export default function Header() {
  const signal = createUpdateSignal()
  let showNav = false
  const { index } = window.sketch
  const sketchURL = getSketchURL(index)

  function toggleNav() {
    showNav = !showNav
    signal.update()
  }

  return withShadowUpdate(
    () => html`
      <nav class="pt-4 pl-4 flex fixed z-20 bg-white">
        <button
          onclick="${toggleNav}"
          class="text-2xl w-12 h-12 border flex items-center justify-center"
        >
          ≡
        </button>
      </nav>
      <nav
        is-hidden="${!showNav}"
        class="fixed flex flex-col pl-4 pt-20 top-0 left-0 p-4 z-10"
      >
        ${ExternalLink("Home", {
          href: "/",
          target: "_self",
        })}
        ${ExternalLink("Github", {
          href: "https://github.com/D3Portillo/d3xperiments",
        })}
        ${ExternalLink("Sketch Code", {
          href: sketchURL,
        })}
      </nav>
    `,
    signal
  )
}
