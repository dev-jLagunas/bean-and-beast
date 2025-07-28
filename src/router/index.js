import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('@/views/CartView.vue'),
    },
    {
      path: '/guide',
      name: 'Guide',
      component: () => import('@/views/GuideView.vue'),
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('@/views/ProductsView.vue'),
    },
    {
      path: '/products/:id',
      name: 'Product Details',
      component: () => import('@/views/ProductsDetailsView.vue'),
    },
    {
      path: '/story/:id',
      name: 'Story Details',
      component: () => import('@/views/StoryDetailsView.vue'),
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    // 1. Restore scroll on back/forward
    if (savedPosition) return savedPosition

    // 2. Scroll to anchor/hash if defined (e.g., #case-studies)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    // 3. Default: always scroll to top
    return { top: 0 }
  },
})

export default router
