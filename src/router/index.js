import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/login/Login.vue'
import controller from '@/views/home/SystemConsole.vue'
import BankList from '@/views/member/BankList.vue'
import CollectionCode from '@/views/member/CollectionCode.vue'
import Internet from '@/views/member/Internet.vue'
import List from '@/views/member/List.vue'
import Log from '@/views/member/Log.vue'
import MessageList from '@/views/member/MessageList.vue'
import Tree from '@/views/member/Tree.vue'
import realName from '@/views/realName/List.vue'
import BuyList from '@/views/character/BuyList.vue'
import CharacterList from '@/views/character/List.vue'
import CharacterMemberList from '@/views/character/MemberList.vue'
import AdInfo from '@/views/param/AdInfo.vue'
import Base from '@/views/param/Base.vue'
import Income from '@/views/param/Income.vue'
import LoginParams from '@/views/param/LoginParams.vue'
import PayParams from '@/views/param/PayParams.vue'
import PosterInfo from '@/views/param/PosterInfo.vue'
import RegisterParams from '@/views/param/RegisterParams.vue'
import SafeParams from '@/views/param/SafeParams.vue'
import SmsParams from '@/views/param/SmsParams.vue'
import Level from '@/views/vip/Level.vue'
import VipLog from '@/views/vip/Log.vue'
import BLog from '@/views/bonus/Log.vue'
import BParams from '@/views/bonus/Params.vue'
import Help from '@/views/company/Help.vue'
import Helps from '@/views/company/Helps.vue'
import News from '@/views/company/News.vue'
import Newtype from '@/views/company/Newtype.vue'
import Notic from '@/views/company/Notic.vue'
import Page from '@/views/company/Page.vue'
import Balance from '@/views/assets/Balance.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/controller',
    children: [
      { path: '/home/controller', name: 'controller', component: controller },
      { path: '/member/bank', name: 'BankList', component: BankList },
      { path: '/member/code', name: 'CollectionCode', component: CollectionCode },
      { path: '/member/net', name: 'Internet', component: Internet },
      { path: '/member/list', name: 'List', component: List },
      { path: '/member/log', name: 'Log', component: Log },
      { path: '/member/message', name: 'MessageList', component: MessageList },
      { path: '/member/tree', name: 'Tree', component: Tree },
      { path: '/man/real', name: 'realName', component: realName },
      { path: '/character/memberbuylist', name: 'BuyList', component: BuyList },
      { path: '/man/list', name: 'CharacterList', component: CharacterList },
      { path: '/character/memberlist', name: 'CharacterMemberList', component: CharacterMemberList },
      { path: '/param/ad', name: 'AdInfo', component: AdInfo },
      { path: '/param/base', name: 'Base', component: Base },
      { path: '/param/income', name: 'Income', component: Income },
      { path: '/param/login', name: 'LoginParams', component: LoginParams },
      { path: '/param/pay', name: 'PayParams', component: PayParams },
      { path: '/param/poster', name: 'PosterInfo', component: PosterInfo },
      { path: '/param/register', name: 'RegisterParams', component: RegisterParams },
      { path: '/param/safe', name: 'SafeParams', component: SafeParams },
      { path: '/param/note', name: 'SmsParams', component: SmsParams },
      { path: '/vip/level', name: 'Level', component: Level },
      { path: '/vip/log', name: 'VipLog', component: VipLog },
      { path: '/bonus/log', name: 'BLog', component: BLog },
      { path: '/bonus/param', name: 'BParams', component: BParams },
      { path: '/company/help', name: 'Help', component: Help },
      { path: '/company/helps', name: 'Helps', component: Helps },
      { path: '/company/news', name: 'News', component: News },
      { path: '/company/newtype', name: 'Newtype', component: Newtype },
      { path: '/company/notic', name: 'Notic', component: Notic },
      { path: '/company/page', name: 'Page', component: Page },
      { path: '/assets/balance', name: 'Balance', component: Balance }
    ]
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
// 获取原型对象上的push函数(下面两行代码为了防止路由重复报错)
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
