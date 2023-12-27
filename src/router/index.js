import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Study01Test from '../views/Study01Test.vue'
import PostDetail from '../views/board/PostDetail.vue'
import PostEdit from '../views/board/PostEdit.vue'
import PostWrite from '../views/board/PostWrite.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/study01',
    name: 'study01',
    component: () => Study01Test
  },
  {
    path: '/study02',
    name: 'study02',
    component: () => import('../views/Study02Test.vue')
  },{
    path: '/study03',
    name: 'study03',
    component: () => import('../views/Study03Test.vue')
  },{
    path: '/study04',
    name: 'study04',
    component: () => import('../views/Study04Test.vue')
  },{
    path: '/board',
    name: 'board',
    component: () => import('../views/board/BoardList.vue')
  },{
    path: '/posts/:postId',
    name: 'detail',
    component: PostDetail,
    props: true
  },{
    path: '/posts/:postId/edit',
    name: 'edit',
    component: PostEdit,
    props: true
  },{
    path: '/posts/write',
    name: 'write',
    component: PostWrite,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
