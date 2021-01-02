import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
  created: () => {
    // 言語を日本語に設定
    document.documentElement.setAttribute('lang', 'ja')
  },
}).$mount('#app')
