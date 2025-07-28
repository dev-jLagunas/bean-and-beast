<script setup>
defineEmits(['back', 'next'])
</script>

<template>
  <section>
    <h2 class="fredo-title mb-6 text-center">Credit Card Info</h2>

    <form class="space-y-4">
      <input placeholder="Name on Card" class="input w-full" />
      <input placeholder="Card Number" class="input w-full" />

      <div class="grid grid-cols-3 gap-4">
        <input placeholder="Month" class="input" />
        <input placeholder="Year" class="input" />
        <input placeholder="CVC" class="input" />
      </div>

      <p class="text-sm text-main-dark mt-4">
        Please note once you hit finish your card will be charged the amount of <strong>$49.50</strong>.
      </p>

      <div class="flex justify-between mt-6">
        <button type="button" class="white-btn" @click="$emit('back')">Back</button>
        <button type="button" class="black-btn" @click="$emit('next')">Finish</button>
      </div>
    </form>
  </section>
</template>
