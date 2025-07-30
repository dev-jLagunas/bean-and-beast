<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/cartStore'

// cart store
const cartStore = useCartStore()

// emits
defineEmits(['back', 'next'])

const shipping = 5.0
const tax = 6.5

const subtotal = computed(() =>
  cartStore.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
)

const grandTotal = computed(() => subtotal.value + shipping + tax)
</script>

<template>
  <section>
    <h2 class="font-small-copy border-b border-dark-main/50 mb-4">Credit Card Info</h2>

    <form class="space-y-4">
      <!-- Name on Card -->
      <div class="flex mb-2 w-full">
        <label for="cardName" class="input-label">Name on Card</label>
        <input
          id="cardName"
          placeholder="e.g. John Doe"
          required
          class="w-3/4 bg-light-muted rounded-r-sm pl-2 md:w-5/6"
        />
      </div>

      <!-- Card Number -->
      <div class="flex mb-2 w-full">
        <label for="cardNumber" class="input-label">Card Number</label>
        <input
          id="cardNumber"
          required
          placeholder="1234 5678 9012 3456"
          class="w-3/4 bg-light-muted rounded-r-sm pl-2 md:w-5/6"
        />
      </div>

      <!-- Month -->
      <div class="flex mb-2 w-full">
        <label for="expMonth" class="input-label">Month</label>
        <input
          id="expMonth"
          required
          placeholder="MM"
          class="w-3/4 bg-light-muted rounded-r-sm pl-2 md:w-5/6"
        />
      </div>

      <!-- Year -->
      <div class="flex mb-2 w-full">
        <label for="expYear" class="input-label">Year</label>
        <input
          id="expYear"
          required
          placeholder="YYYY"
          class="w-3/4 bg-light-muted rounded-r-sm pl-2 md:w-5/6"
        />
      </div>

      <!-- CVC -->
      <div class="flex mb-2 w-full">
        <label for="cvc" class="input-label">CVC</label>

        <input
          id="cvc"
          required
          placeholder="123"
          class="w-3/4 bg-light-muted rounded-r-sm pl-2 md:w-5/6"
        />
      </div>

      <p
        class="font-main-copy text-dark-main mt-4 border-t-4 border-double border-t-dark-main/50 pt-2"
      >
        Please note once you hit finish your card will be charged the amount of
        <strong>${{ grandTotal.toFixed(2) }}</strong
        >.
      </p>

      <div class="flex justify-between mt-6">
        <button type="button" class="white-btn" @click="$emit('back')">Back</button>
        <button type="button" class="black-btn" @click="$emit('next')">Finish</button>
      </div>
    </form>
  </section>
</template>
