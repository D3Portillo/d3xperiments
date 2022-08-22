import { html } from "lighterhtml"
import { lastIndex as lastItemIndex } from "../sketches/list"

import Meta from "./Meta"
import Header from "./Header"
import ExternalLink from "./ExternalLink"

export default function App() {
  const { index: i } = window.sketch
  const nextIdx = Math.min(i + 1, lastItemIndex)
  const prevIdx = Math.max(0, i - 1)
  const isOmega = i === lastItemIndex
  const isGenesis = i === 0
  return html` ${Meta()} ${Header()}
    <div class="flex items-center justify-center flex-grow" id="renderer"></div>
    <div class="p-4 flex items-center justify-between space-x-2">
      <span class="text-slate-400"
        >Experiments by
        ${ExternalLink("@d3portillo", {
          class: "hover:text-black",
          href: "https://twitter.com/d3portillo",
        })}
      </span>
      <div class="flex-grow" />
      <a
        is-hidden="${isGenesis}"
        class="font-bold text-slate-700 hover:text-black px-1"
        href="/${prevIdx}"
        >❮ Prev</a
      >
      <a
        is-hidden="${isOmega}"
        class="font-bold text-slate-700 hover:text-black px-1"
        href="/${nextIdx}"
        >Next ❯</a
      >
    </div>`
}
