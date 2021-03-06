import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:() => import('@/views/Home')
  },
  {
    path: '/detail',
    component:() => import('@/views/Detail')
  },
]

const router = new VueRouter({
  routes
})

export default router
