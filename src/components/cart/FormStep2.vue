<script setup>
import { ref } from 'vue'

defineEmits(['next', 'back'])

const firstName = ref('')
const lastName = ref('')
const address = ref('')
const state = ref('')
const zip = ref('')
const email = ref('')
const billingSame = ref(true)
const createAccount = ref(false)
</script>

<template>
  <section>
    <h2 class="fredo-title mb-6 text-center">Shipping Address</h2>

    <form class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <input v-model="firstName" placeholder="First Name" class="input" />
        <input v-model="lastName" placeholder="Last Name" class="input" />
      </div>
      <input v-model="address" placeholder="Address" class="input w-full" />
      <div class="grid grid-cols-3 gap-4">
        <input v-model="state" placeholder="State" class="input" />
        <input v-model="zip" placeholder="Zip" class="input" />
        <input v-model="email" placeholder="Email" class="input" />
      </div>

      <div class="space-y-2 text-sm text-main-dark">
        <label
          ><input type="checkbox" v-model="billingSame" /> Billing same as shipping address?</label
        >
        <label
          ><input type="checkbox" v-model="createAccount" /> Make an account while at it?</label
        >
      </div>

      <div class="flex justify-between mt-6">
        <button type="button" class="white-btn" @click="$emit('back')">Clear</button>
        <button type="button" class="black-btn" @click="$emit('next')">Next</button>
      </div>
    </form>
  </section>
</template>
