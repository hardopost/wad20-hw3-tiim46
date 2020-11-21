import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue' //impordib login komponendi ja allpool routes all saab path-i ja name-i anda
import MainPage from '../views/MainPage.vue'
import BrowsePage from '../views/BrowsePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/main-page',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/browse-page',
    name: 'BrowsePage',
    component: BrowsePage
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
