import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/page/HelloWorld'
import Choice from '@/page/Choice'
import Search from '@/page/Search'
import Classify from '@/page/Classify'
import User from '@/page/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: '首页',
      component: HelloWorld
    },
    {
      path: '/choice',
      name: '精选',
      component: Choice
    },
    {
      path: '/search',
      name: '搜索',
      component: Search
    },
    {
      path: '/classify',
      name: '分类',
      component: Classify
    },
    {
      path: '/user',
      name: '个人',
      component: User
    }
  ]
})
