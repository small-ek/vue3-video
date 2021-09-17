import theme from 'vitepress/dist/client/theme-default'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import './styles/index.css'
import {
  registerComponents
} from './register-components'

import 'vue3-video/dist/style.css'
const isClient = typeof window == 'object'
export default {
  ...theme,
  async enhanceApp({
    app,
    router,
    siteData
  }) {
    if (isClient) {
      await import('vue3-video').then((m) => {
        app.use(m.default)
      })
      // await import('../../../lib/index.js').then((m) => {
      //   app.use(m.default)
      // })
    }
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.

    registerComponents(app)
  }
}