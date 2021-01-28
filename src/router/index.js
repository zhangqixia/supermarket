import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/Home/Home.vue')
const Cart = () => import('views/Cart/Cart.vue')
const Category = () => import('views/Category/Category.vue')
const Profile = () => import('views/Profile/Profile.vue')
const Detail = () => import('views/Detail/Detail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',//匹配没有注册的路由
    redirect: '/home'//重定向指向home页面
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
