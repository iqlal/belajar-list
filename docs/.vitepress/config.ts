import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  title: "Belajar Lists",
  description: "Track information. Organize work.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Why Lists', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/iqlal' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/iqlal' }
    ],
    
    footer: {
      message: 'Microsoft List and Microsoft 365 are trademarks by Microsoft Corporation',
      copyright: 'Developed with 💗 by Muhammad Istiqlal (MCT ID 990893354)'
    },
  }
})
