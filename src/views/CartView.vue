<script setup>
// Components
import SectionTitle from '@/components/reusable/SectionTitle.vue'

// Images
import lemurPeeking from '@/assets/images/section-peek-lemur.png'
</script>

<template>
  <SectionTitle
    title="Here is your cart."
    description="Ready to buy?"
    :img="lemurPeeking"
    custom-class="mt-20"
  />
  <div class="two-btn-wrapper mx-auto">
    <button class="white-btn">Order History</button>
    <button class="black-btn">Zip Code: 92021</button>
  </div>
</template>

<style scoped></style>
