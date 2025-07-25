<script setup>
// Components
import TheHero from '@/components/TheHero.vue'
import SectionTitle from '@/components/reusable/SectionTitle.vue'
import HomeFeatured from '@/components/home/HomeFeatured.vue'
</script>

<template>
  <TheHero />
  <SectionTitle
    title="featured"
    description="Discover our most popular items. There is something for everyone. Personal or as a gift items available!"
  />
  <HomeFeatured />
</template>

<style scoped></style>
