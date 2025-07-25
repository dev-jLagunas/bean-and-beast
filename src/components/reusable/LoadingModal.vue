<script setup>
defineProps({
  img: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="fixed inset-0 z-50 bg-white flex items-center justify-center">
    <img :src="img" alt="Loading..." class="w-full max-w-[600px]" />
    <p class="absolute bottom-0 right-0 font-title">coming right up!</p>
  </div>
</template>
