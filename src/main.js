import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'

// import { routes } from "./routes"
// import VueRouter from "vue-router"
// Vue.use(VueRouter)
// const router = new VueRouter({
//   routes, // "routes: routes"  と同じ
//   mode: "history"
// })
// router.beforeEach((to, From, next) => {
//   // グローバルに適用される
//   next()
// })

Vue.config.productionTip = false

new Vue({
  // router,
  store,
  render: h => h(App),
}).$mount('#app')
