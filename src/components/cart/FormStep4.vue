<script setup>
defineEmits(['reset'])
</script>

<template>
  <section class="text-center max-w-md mx-auto">
    <h2 class="fredo-title mb-6">Thank You!</h2>
    <p class="font-main-copy mb-4">
      Your order has been received. We hope you enjoy your chocolate and visit us again soon.
    </p>
    <button class="black-btn mt-4" @click="$emit('reset')">Return to Shop</button>
  </section>
</template>
