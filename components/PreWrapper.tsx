import Pre from 'pliny/ui/Pre'
import Mermaid from './Mermaid'
import type { ComponentProps, ReactElement, ReactNode } from 'react'

export default function PreWrapper(props: ComponentProps<'pre'>) {
  const child = Array.isArray(props.children)
    ? (props.children.find((el) => typeof el === 'object') as ReactElement)
    : (props.children as ReactElement)

  const extractText = (node: ReactNode): string => {
    if (typeof node === 'string') return node
    if (Array.isArray(node)) return node.map(extractText).join('')
    if (node && typeof node === 'object') {
      const el = node as ReactElement
      //@ts-ignore
      return extractText(el.props?.children)
    }
    return ''
  }

  //@ts-ignore
  const code = extractText(child?.props?.children).trim()
  //@ts-ignore
  const className = (child?.props?.className || props.className) as string | undefined
  const isMermaid =
    className?.includes('language-mermaid') || child?.props?.['data-language'] === 'mermaid'

  if (isMermaid && code) {
    return <Mermaid chart={code} />
  }

  //@ts-ignore
  return <Pre {...props} />
}
