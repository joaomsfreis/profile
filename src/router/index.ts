import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import About from '../views/About.vue'
import Education from '../views/Education.vue'
import Experience from '../views/Experience.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
