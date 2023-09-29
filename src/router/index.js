import { createRouter, createWebHistory } from 'vue-router'
import CeoView from "../views/CeoView.vue"
import LoginView from "../views/LoginView.vue"
import NpcView from "../views/NpcView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView
    },
    {
        path: "/company",
        name: "company",
        component: CeoView
    },
    
    {
        path: "/user",
        name: "user",
        component: NpcView
    },
    {
      // path: "*",
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: PageNotFound,
      meta: {
        requiresAuth: false
      }
    }
]
})

export default router
