import { html } from "lighterhtml"
import { HTMLProps } from "./types.shared"

export default function ExternalLink(
  child: string,
  props: HTMLProps<HTMLLinkElement> = {}
) {
  return html`<a
    class="hover:underline decoration-dotted ${props.class}"
    target="${props.target || "_blank"}"
    rel="noreferrer noopener"
    href="${props.href}"
    >${child}</a
  >`
}
