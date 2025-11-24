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
    title: '个人私仓（Hooks、UI、Performance SDK、Libs）',
    description: `个人维护的前端私有仓库，包含 Hooks、UI 组件库、性能采集 SDK 与工具库等模块；统一版本管理与发布，便于在多个项目中复用与迭代。`,
    imgSrc: '/static/images/monorepo2.png',
    href: 'http://ec2-3-93-66-55.compute-1.amazonaws.com:4873/',
  },
]

export default projectsData
