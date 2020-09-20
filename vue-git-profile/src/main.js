import Vue from 'vue'
import App from './App.vue'
import HeyUI from 'heyui'
// import router from 'vue-router'

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
  render: h => h(App),
}).$mount('#app')
