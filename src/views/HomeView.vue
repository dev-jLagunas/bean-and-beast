<script setup>
// Components
import TheHero from '@/components/TheHero.vue'
import SectionTitle from '@/components/reusable/SectionTitle.vue'
import HomeFeatured from '@/components/home/HomeFeatured.vue'
import SeeProductsBtn from '@/components/reusable/SeeProductsBtn.vue'
import HomeLore from '@/components/home/HomeLore.vue'
import HomeMerch from '@/components/home/HomeMerch.vue'

// Images
import cowPeaking from '@/assets/images/section-peek-cow.png'
import penguinPeaking from '@/assets/images/section-peek-penguin.png'
import lemurPeaking from '@/assets/images/section-peek-lemur.png'
</script>

<template>
  <TheHero />
  <SectionTitle
    title="featured"
    description="Discover our most popular items. There is something for everyone. Personal or as a gift items available!"
    :img="cowPeaking"
    customClass="mt-32 mb-8"
  />
  <HomeFeatured />
  <SeeProductsBtn />
  <SectionTitle
    title="still not convinced?"
    description="Let us take you a bit deeper into the wild heart of our chocolate and the beasts behind all of them."
    :img="penguinPeaking"
        customClass="mt-32 mb-8"

  />
  <HomeLore />
  <SeeProductsBtn />
  <SectionTitle
    title="Merchandise you say?"
    description="Yup! we’ve got some pretty cool gear. Check back monthly for new stuff or let us know if you have something special in mind!"
    :img="lemurPeaking"
        customClass="mt-32"

  />
  <HomeMerch />
  <SeeProductsBtn />
</template>

<style scoped></style>
