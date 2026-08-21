// .vuepress/config.ts

import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  bundler: viteBundler(),
  lang: 'zh-CN',
  title: '回忆时光博客',
  description: '我的博客',
  base: '/',

  theme: recoTheme({
    // ========== 导航栏 ==========
    navbar: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/posts.html' },
      { text: '时间轴', link: '/timeline.html' },
      { text: '关于我', link: '/about/' },
      { text: 'GitHub仓库', link: 'https://github.com/dongranliu' },
    ],

    // ========== 文章系列配置 ==========
     autoSetSeries: true,

    // ========== 社交链接 ==========
    socialLinks: [
      { icon: 'IconGitHub', link: 'https://github.com/dongranliu' },
    ],
  }),
})
