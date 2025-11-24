import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import TOCInline from 'pliny/ui/TOCInline'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 pt-4">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              )}
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 lg:grid lg:grid-cols-12 lg:gap-x-10 lg:divide-y-0 xl:gap-x-14 dark:divide-gray-700">
            <aside className="hidden lg:sticky lg:top-24 lg:col-span-3 lg:col-start-1 lg:row-span-2 lg:block lg:self-start lg:pt-11">
              <div className="cartoon-card max-h-[calc(100vh-10rem)] overflow-auto p-4">
                <TOCInline
                  toc={content.toc}
                  ulClassName="[&_a]:text-base [&_a]:font-bold [&_ul_a]:text-sm [&_ul_a]:font-semibold [&_ul_ul_a]:text-xs [&_ul_ul_a]:font-medium [&_ul]:ml-3 [&_ul_ul]:ml-5 [&_ul]:space-y-1"
                  liClassName="my-1"
                />
              </div>
            </aside>
            <div className="divide-y divide-gray-200 lg:col-span-9 lg:col-start-4 lg:row-span-2 lg:pb-0 dark:divide-gray-700">
              <div className="prose dark:prose-invert max-w-none pt-10 pb-8">{children}</div>
            </div>
          </div>
        </div>
        <footer>
          <div className="divide-gray-200 text-sm leading-5 font-medium xl:divide-y dark:divide-gray-700">
            {(next || prev) && (
              <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                {prev && prev.path && (
                  <div>
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      Previous Article
                    </h2>
                    <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                      <Link href={`/${prev.path}`}>{prev.title}</Link>
                    </div>
                  </div>
                )}
                {next && next.path && (
                  <div>
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      Next Article
                    </h2>
                    <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                      <Link href={`/${next.path}`}>{next.title}</Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="pt-4 xl:pt-8">
            <Link
              href={`/${basePath}`}
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="Back to the blog"
            >
              &larr; Back to the blog
            </Link>
          </div>
        </footer>
      </article>
    </SectionContainer>
  )
}
