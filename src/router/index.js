import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//导入组件
import filmRouter from "@/router/routes/film.js"
import centerRouter from "./routes/center"
import cinemasRouter from "./routes/cinemas"


const routes = [
   filmRouter,
   centerRouter,
   cinemasRouter,
   {path:'/',redirect:"films"}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
