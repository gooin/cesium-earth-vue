import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import '../public/Cesium/Widgets/widgets.css'
import { Tooltip } from 'element-ui'
import i18n from './i18n'

Vue.config.productionTip = false
Vue.use(Tooltip)
// Vue.use(Col)

// i18n.locale = 'en'
// Vue.prototype.viewer = undefined;
// Vue.prototype.scene = undefined;

new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
