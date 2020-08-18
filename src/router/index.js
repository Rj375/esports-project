import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    
    component: () => import('@/components/Home.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    
    component: () => import('@/components/Contact.vue')
  },
  {
    path: '/admin-player',
    name: 'Admin-player',
    
    component: () => import('@/components/Admin-player.vue')
  },
  {
    path: '/login',
    name: 'Login',
    
    component: () => import('@/components/Login.vue')
  },
  {
    path: '/image',
    name: 'Image',
    
    component: () => import('@/components/Image.vue')
  },
  {
    path: '/team',
    name: 'Team',
    
    component: () => import('@/components/Team.vue')

  },
  {
    path: '/player',
    name: 'Player',
    
    component: () => import('@/components/Player.vue')

  }
 
  
]

const router = new VueRouter({
  routes
})

export default router
