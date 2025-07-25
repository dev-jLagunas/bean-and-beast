<script setup>
// Components
import TheHero from '@/components/TheHero.vue'
import SectionTitle from '@/components/reusable/SectionTitle.vue'
import HomeFeatured from '@/components/home/HomeFeatured.vue'
import SeeProductsBtn from '@/components/reusable/SeeProductsBtn.vue'
</script>

<template>
  <TheHero />
  <SectionTitle
    title="featured"
    description="Discover our most popular items. There is something for everyone. Personal or as a gift items available!"
  />
  <HomeFeatured />
  <SeeProductsBtn />
  <SectionTitle
    title="still not convinced?"
    description="Let us take you a bit deeper into the wild heart of our chocolate and the beasts behind some of them."
  />

</template>

<style scoped></style>
