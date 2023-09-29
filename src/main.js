import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
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
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound
      }
  ]
  })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
