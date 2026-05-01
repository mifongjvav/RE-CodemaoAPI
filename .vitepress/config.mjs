import { defineConfig } from "vitepress";
import { sidebar } from "./sidebar.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "https://afsweb.qzz.io/logo.svg" }]],
  title: "RE:CodemaoAPI",
  description: "下一代由社区维护的编程猫API文档",
  themeConfig: {
    logo: "https://afsweb.qzz.io/logo.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "API", link: "/api_main" },
      { text: "关于", link: "/about" },
    ],

    sidebar: {
      "/": [
        {
          text: "目录",
          items: [
            { text: "从lambdark的CodemaoAPI迁移来的", link: "/lambdark" },
          ],
        },
      ],
      "/lambdark/": [
        ...sidebar,
        {
          text: "关于",
          items: [
            { text: "作者：lambdark", link: "https://lambdark.com/" },
            {
              text: "点击跳转到lambdark的API文档！",
              link: "https://codemao.lambdark.com/",
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/mifongjvav/RE-CodemaoAPI" },
    ],
    footer: {
      message: "基于 MIT 许可发布",
      copyright: "Copyright © 2026 mifongjvav",
    },

    editLink: {
      pattern:
        "https://github.com/mifongjvav/RE-CodemaoAPI/edit/main/docs/:path",
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
