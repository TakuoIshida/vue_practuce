import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import router from './router'
Vue.config.devtools = true;
Vue.config.productionTip = false

// Log in前の 認証処理など、グローバルな処理に使用する
router.beforeEach((to, from , next) => {
  //必須。次のページに遷移する
  next()

  // redilect処理
  // if (to.path === "users/1") {
  //   next('/')
  // }
  // page遷移しない
  // next(false)
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
