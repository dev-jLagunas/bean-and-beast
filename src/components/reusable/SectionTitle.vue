<script setup>
// Props
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article class="section-wrapper flex-col-start">
    <h2 class="font-section-title">{{ title }}</h2>
    <p class="lato-p-light">{{ description }}</p>
  </article>
</template>

<style scoped></style>
