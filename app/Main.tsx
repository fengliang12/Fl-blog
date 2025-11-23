import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5
const heroFocus = [
  {
    title: '组件化设计',
    detail: '从原子到复合组件，掌握可组合与可维护的模式。',
  },
  {
    title: '工程化实践',
    detail: '基于 Next.js 的路由、数据与部署，构建真实生产环境。',
  },
  {
    title: '性能与体验',
    detail: '优化首屏、减少重绘与懒加载，提升交互流畅度。',
  },
]

const featureHighlights = [
  {
    title: 'React16源码分析',
    description: '基于自己手写的yd-React，从0到1拆解React核心流程——Fiber树构建',
    icon: '⚛️',
  },
  {
    title: '自定义loader',
    description: '前端国际化资源自动提取工具i18n-extract-loader',
    icon: '📘',
  },
  {
    title: 'Node事件循环与libuv',
    description: '系统梳理libuv事件循环的阶段划分、观察者类型，对比Node.js与浏览器事件循环差异',
    icon: '🎨',
  },
]

const featureLinks: Record<string, string> = {
  React16源码分析: '/blog/React/1-React16源码分析',
  自定义loader: '/blog/Webpack/9-国际化自动提取loader',
  Node事件循环与libuv: '/blog/V8/1-Node事件循环',
}

export default function Home({ posts }) {
  const heroStats = [
    { label: '前端笔记', value: `${posts.length}+`, note: '精选文章' },
    { label: 'UI 组件', value: '12', note: '可复用组件' },
    { label: '示例项目', value: '6', note: '开源实战' },
  ]

  return (
    <div className="space-y-10">
      <section className="mx-auto mt-10 max-w-4xl space-y-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.45em] text-gray-500 uppercase">
            前端专题
          </p>
          <h2 className="text-3xl font-black text-gray-900">前端核心板块</h2>
          <p className="text-base text-gray-600">
            围绕 React、Next.js、TypeScript 与性能优化构建前端知识体系。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featureHighlights.map((feature) => {
            const href = featureLinks[feature.title]
            if (href) {
              return (
                <Link
                  key={feature.title}
                  href={href}
                  className="block break-words"
                  aria-label={`跳转到 ${feature.title}`}
                >
                  <div className="cartoon-card relative h-full p-5">
                    <div className="text-4xl">{feature.icon}</div>
                    <h3 className="mt-4 text-2xl font-black text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                  </div>
                </Link>
              )
            }
            return (
              <div key={feature.title} className="cartoon-card relative h-full p-5">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="mt-4 text-2xl font-black text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.4em] text-gray-500 uppercase">
              最新发布
            </p>
            <h2 className="text-3xl font-black text-gray-900">前端日志</h2>
            <p className="text-base text-gray-600">精选前端文章与实战项目，带你走进我的工作台。</p>
          </div>
          {posts.length > MAX_DISPLAY && (
            <Link
              href="/blog"
              className="cartoon-button text-primary-700 inline-flex items-center justify-center px-5 py-2 text-sm font-semibold"
            >
              全部文章
            </Link>
          )}
        </div>
        <ul className="space-y-5">
          {!posts.length && <li className="text-center text-gray-500">暂无文章</li>}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug}>
                <article className="cartoon-card relative overflow-hidden p-5">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                    <div className="cartoon-card px-3 py-1.5 text-xs font-semibold tracking-[0.35em] uppercase shadow-none">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </div>
                    <div className="space-y-3">
                      <h2 className="text-2xl font-black text-gray-900">
                        <Link href={`/blog/${slug}`}>{title}</Link>
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                      <p className="text-base text-gray-600">{summary}</p>
                      <Link
                        href={`/blog/${slug}`}
                        className="cartoon-button text-primary-700 inline-flex items-center justify-center px-5 py-2 text-sm font-semibold"
                        aria-label={`阅读全文: "${title}"`}
                      >
                        阅读全文
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
