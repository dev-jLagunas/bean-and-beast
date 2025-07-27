<script setup>
import { computed, ref } from 'vue'
import { useProductStore } from '@/stores/productStore'

// Reactive
const selectedCategory = ref('all')

// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

// Store
const productsStore = useProductStore()

// Components
import SectionTitle from '@/components/reusable/SectionTitle.vue'

// Images
import peekPenguin from '@/assets/images/section-peek-penguin.png'
import squareColor from '@/assets/images/square-logo-reg.svg'

// categories
const setProducts = computed(() => productsStore.products.filter((p) => p.category === 'set'))
const singleProducts = computed(() => productsStore.products.filter((p) => p.category === 'single'))
const merchProducts = computed(() =>
  productsStore.merchandise.filter((p) => p.category === 'merch'),
)

function seeDetails(id) {
  console.log('See details for', id)
}
function addToCart(product) {
  console.log('Add to cart', product.name)
}
</script>

<template>
  <SectionTitle
    title="product line-up"
    description="You may also filter by category for quick access!"
    :img="peekPenguin"
    customClass="mt-8 mb-8 -z-1"
  />
  <div class="flex-center-center product-filter-btn-wrapper">
    <button
      class="black-btn w-20"
      :class="{ '!text-[#ff5555]': selectedCategory === 'all' }"
      @click="selectedCategory = 'all'"
    >
      All
    </button>
    <button
      class="black-btn w-20"
      :class="{ '!text-[#ff5555]': selectedCategory === 'set' }"
      @click="selectedCategory = 'set'"
    >
      Sets
    </button>
    <button
      class="black-btn w-20"
      :class="{ '!text-[#ff5555]': selectedCategory === 'single' }"
      @click="selectedCategory = 'single'"
    >
      Singles
    </button>
    <button
      class="black-btn w-20"
      :class="{ '!text-[#ff5555]': selectedCategory === 'merch' }"
      @click="selectedCategory = 'merch'"
    >
      Merch
    </button>
  </div>
  <section v-if="selectedCategory === 'all' || selectedCategory === 'set'" class="text-main-dark">
    <header class="product-section-wrapper">
      <h3 class="font-section-title">Chocolate Sets</h3>
      <p class="font-main-copy pb-2">Perfect for gifts or if you're just really hungry!</p>
    </header>
    <div class="product-items-display-wrapper">
      <article v-for="product in setProducts" :key="product.id" class="my-12 md:px-4">
        <div class="flex-between-center px-4 md:px-0">
          <h3 class="fredo-title">{{ product.name }}</h3>
          <p class="font-price">${{ product.price.toFixed(2) }}</p>
        </div>

        <p class="font-main-copy px-4 md:px-0">{{ product.description }}</p>
        <Swiper
          :loop="true"
          :autoplay="{ delay: 4000, disableOnInteraction: false }"
          :modules="[Autoplay]"
          class="my-4"
        >
          <SwiperSlide v-for="(img, i) in product.images" :key="i">
            <img
              :src="img"
              :alt="`${product.name} image ${i + 1}`"
              class="w-full max-h-[300px] object-cover"
            />
          </SwiperSlide>
        </Swiper>

        <div class="two-btn-wrapper">
          <button class="white-btn" @click="seeDetails(product.id)">See Details</button>
          <button class="black-btn" @click="addToCart(product)">Add to Cart</button>
        </div>
      </article>
    </div>
  </section>
  <img
    :src="squareColor"
    alt="square logo"
    class="img-product-seperator"
    v-if="selectedCategory === 'all'"
  />
  <section class="mt-16" v-if="selectedCategory === 'all' || selectedCategory === 'single'">
    <header class="product-section-wrapper">
      <h3 class="font-section-title">Chocolate Singles</h3>
      <p class="font-main-copy pb-2">
        Need a quick fix and don't want to share? Grab any of your favorites!
      </p>
    </header>
    <div class="product-items-display-wrapper">
      <article v-for="product in singleProducts" :key="product.id" class="mt-4 md:px-4">
        <div class="flex-between-center px-4 md:px-0">
          <h3 class="fredo-title">{{ product.name }}</h3>
          <p class="font-price">${{ product.price.toFixed(2) }}</p>
        </div>

        <p class="font-main-copy px-4 md:px-0">{{ product.description }}</p>

        <Swiper
          :loop="true"
          :autoplay="{ delay: 4000, disableOnInteraction: false }"
          :modules="[Autoplay]"
          class="my-4"
        >
          <SwiperSlide v-for="(img, i) in product.images" :key="i">
            <img
              :src="img"
              :alt="`${product.name} image ${i + 1}`"
              class="w-full max-h-[300px] object-cover"
            />
          </SwiperSlide>
        </Swiper>

        <div class="two-btn-wrapper">
          <button class="white-btn" @click="seeDetails(product.id)">See Details</button>
          <button class="black-btn" @click="addToCart(product)">Add to Cart</button>
        </div>
      </article>
    </div>
  </section>
  <img
    :src="squareColor"
    alt="square logo"
    class="img-product-seperator"
    v-if="selectedCategory === 'all'"
  />
  <section v-if="selectedCategory === 'all' || selectedCategory === 'merch'">
    <header class="product-section-wrapper">
      <h3 class="font-section-title">Chocolate Sets</h3>
      <p class="font-main-copy pb-2">Perfect for gifts or if you're just really hungry!</p>
    </header>
    <div class="product-items-display-wrapper">
      <article v-for="product in merchProducts" :key="product.id" class="mt-4 md:px-4">
        <div class="flex-between-center px-4 md:px-0">
          <h3 class="fredo-title">{{ product.name }}</h3>
          <p class="font-price">${{ product.price.toFixed(2) }}</p>
        </div>

        <p class="font-main-copy px-4 md:px-0">{{ product.description }}</p>
        <Swiper
          :loop="true"
          :autoplay="{ delay: 4000, disableOnInteraction: false }"
          :modules="[Autoplay]"
          class="my-4 z-10"
        >
          <SwiperSlide v-for="(img, i) in product.images" :key="i">
            <img
              :src="img"
              :alt="`${product.name} image ${i + 1}`"
              class="w-full max-h-[300px] object-cover"
            />
          </SwiperSlide>
        </Swiper>

        <div class="two-btn-wrapper">
          <button class="white-btn" @click="seeDetails(product.id)">See Details</button>
          <button class="black-btn" @click="addToCart(product)">Add to Cart</button>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped></style>
