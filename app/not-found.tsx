import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-6xl leading-9 font-extrabold tracking-tight text-gray-900 md:border-r-2 md:px-6 md:text-8xl md:leading-14 dark:text-gray-100">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl leading-normal font-bold md:text-2xl">抱歉，未找到该页面。</p>
        <p className="mb-8">请返回主页浏览其他内容。</p>
        <Link
          href="/"
          className="cartoon-button inline px-4 py-2 text-sm leading-5 font-medium text-gray-900"
        >
          返回主页
        </Link>
      </div>
    </div>
  )
}
