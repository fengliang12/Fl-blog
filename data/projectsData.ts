interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Web3 University',
    description: `A decentralized university powered by blockchain, token incentives, and DAO governance, building a global, trustworthy, and transparent digital education ecosystem for learners and educators.`,
    imgSrc: '/static/images/university.png',
    href: 'https://web3-university.top/',
  },
  {
    title: 'The Time Chat',
    description: `这是一个用 Cloudflare Workers 搭的简单中转小工具，专门给我 Cloudflare Pages 上的 React 聊天框页面服务～前端点聊天框发消息，会先经过这个 Worker 中转再去调 OpenAI 的 API，主要就是试试手，解决下前端直接调 API 的跨域问题。`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://fengqilin168.top/',
  },
]

export default projectsData
