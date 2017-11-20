import Router from 'vue-router'
import Vue from 'vue'

function load (component) {
  return () => System.import(`@/components/${component}`)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: load('MemoryList')
    }
  ]
})
