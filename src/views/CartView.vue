<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cartStore'

// Step components
import FormStep1 from '@/components/cart/FormStep1.vue'
import FormStep2 from '@/components/cart/FormStep2.vue'
import FormStep3 from '@/components/cart/FormStep3.vue'
import FormStep4 from '@/components/cart/FormStep4.vue'

// UI Components
import SectionTitle from '@/components/reusable/SectionTitle.vue'

// Images
import lemurPeeking from '@/assets/images/section-peek-lemur.png'
import emptyCart from '@/assets/images/empty-cart.png'

// Step logic
const currentStep = ref(1)

function goToNextStep() {
  if (currentStep.value < 4) currentStep.value++
}

function goToPreviousStep() {
  if (currentStep.value > 1) currentStep.value--
}

function resetCartFlow() {
  currentStep.value = 1
}

// Step mapping
const getCurrentComponent = computed(() => {
  switch (currentStep.value) {
    case 1:
      return FormStep1
    case 2:
      return FormStep2
    case 3:
      return FormStep3
    case 4:
      return FormStep4
    default:
      return FormStep1
  }
})

// Cart store
const cartStore = useCartStore()
const cartItems = computed(() => cartStore.cartItems)
</script>

<template>
  <SectionTitle
    title="Here is your cart."
    description="Ready to buy?"
    :img="lemurPeeking"
    custom-class="mt-15 mb-2"
  />

  <div class="two-btn-wrapper mx-auto px-4">
    <button class="white-btn">Order History</button>
    <button class="black-btn">Zip code: 92021</button>
  </div>

  <section class="max-w-[600px] mx-auto px-4 py-8">
    <!-- Empty Cart State -->
    <div v-if="cartItems.length === 0" class="text-center">
      <h2 class="fredo-title">Looks like your cart is empty!</h2>
      <img :src="emptyCart" alt="empty cart image" class="mx-auto h-96" />
      <RouterLink to="/" class="black-btn">Back to Products</RouterLink>
    </div>

    <!-- Multi-Step Checkout -->
    <div v-else>
      <component
        :is="getCurrentComponent"
        :cartItems="cartItems"
        @next="goToNextStep"
        @back="goToPreviousStep"
        @reset="resetCartFlow"
      />
    </div>
  </section>
</template>

<style scoped></style>
