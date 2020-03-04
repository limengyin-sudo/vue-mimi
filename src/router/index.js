import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinamaRouter from './cinema'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    movieRouter,
    mineRouter,
    cinamaRouter,
    {
      path:'*',
      redirect:'/movie'
    }
  ]
})

export default router
