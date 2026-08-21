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
    // 导航栏
    navbar: [
      { text: '首页', link: '/' },
      { text: '时间轴', link: '/timeline/' },
      { text: '关于我', link: '/about/' },
      { text: 'GitHub仓库', link: 'https://github.com/dongranliu' },
    ],

    // ---------- 最重要的：系列配置 ----------
    series: {
      '/': [
        {
          text: '全部文章',
          children: [
            // 列出你的所有博客文章路径，以 docs 为根目录
            '/blog/利用docker-compose搭建单机mongodb复制集上.md',
            '/blog/利用docker-compose搭建单机mongodb复制集下.md',
            '/blog/docker自定义网络.md',
            '/blog/用Golang和mongodb交互之插入数据.md',
            '/blog/用Golang和mongodb交互之连接mongodb.md',
            '/blog/docker镜像简单使用命令.md',
            // ... 把你所有的文章都列在这里
          ]
        }
      ]
    },

    // 社交链接（会显示在文章列表右侧）
    socialLinks: [
      { icon: 'IconGitHub', link: 'https://github.com/dongranliu' },
    ],
  }),
})
