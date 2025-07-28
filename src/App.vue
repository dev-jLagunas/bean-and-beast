<script setup>
import { useCartStore } from './stores/cartStore'
const cartStore = useCartStore()

// Components
import TheMobileNavbar from './components/TheMobileNavbar.vue'
import TheTabletNavbar from './components/TheTabletNavbar.vue'
import CartModal from './components/reusable/CartModal.vue'
// Images
import flatLogo from '@/assets/images/mobile/flat-logo.svg'
</script>

<template>
  <!-- Mobile Logo -->
  <RouterLink to="/">
    <figure>
      <img
        :src="flatLogo"
        width="700"
        height="200"
        alt="Bean and Beast logo"
        class="w-full md:hidden"
      />
    </figure>
  </RouterLink>

  <!-- 768px + Nav -->
  <TheTabletNavbar />
  <main>
    <router-view v-slot="{ Component }">
      <transition name="page">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <!-- 768px - Nav -->
  <TheMobileNavbar />
  <CartModal v-if="cartStore.showCartModal" />
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
