import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Starship CMS",
    description: "探索版全栈企业级生态架构与开发结晶",
    base: '/new-docs/', // 这里的 base 是挂载到 github pages 仓库目录专用的
    themeConfig: {
        nav: [
            { text: '回港 (首页)', link: '/' },
            { text: '技术白皮书', link: '/whitepaper' }
        ],

        sidebar: [
            {
                text: '🌍 架构档案',
                items: [
                    { text: '全栈生态白皮书', link: '/whitepaper' }
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
