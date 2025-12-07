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
    title: '低代码平台',
    description: `一个基于低代码的 Web 应用开发平台，提供可视化的拖拽式组件配置，无需编码即可快速搭建自定义的 Web 应用。`,
    imgSrc: '/static/images/low-code.png',
    href: 'https://low-code-platform-ashy.vercel.app/',
  },
  {
    title: '黑客松项目',
    description: `一个基于区块链的黑客松项目，邀请开发者参与构建去中心化应用（DApp），并通过.token 奖励来激励创作与贡献。`,
    imgSrc: '/static/images/hackathon.png',
    href: 'https://front-7rl4.vercel.app/',
  },
  {
    title: '个人私仓（Hooks、UI、Performance SDK、Libs）',
    description: `个人维护的前端私有仓库，包含 Hooks、UI 组件库、性能采集 SDK 与工具库等模块；统一版本管理与发布，便于在多个项目中复用与迭代。`,
    imgSrc: '/static/images/monorepo2.png',
    href: 'http://ec2-3-93-66-55.compute-1.amazonaws.com:4873/',
  },
  {
    title: '聊天机器人',
    description: '一个基于 Next.js 构建的聊天机器人应用，支持实时聊天、群聊、文件传输等功能。',
    imgSrc: '/static/images/chat.png',
    href: 'https://fengqilin168.top/',
  },
  {
    title: '10000个高频英语单词',
    description:
      '一个用于学习英语单词的页面，根据单词在美剧中出现的频率，展示单词的出现次数和频率。',
    imgSrc: '/static/images/words.png',
    href: 'https://10000words.pages.dev/words',
  },
]

export default projectsData
