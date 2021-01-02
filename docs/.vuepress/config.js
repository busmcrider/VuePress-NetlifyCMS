const { description } = require('../../package')

module.exports = {
//  base: '/VuePress-NetlifyCMS/',
  theme: 'succinct',
  globalUIComponents: [
    'ThemeManager'
  ],
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'SUPERSECRETSAUCE',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'David Spangenberg & Isaac Allen Projects',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
/**    ['script', {
      src: "https://cdn.jsdelivr.net/npm/netlify-identity-widget@1.9.1/build/netlify-identity-widget.min.js",
      async: true,
      defer: true}],
**/  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
