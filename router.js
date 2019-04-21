import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home.vue'

Vue.use(Router)

const routes = [
  {
    component: home,
    path: '/'
  }
]

const appRouter = new Router({
  mode: 'history',
  base: '/',
  routes
})

export function createRouter() {
  return appRouter
}
