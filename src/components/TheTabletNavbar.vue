<script setup>
import { useRoute } from 'vue-router'

// Images
import flatLogo from '@/assets/images/mobile/flat-logo.svg'

// Router
const route = useRoute()
</script>

<template>
  <nav class="tablet-nav inline-reg lg-max-width">
    <figure>
      <img :src="flatLogo" alt="" />
    </figure>
    <ul class="tablet-nav-wrapper flex-evenly-center fredo-p-light ">
      <li class="tablet-nav-item">
        <router-link to="/products" aria-label="Products">
          <i
            class="fas fa-store tablet-icon"
            :class="{ 'text-zebra-red': route.path === '/products' }"
          ></i>
          <p>Products</p>
        </router-link>
      </li>
      <li class="tablet-nav-item">
        <router-link to="/about" aria-label="About">
          <i
            class="fas fa-book tablet-icon"
            :class="{ 'text-zebra-red': route.path === '/about' }"
          ></i>
          <p>About</p>
        </router-link>
      </li>
      <li class="tablet-nav-item">
        <router-link to="/" aria-label="Home">
          <i class="fas fa-home tablet-icon" :class="{ 'text-zebra-red': route.path === '/' }"></i>
          <p>Home</p>
        </router-link>
      </li>
      <li class="tablet-nav-item">
        <router-link to="/guide" aria-label="Guide">
          <i
            class="fas fa-info-circle tablet-icon"
            :class="{ 'text-zebra-red': route.path === '/guide' }"
          ></i>
          <p>Guide</p>
        </router-link>
      </li>
      <li class="tablet-nav-item">
        <router-link to="/cart" aria-label="Cart">
          <i
            class="fas fa-shopping-cart tablet-icon"
            :class="{ 'text-zebra-red': route.path === '/cart' }"
          ></i>
          <p>Cart</p>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
