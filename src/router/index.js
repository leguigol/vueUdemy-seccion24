import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: () => import(/* webpackChunkName: "about" */ '../views/Perfil.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/crud',
    name: 'crud',
    component: () => import(/* webpackChunkName: "about" */ '../views/Crud.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async(to,from,next)=> {
  const requiresAuth=to.matched.some(record=>record.meta.requiresAuth)
  if(requiresAuth){
    next()
  }else{
    next()
  }
})
export default router
