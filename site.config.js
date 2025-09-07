const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Bacon",
    image: "/bacon.jpg?v=3", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Highschool Student",
    bio: "I study hacking 😎",
    email: "beicon0215@gmail.com",
    linkedin: "",
    github: "bacon0215",
    instagram: "kms._.0215",
  },
  projects: [
    {
      name: `bacon-blo9`,
      href: "https://github.com/bacon0215/bacon-blo9",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Bacon's Blog",
    description: "Welcome to Bacon's blog!",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://bac0n.dev/",
  since: 2025, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    // @ts-ignore
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      // @ts-ignore
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      // @ts-ignore
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      // @ts-ignore
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      // @ts-ignore
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
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
  // @ts-ignore
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
