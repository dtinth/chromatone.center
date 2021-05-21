import 'virtual:windi.css'
import { MotionPlugin } from '@vueuse/motion'
import { GesturePlugin } from '@vueuse/gesture'

import './styles/vars.css'
import './styles/transitions.css'
import './styles/layout.postcss'
import './styles/custom-blocks.css'
import './styles/sidebar-links.postcss'

import Layout from './layout.vue'
import NotFound from './not-found.vue'
import rowList from '@theme/components/row/list.vue'

const theme = {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.use(MotionPlugin)
    app.use(GesturePlugin)
    app.component(rowList)
  },
}

export default theme
