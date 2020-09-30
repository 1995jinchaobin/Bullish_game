import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/login/Login.vue'
import SystemConsole from '@/views/home/SystemConsole.vue'
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
import AdInfo from '@/views/website/AdInfo.vue'
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
    redirect: '/home/systemconsole',
    children: [
      { path: '/home/systemconsole', name: 'SystemConsole', component: SystemConsole },
      { path: '/member/banklist', name: 'BankList', component: BankList },
      { path: '/member/collectioncode', name: 'CollectionCode', component: CollectionCode },
      { path: '/member/internet', name: 'Internet', component: Internet },
      { path: '/member/list', name: 'List', component: List },
      { path: '/member/log', name: 'Log', component: Log },
      { path: '/member/messagelist', name: 'MessageList', component: MessageList },
      { path: '/member/tree', name: 'Tree', component: Tree },
      { path: '/realname/list', name: 'realName', component: realName },
      { path: '/character/memberbuylist', name: 'BuyList', component: BuyList },
      { path: '/character/list', name: 'CharacterList', component: CharacterList },
      { path: '/character/memberlist', name: 'CharacterMemberList', component: CharacterMemberList },
      { path: '/website/adinfo', name: 'AdInfo', component: AdInfo }
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

export default router
