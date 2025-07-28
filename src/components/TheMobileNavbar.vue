<script setup>
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
const cartStore = useCartStore()

// Router
const route = useRoute()
</script>

<template>
  <nav class="footer-nav">
    <ul class="footer-nav-wrapper flex-evenly-center">
      <li>
        <router-link to="/products" aria-label="Products">
          <i
            class="fas fa-store footer-icon"
            :class="{ 'text-zebra-red': route.path === '/products' }"
          ></i>
        </router-link>
      </li>
      <li>
        <router-link to="/about" aria-label="About">
          <i
            class="fas fa-book footer-icon"
            :class="{ 'text-zebra-red': route.path === '/about' }"
          ></i>
        </router-link>
      </li>
      <li>
        <router-link to="/" aria-label="Home">
          <i class="fas fa-home footer-icon" :class="{ 'text-zebra-red': route.path === '/' }"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/guide" aria-label="Guide">
          <i
            class="fas fa-info-circle footer-icon"
            :class="{ 'text-zebra-red': route.path === '/guide' }"
          ></i>
        </router-link>
      </li>
      <li class="relative">
        <span
          v-if="cartStore.totalItems > 0"
          class="absolute -top-5 -right-4 bg-accent text-zebra-red text-2xl font-bold px-2 py-0.5 rounded-full"
        >
          {{ cartStore.totalItems }}
        </span>
        <router-link to="/cart" aria-label="Cart">
          <i
            class="fas fa-shopping-cart footer-icon"
            :class="{ 'text-zebra-red': route.path === '/cart' }"
          ></i>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
