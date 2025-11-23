import TOCInline from 'pliny/ui/TOCInline'
import PreWrapper from './PreWrapper'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: PreWrapper,
  table: TableWrapper,
  BlogNewsletterForm,
}
