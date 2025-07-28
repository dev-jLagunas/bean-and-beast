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
  <section class="">
    <form class="space-y-4 max-w-[600px] mx-auto">
      <section class="">
        <p class="font-small-copy border-b border-dark-main/50 mb-2">Name</p>
        <div class="flex mb-2 w-full">
          <label for="firstName" class="input-label">First Name</label>
          <input
            id="firstName"
            v-model="firstName"
            placeholder="e.g. John"
            class="w-3/4 bg-light-muted rounded-r-sm pl-2 md:w-5/6"
          />
        </div>
        <div class="flex mb-2 w-full">
          <label for="lastName" class="input-label">Last Name</label>
          <input
            id="lastName"
            v-model="lastName"
            placeholder="e.g. Smith"
            class="w-3/4 bg-light-muted rounded-r-sm pl-2 md:w-5/6"
          />
        </div>
      </section>
      <section class="font-small-copy text-main-dark flex-col-start">
        <p class="font-small-copy border-b border-dark-main/50 mb-2 w-full">Shipping Address</p>
        <!-- Address -->
        <div class="flex w-full">
          <label for="address" class="input-label">Address</label>
          <input
            id="address"
            v-model="address"
            placeholder="e.g. 123 Apple St"
            class="w-3/4 bg-light-muted rounded-r-sm pl-2 md:w-full"
          />
        </div>

        <!-- State + Zip -->
        <div class="grid grid-cols-2 gap-2 w-full">
          <div class="mt-2 flex">
            <label
              for="state"
              class="bg-dark-main text-light-main px-2 rounded-l-sm font-title tracking-wide"
              >State</label
            >
            <input
              id="state"
              v-model="state"
              class="bg-light-muted w-full rounded-r-sm pl-2"
              placeholder="e.g. California"
            />
          </div>
          <div class="mt-2 flex">
            <label for="zip" class="bg-dark-main text-light-main px-2 rounded-l-sm tracking-wide"
              >Zip</label
            >
            <input id="zip" v-model="zip" class="bg-light-muted w-full rounded-r-sm" />
          </div>
        </div>

        <!-- Email -->
        <div class="flex mt-2 w-full">
          <label
            for="email"
            class="bg-dark-main text-light-main font-title tracking-wide px-2 rounded-l-sm"
            >Email</label
          >
          <input
            id="email"
            v-model="email"
            class="input-container w-full"
            placeholder="e.g. john-smith@example.com"
          />
        </div>
        <div class="flex-col-start mt-4 border-t-4 border-t-dark-main/50 border-double w-full pt-4">
          <label
            ><input type="checkbox" v-model="billingSame" /> Billing same as shipping
            address?</label
          >
          <label
            ><input type="checkbox" v-model="createAccount" /> Make an account while at it?</label
          >
        </div>
      </section>

      <div class="flex justify-between mt-6">
        <button type="button" class="white-btn" @click="$emit('back')">Clear</button>
        <button type="button" class="black-btn" @click="$emit('next')">Next</button>
      </div>
    </form>
  </section>
</template>
