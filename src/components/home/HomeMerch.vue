<script setup>
import { useProductStore } from '@/stores/productStore'
import { computed } from 'vue'
import SeeDetailsBtn from '../reusable/SeeDetailsBtn.vue'

// pinia store
const store = useProductStore()
const merchandise = computed(() => store.merchandise)
</script>

<template>
  <section class="home-merch-section-wrapper">
    <article v-for="merch in merchandise" :key="merch.id" class="mt-8">
      <figure class="w-32 -ml-2">
        <img :src="merch.storeLogo" alt="merchandise logo" class="img-full" />
      </figure>
      <div class="flex-between-center">
        <h3 class="fredo-title">{{ merch.name }}</h3>
        <p class="font-price">${{ merch.price.toFixed(2) }}</p>
      </div>
      <p class="font-main-copy">{{ merch.description }}</p>
      <figure>
        <figcaption>
          <ul class="my-2 flex-between-center md:my-4">
            <li class="font-small-copy flex flex-col">
              <i class="fa-solid fa-check text-dark-main"></i>{{ merch.itemDetails[0] }}
            </li>
            <li class="font-small-copy flex flex-col">
              <i class="fa-solid fa-check"></i>{{ merch.itemDetails[0] }}
            </li>
          </ul>
        </figcaption>
        <img :src="merch.images[0]" alt="merchandise image" />
      </figure>
      <div class="two-btn-wrapper">
        <SeeDetailsBtn :productId="merch.id" />
        <button class="black-btn">Add to Cart</button>
      </div>
    </article>
  </section>
</template>

<style scoped></style>
