import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import '../public/Cesium/Widgets/widgets.css'
import { Tooltip } from 'element-ui'

Vue.config.productionTip = false
Vue.use(Tooltip)
// Vue.use(Col)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
