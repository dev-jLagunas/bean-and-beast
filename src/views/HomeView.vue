<script setup>
// Components
import TheHero from '@/components/TheHero.vue'
import SectionTitle from '@/components/reusable/SectionTitle.vue'
import HomeFeatured from '@/components/home/HomeFeatured.vue'
import SeeProductsBtn from '@/components/reusable/SeeProductsBtn.vue'
import HomeLore from '@/components/home/HomeLore.vue'
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
    description="Let us take you a bit deeper into the wild heart of our chocolate and the beasts behind all of them."
  />
  <HomeLore />
  <SeeProductsBtn />

  <SectionTitle
    title="Merchandise you say?"
    description="Yup! we’ve got some pretty cool gear. Check back monthly for new stuff or let us know if you have something special in mind!"
  />
</template>

<style scoped></style>
