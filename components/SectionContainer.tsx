import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pt-2 pb-12 sm:px-7 xl:max-w-6xl xl:px-0">
      {children}
    </section>
  )
}
