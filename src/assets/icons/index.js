import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component



const req = require.context('./svg', true, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
// register globally
Vue.component('svg-icon', SvgIcon)