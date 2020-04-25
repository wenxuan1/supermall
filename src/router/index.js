import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Cate = () => import('../views/category/Cate')
const Shop = () => import('../views/shop/Shop')
const Profile = () => import('../views/profile/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cate',
    component: Cate
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
