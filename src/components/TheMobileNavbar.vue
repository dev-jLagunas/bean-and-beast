<script setup></script>

<template>
  <nav class="footer-nav">
    <ul class="footer-nav-wrapper flex-evenly-center">
      <li>
        <router-link to="/products" aria-label="Products">
          <i class="fas fa-store footer-icon"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/about" aria-label="About">
          <i class="fas fa-book footer-icon"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/" aria-label="Home">
          <i class="fas fa-home footer-icon"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/guide" aria-label="Guide">
          <i class="fas fa-info-circle footer-icon"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/cart" aria-label="Cart">
          <i class="fas fa-shopping-cart footer-icon"></i>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
