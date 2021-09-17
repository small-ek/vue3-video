module.exports = {
    title: "Vue3Video", // 网站标题
    description: 'Vue3Video 基于vue3编写的视频播放器', //网站描述
    keyword: 'videoPlayer,vue3Video, hlsjs, m3u8视频流播放', //网站描述
    // lang: 'en-US', //语言
    base: '/vue3-video/',
    repo: 'vuejs/vitepress',
    head: [
        // 改变title的图标
        // [
        //     'link',
        //     {
        //         rel: 'icon',
        //         href: '/img/linktolink.png', //图片放在public文件夹下
        //     },
        // ],
    ],
    markdown: {

        config: (md) => {
            const {
                demoBlockPlugin
            } = require('vitepress-theme-demoblock')
            md.use(demoBlockPlugin)
        }
    },
    // 主题配置
    themeConfig: {
        //   头部导航
        nav: [{
            text: '首页',
            link: '/'
        }, {
            text: '使用指南',
            link: '/guide/install'
        }, {
            text: 'github',
            link: 'https://github.com/xdlumia/vue3-video'
        }],
        //   侧边导航
        sidebar: [{
            text: '更新日志',
            link: '/guide/changelog'
        }, {
            text: '使用指南',
            link: '/guide/install'
        }],

    }
}