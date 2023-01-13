import Vue from 'vue'
import App from './App.vue'

import router from './router'

import TypeNav from  '@/components/TypeNav/index.vue'
import store from './store'

// import {reqCategory} from '@/api/index'
// reqCategory()
Vue.component(TypeNav.name,TypeNav)

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app')
