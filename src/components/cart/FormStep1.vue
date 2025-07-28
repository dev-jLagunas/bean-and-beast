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
    <h2 class="fredo-title mb-6 text-center">HERE IS YOUR CART</h2>

    <div class="flex justify-between items-center mb-4">
      <button class="white-btn">Order History</button>
      <span class="black-btn">Zip: 92021</span>
    </div>

    <div class="space-y-4 mb-6">
      <article v-for="item in cartItems" :key="item.id" class="flex gap-4 items-start">
        <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded" />
        <div class="flex-1">
          <h3 class="font-bold">{{ item.name }}</h3>
          <p class="text-sm text-gray-600">Description: {{ item.options?.description || '—' }}</p>
          <p class="text-sm text-gray-600">QTY: {{ item.quantity }}</p>
        </div>
        <p class="font-bold whitespace-nowrap">${{ (item.price * item.quantity).toFixed(2) }}</p>
      </article>
    </div>

    <!-- Promo Code -->
    <div class="mb-4 flex gap-2 items-center">
      <input type="text" placeholder="Have a promo code?" class="input flex-1" />
      <button class="black-btn">Apply</button>
    </div>

    <!-- Summary -->
    <div class="text-right space-y-1 mb-6">
      <p>Subtotal: ${{ subtotal.toFixed(2) }}</p>
      <p>Shipping: ${{ shipping.toFixed(2) }}</p>
      <p>Sales Tax: ${{ tax.toFixed(2) }}</p>
      <p class="font-bold">Grand Total: ${{ grandTotal.toFixed(2) }}</p>
    </div>

    <button class="black-btn w-full" @click="emit('next')">Checkout</button>
  </section>
</template>
