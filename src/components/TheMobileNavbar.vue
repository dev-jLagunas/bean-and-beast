<script setup>
import { useRoute } from 'vue-router'

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
      <li>
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
