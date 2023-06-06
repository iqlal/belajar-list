import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
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
      {
        text: 'Speed Dial',
        items: [
          { text: 'Get Started', link: 'gettingstarted/createmicrosoftaccount' },
          { text: 'Customization', link: '/customization/columns' },
          { text: 'Additional Features', link: '/additional/integrate' }
        ]
      },
      { text: 'Contributor', link: '/team' }
    ],
    sidebar: [
      { text: 'Pendahuluan', link: '/intro' },
      {
        text: 'Get Started',
        collapsed: false,
        items: [
          { text: 'Membuat Akun Microsoft', link: '/gettingstarted/createmicrosoftaccount' },
          { text: 'Membuat Blank List', link: '/gettingstarted/createblanklist' },
          { text: 'Membuat List dari Templates', link: '/gettingstarted/createfromtemplates' }
        ]
      },
      {
        text: 'Customization',
        collapsed: false,
        items: [
          { text: 'Columns', link: '/customization/columns' },
          { text: 'Views', link: '/customization/views' }
        ]
      },
      {
        text: 'Additional Features',
        collapsed: false,
        items: [
          { text: 'Integrate', link: '/additional/integrate' },
          { text: 'Automate', link: '/additional/automate' }
        ]
      },
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
