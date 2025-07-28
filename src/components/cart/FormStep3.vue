<script setup>
defineEmits(['back', 'next'])
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
          class="w-3/4 bg-light-muted rounded-r-sm pl-2 md:w-5/6"
        />
      </div>

      <!-- Card Number -->
      <div class="flex mb-2 w-full">
        <label for="cardNumber" class="input-label">Card Number</label>
        <input
          id="cardNumber"
          placeholder="1234 5678 9012 3456"
          class="w-3/4 bg-light-muted rounded-r-sm pl-2 md:w-5/6"
        />
      </div>

      <!-- Month -->
      <div class="flex mb-2 w-full">
        <label for="expMonth" class="input-label">Month</label>
        <input
          id="expMonth"
          placeholder="MM"
          class="w-3/4 bg-light-muted rounded-r-sm pl-2 md:w-5/6"
        />
      </div>

      <!-- Year -->
      <div class="flex mb-2 w-full">
        <label for="expYear" class="input-label">Year</label>
        <input
          id="expYear"
          placeholder="YYYY"
          class="w-3/4 bg-light-muted rounded-r-sm pl-2 md:w-5/6"
        />
      </div>

      <!-- CVC -->
      <div class="flex mb-2 w-full">
        <label for="cvc" class="input-label">CVC</label>
        <input id="cvc" placeholder="123" class="w-3/4 bg-light-muted rounded-r-sm pl-2 md:w-5/6" />
      </div>

      <p class="font-main-copy text-dark-main mt-4 border-t-4 border-double border-t-dark-main/50 pt-2">
        Please note once you hit finish your card will be charged the amount of
        <strong>$49.50</strong>.
      </p>

      <div class="flex justify-between mt-6">
        <button type="button" class="white-btn" @click="$emit('back')">Back</button>
        <button type="button" class="black-btn" @click="$emit('next')">Finish</button>
      </div>
    </form>
  </section>
</template>
