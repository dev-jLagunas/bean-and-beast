<script setup>
import { useProductStore } from '@/stores/productStore'
import { useStoryRedirect } from '@/composables/useStoryRedirect'
import { computed } from 'vue'

// Components
import SeeProductsBtn from '@/components/reusable/SeeProductsBtn.vue'
import SectionTitle from '@/components/reusable/SectionTitle.vue'

// Composable
const { goToStoryDetails } = useStoryRedirect()

// Images
import cowPeaking from '@/assets/images/section-peek-cow.png'

// pinia store
const store = useProductStore()
const animalLore = computed(() => store.animalLore)
</script>

<template>
  <SectionTitle
    title="What are we about?"
    description="Each of our animals comes with a story. A story to tell you who they are and what they represent. Learn more about them and through them learn more about who we are as a company."
    :img="cowPeaking"
    custom-class="mt-20"
  />
  <section
    class="grid grid-cols-2 gap-6 mx-4 mt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 max-w-[1400px] lg:mx-auto"
  >
    <article v-for="animal in animalLore" :key="animal.id" class="">
      <figure class="h-96 mb-20">
        <figcaption
          class="font-main-copy text-center border rounded-sm border-dark-main text-dark-main mb-2"
        >
          {{ animal.animalName }}
        </figcaption>
        <img :src="animal.images[1]" :alt="animal.animalName" class="img-cover rounded-sm" />
        <button class="black-btn w-full mt-2" @click="goToStoryDetails(animal.id)">
          See Story
        </button>
      </figure>
    </article>
  </section>
  <SeeProductsBtn />
</template>

<style scoped></style>
