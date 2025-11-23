import Mermaid from './Mermaid'
import type { HTMLAttributes } from 'react'

export default function CodeWrapper(props: HTMLAttributes<HTMLElement>) {
  const className = props.className
  const isMermaid =
    className?.includes('language-mermaid') ||
    (props as Record<string, unknown>)['data-language'] === 'mermaid'

  const content = Array.isArray(props.children)
    ? props.children.join('')
    : String(props.children ?? '')

  if (isMermaid) {
    return <Mermaid chart={content} />
  }

  return <code {...props} />
}
