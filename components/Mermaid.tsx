'use client'

import { useEffect, useRef, useState } from 'react'

interface MermaidProps {
  chart: string
  className?: string
}

export default function Mermaid({ chart, className }: MermaidProps) {
  const [svg, setSvg] = useState<string>('')
  const idRef = useRef(`mermaid-${Math.random().toString(36).slice(2)}`)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const mermaid = await import('mermaid')
        mermaid.default.initialize({ startOnLoad: false, securityLevel: 'loose', theme: 'default' })
        const { svg } = await mermaid.default.render(idRef.current, chart)
        if (mounted) setSvg(svg)
      } catch (err) {
        if (mounted) setSvg('')
      }
    })()
    return () => {
      mounted = false
    }
  }, [chart])

  if (!svg) {
    return (
      <pre className={className}>
        <code>{chart}</code>
      </pre>
    )
  }

  return (
    <div
      className={`mermaid cartoon-card overflow-x-auto p-4 ${className || ''}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
