import Vue from 'vue'
import App from '@/App.vue'
import router from '@/utils/router'
import store from '@/utils/store'
import '@/utils/plugins/worker'
import '@/utils/multilanguage'
import '@/utils/plugins/translate'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
