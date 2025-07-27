<script setup>
import { useProductRedirect } from '@/composables/useProductRedirect'

const { goToProductDetails } = useProductRedirect()

defineProps({
  productId: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button class="white-btn" @click="goToProductDetails(productId)">See Details</button>
</template>
