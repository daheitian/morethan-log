const CONFIG = {
  // profile setting (required)
  profile: {
    name: "好室咨询",
    image:"/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "hooozzz",
    bio: "一个优秀的室内设计咨询服务平台，为您和您的家庭找到最合适的设计企业",
    email: "daheitian@foxmail.com",
    linkedin: "hooozzz",
    github: "hooozzz",
    instagram: "",
  },
  projects: [
    {
      name: `好室内数据库`,
      href: "https://zc.super.site/%E5%AE%A4",
    },
  ],
  // blog setting (required)
  blog: {
    title: "好室咨询",
    description: "为您的家庭找到好的设计服务",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://hooozzz.vercel.app/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "zh-CN", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app/%E5%A5%BD%E5%AE%A4.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fmorethan-log.vercel.app%2Favatar.svg&heights=0", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
