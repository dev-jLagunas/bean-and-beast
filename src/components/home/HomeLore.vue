<script setup>
import { useProductStore } from '@/stores/productStore'
import { computed } from 'vue'

// pinia store
const store = useProductStore()
const animalLore = computed(() => store.animalLore)
</script>

<template>
  <section class="home-lore-section-wrapper">
    <article v-for="animal in animalLore" :key="animal.id" class="home-lore-card-wrapper">
      <figure class="col-span-2 h-full">
        <img :src="animal.images[0]" :alt="animal.animalName" class="img-cover" />
      </figure>
      <div class="col-span-3">
        <h3 class="fredo-title">{{ animal.animalName }}</h3>
        <p class="font-main-copy">{{ animal.shortLore }}</p>
        <div class="two-btn-wrapper">
          <button class="white-btn">See Story</button>
          <button class="black-btn">Add to Cart</button>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped></style>
