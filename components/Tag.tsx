import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="text-primary-600 hover:text-primary-700 border-primary-200 m-1 inline-flex items-center gap-1 rounded-full border-2 bg-white px-3 py-1 text-xs font-black tracking-[0.35em] uppercase shadow-[6px_8px_0_rgba(25,53,70,0.25)] transition hover:-translate-y-0.5"
    >
      <span aria-hidden="true" className="text-primary-500">
        #
      </span>
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
