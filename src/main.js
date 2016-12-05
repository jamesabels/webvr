import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Import Components
// import App from './App'
import Hello from './components/Hello.vue'
import Ocean from './components/Ocean.vue'

/* eslint-disable no-new */

const routes = [
  {path: '/', component: Hello},
  {path: '/ocean', component: Ocean}
]

const router = new VueRouter({routes})

new Vue({
  router
}).$mount('#app')
