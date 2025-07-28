<script setup>
defineEmits(['reset'])
import zebraArt from '@/assets/images/zebra-art.jpg'
</script>

<template>
  <section class="text-center max-w-md mx-auto">
    <h2 class="fredo-title mb-6">Thank You!</h2>
    <img :src="zebraArt" alt="bean and beast artwork" class="h-96 mx-auto mb-4" />
    <p class="font-main-copy mb-4">
      Your order has been received. We hope you enjoy your chocolate and visit us again soon.
    </p>
    <button class="black-btn mt-4" @click="$emit('reset')">Return to Shop</button>
  </section>
</template>
