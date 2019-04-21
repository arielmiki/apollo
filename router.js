import Vue from 'vue'
import Router from 'vue-router'

import experience from '@/pages/experience.vue'
import home from '@/pages/home.vue'
import projects from '@/pages/projects.vue'
import skills from '@/pages/skills.vue'

Vue.use(Router)

const routes = [
  {
    component: home,
    path: '/'
  },
  {
    component: experience,
    path: '/experience'
  },
  {
    component: projects,
    path: '/projects'
  },
  {
    component: skills,
    path: '/skills'
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
