import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Starship CMS",
    description: "探索版全栈企业级生态架构与开发结晶",
    ignoreDeadLinks: true, // 忽略死链接检测（防止文档里的 localhost 测试地址导致打包失败）
    base: '/new-docs/', // 这里的 base 是挂载到 github pages 仓库目录专用的
    themeConfig: {
        nav: [
            { text: '回港 (首页)', link: '/' },
            { text: '技术白皮书', link: '/whitepaper' }
        ],

        sidebar: [
            {
                text: '🌍 生态与哲学档案',
                items: [
                    { text: '全栈生态白皮书', link: '/whitepaper' }
                ]
            },
            {
                text: '⚡ 脚手架体系使用指南',
                items: [
                    { text: '积木箱克隆与安全组参数配置', link: '/quick-start' }
                ]
            },
            {
                text: '💻 微服务指南 (Microservices)',
                items: [
                    { text: '1️⃣ 舰长指挥室 (Vue3 Admin)', link: '/frontend' },
                    { text: '2️⃣ 数据神经中枢 (NestJS Backend)', link: '/backend' },
                    { text: '3️⃣ 玻璃态视界 (H5 Consumer)', link: '/h5' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/hnhok/new-docs' }
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2026 AI-Pairing Architecture'
        }
    }
})
