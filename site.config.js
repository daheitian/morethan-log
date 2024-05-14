const CONFIG = {
  // profile setting (required)
  profile: {
    name: "好室咨询",
    image:"<div style="position: relative; width: 100%; height: 0; padding-top: 100.0000%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.cn&#x2F;design&#x2F;DAFY1NHHl4s&#x2F;7bFlUrw91MfjVafL5Gm4dw&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<a href="https:&#x2F;&#x2F;www.canva.cn&#x2F;design&#x2F;DAFY1NHHl4s&#x2F;7bFlUrw91MfjVafL5Gm4dw&#x2F;view?utm_content=DAFY1NHHl4s&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">好宅</a>，", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
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
    title: "好室咨询hooozzz",
    description: "为您的家庭找到好的设计服务",
    theme: "light", // ['light', 'dark', 'auto']
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
