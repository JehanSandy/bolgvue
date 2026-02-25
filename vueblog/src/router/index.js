import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


import showPost from '../views/posts/show.vue'
import CreatePost from '../views/posts/CreatePost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/show_posts/:id',
      name: 'Show',
      component: showPost,
      props: true
    },
    {
      path: '/post/create',
      name: 'CreatePost',
      component: CreatePost
    }
    // {
    //   path: '/about',
    //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
