import { createRouter, createWebHistory, type Router } from 'vue-router'
import { getAuth, type Auth } from "firebase/auth";
import Login from "@/pages/login.vue"
import Home from "@/pages/Home.vue"
import DefaultLayout from "@/layouts/defaultLayout.vue";
// import * as path from "path";
import AuthLayout from "@/layouts/AuthLayout.vue";

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'Home',
      meta:{auth: true},
      component:DefaultLayout,
      children:[
          {
            name:'List',
            path: '',
            component: Home
          }
      ]
    },
    {
      path: "/login",
      name: 'Login',
      meta:{auth: false},
      component: AuthLayout,
      children:[
        {
          name:'Auth',
          path: '',
          component: Login
        }
      ]
    },
  ]
})

router.beforeEach((to, from, next)=>{
  const auth: Auth = getAuth();
  const currentUser = auth.currentUser;
  const requireAuth = to.matched.some(record => record.meta.auth);
  if (requireAuth && !currentUser && (to.path !== '/login')) {
    return  next('/login')
  }
  return next()

})

export default router
