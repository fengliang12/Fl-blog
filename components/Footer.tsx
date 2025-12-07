import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="relative overflow-hidden rounded-[40px] px-6 py-10 text-center">
        <div
          className="sparkle-grid pointer-events-none absolute inset-0 rounded-[40px]"
          aria-hidden="true"
        />
        <div className="relative space-y-6">
          <p className="text-xs font-semibold tracking-[0.5em] text-gray-500 uppercase">
            Stay Playful
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-600">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
            <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          </div>
          <div className="flex flex-col items-center gap-1 text-xs font-semibold tracking-[0.4em] text-gray-500 uppercase">
            <span>{`© ${new Date().getFullYear()} ${siteMetadata.title}`}</span>
          </div>
          <div className="text-xs text-gray-500">
            <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
              Based on Tailwind Next.js
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
