import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RE:CodemaoAPI",
  description: "下一代由社区维护的编程猫API文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "API", link: "/api_main" },
      { text: "关于", link: "/about" },
    ],

    sidebar: [
      {
        text: "社区功能",
        items: [
          { text: "不知道写啥", link: "/api_main" },
          { text: "不知道写啥", link: "/api_main" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/mifongjvav/RE-CodemaoAPI" },
    ],
    footer: {
      message: "基于 MIT 许可发布",
      copyright: "Copyright © 2026 mifongjvav",
    },

    editLink: {
      pattern: "https://github.com/mifongjvav/RE-CodemaoAPI/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
  },
});
