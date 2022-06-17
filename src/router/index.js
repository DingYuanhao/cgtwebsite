import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/p5js',
    name: 'p5js',
    component: () => import('../views/p5js.vue')
  },
  {
    path: '/TheNine',
    name: 'TheNine',
    component: () => import('../views/TheNine.vue')
  },
  {
    path: '/syf',
    name: 'syf',
    component: () => import('../views/syf.vue')
  },
  {
    path: '/mdd',
    name: 'mdd',
    component: () => import('../views/mdd.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
