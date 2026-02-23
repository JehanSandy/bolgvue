import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// #1 membuat singgle show artikel
import showPost from '../views/posts/show.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // #2menambahkan routernya untuk halaman singgle show, menggunakan parameter id untuk mengambil data post yang di klik dan props true untuk mengirimkan parameter id ke component showPost.vue
    {
      path: '/show_posts/:id',
      name: 'Show',
      component: showPost,
      props: true
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
