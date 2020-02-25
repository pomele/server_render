import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Link from '../components/Link.vue'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/helloworld',
        name: 'helloworld',
        component: HelloWorld
      },
      {
        path: '/link',
        name: 'link',
        component: Link
      },
      {
        path: '/',
        redirect: '/helloworld'
      }
    ]
  })
}
