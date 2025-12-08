import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '/static/favicons/logo1.png'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from 'next/image'

const Header = () => {
  const headerClass = 'sticky top-0 z-50 w-full pb-4 pt-4'

  return (
    <header className={headerClass}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative rounded-[999px] border-4 border-white/70 bg-white/80 px-4 py-3 shadow-[0px_18px_55px_rgba(69,104,134,0.25)] backdrop-blur">
          <div
            className="sparkle-grid pointer-events-none absolute inset-1 rounded-[999px]"
            aria-hidden="true"
          />
          <div className="relative flex flex-wrap items-center gap-4 md:gap-6">
            <Link
              href="/"
              aria-label={siteMetadata.headerTitle}
              className="flex flex-1 items-center gap-3"
            >
              <span className="from-primary-100 to-primary-300 flex w-12 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg">
                <Image className="h-full w-full rounded-2xl" src={Logo} alt="logo" />
              </span>
              <span>
                <span className="text-lg font-black tracking-[0.15em] text-gray-900 uppercase">
                  {siteMetadata.headerTitle}
                </span>
              </span>
            </Link>
            <nav className="hidden flex-1 items-center justify-center gap-3 lg:flex">
              {headerNavLinks
                .filter((link) => link.href !== '/')
                .map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="nav-pill px-4 py-2 text-sm font-semibold tracking-widest text-gray-700 uppercase"
                  >
                    {link.title}
                  </Link>
                ))}
            </nav>
            <div className="flex flex-1 items-center justify-end gap-3">
              <SearchButton className="cartoon-button hidden h-12 w-12 items-center justify-center md:flex" />
              <div className="hidden rounded-full border-2 border-white/70 bg-white/80 p-2 shadow-md md:flex">
                <ThemeSwitch />
              </div>
              <Link
                href="/about"
                className="cartoon-button hidden rounded-full px-5 py-2 text-sm font-semibold tracking-widest text-gray-800 uppercase md:inline-flex"
              >
                联系我
              </Link>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
