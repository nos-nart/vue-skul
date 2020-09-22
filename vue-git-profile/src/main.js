import Vue from 'vue'
import App from './App'
import HeyUI from 'heyui'
import router from './shared/router'
import './assets/styles/index.scss'

require('heyui/themes/index.less')

Vue.use(HeyUI)
Vue.config.productionTip = false

Vue.mixin({
  created() {
    /* eslint-disable */
    console.log('[created] ' + this.$options.name);
  },
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
