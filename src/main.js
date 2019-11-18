import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import 'assets/stylus/reset.css'



new Vue({
  router,
  store,
  render: h => h(App),
  mounted: function () {
    window.onresize = () => {
      return (() => {
          var docEl = document.documentElement;
          var html = document.querySelector('html');
          var rem = docEl.clientWidth / 10;
          html.style.fontSize = rem + 'px';
      })()
    }
  },

}).$mount('#app')
