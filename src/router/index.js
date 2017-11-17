import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

function load (component) {
  return () => System.import(`@/${component}.vue`)
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'Home',
      component: load('MemoryList')
    }
  ]
})
