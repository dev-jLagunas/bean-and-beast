<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/cartStore'

defineProps({
  cartItems: Array,
})

const emit = defineEmits(['next'])

const cartStore = useCartStore()

// Example fixed shipping/tax values
const shipping = 5.0
const tax = 6.5

const subtotal = computed(() =>
  cartStore.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
)
const grandTotal = computed(() => subtotal.value + shipping + tax)
</script>

<template>
  <section>
    <h3 class="fredo-title">Order Details</h3>
    <div class="flex-between-center">
      <p class="font-small-copy mb-2">Product</p>
      <p class="font-small-copy">Total</p>
    </div>
    <div class="space-y-4">
      <article v-for="item in cartItems" :key="item.id" class="flex gap-4 items-start">
        <figure>
          <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded" />
          <p class="font-small-copy text-sm mt-1">${{ item.price.toFixed(2) }} / each</p>
        </figure>
        <div class="flex-1">
          <h3 class="fredo-title">{{ item.name }}</h3>
          <p class="font-main-copy">Description: {{ item.description || '—' }}</p>
          <div class="flex-between-center">
          <p class="font-small-copy">QTY: {{ item.quantity }}</p>
           <p class="font-bold whitespace-nowrap">${{ (item.price * item.quantity).toFixed(2) }}</p>
          </div>
        </div>

      </article>
    </div>

    <!-- Promo Code -->
    <div class="my-4 flex gap-2 items-center">
      <input type="text" placeholder="Have a promo code?" class="input flex-1" />
      <button class="black-btn">Apply</button>
    </div>

    <div class="border-b border-dark-main mb-2">
      <h3 class="fredo-title">Checkout</h3>
      <p class="font-small-copy">Summary</p>
    </div>

    <!-- Summary -->
    <div class="text-right space-y-2 mb-6  font-main-copy">
      <p>Subtotal: ${{ subtotal.toFixed(2) }}</p>
      <p>Shipping: ${{ shipping.toFixed(2) }}</p>
      <p class="border-b-4 border-double border-dark-main/50 pb-2">Sales Tax: ${{ tax.toFixed(2) }}</p>
      <p class="font-bold">Grand Total: ${{ grandTotal.toFixed(2) }}</p>
    </div>

    <button class="black-btn w-full" @click="emit('next')">Checkout</button>
  </section>
</template>
