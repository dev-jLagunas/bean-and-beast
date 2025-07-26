<script setup>
import { ref, nextTick } from 'vue'
import { useProductStore } from '@/stores/productStore'

//components
import SectionTitle from '@/components/reusable/SectionTitle.vue'
import SeeProductsBtn from '@/components/reusable/SeeProductsBtn.vue'
import LoadingModal from '@/components/reusable/LoadingModal.vue'
// Pinia Store
const productsStore = useProductStore()

// Reactive
const currentIndex = ref(0)
const userAnswers = ref([])
const showResults = ref(false)
const topProducts = ref([])

// Images
import pandaPeaking from '@/assets/images/section-peek-panda.png'
import penguinLogo from '@/assets/images/penguin-logo-reg.webp'
import lemurLogo from '@/assets/images/lemur-logo-reg.webp'
import cowLogo from '@/assets/images/cow-logo-reg.webp'
import zebraLogo from '@/assets/images/zebra-logo-reg.webp'
import pandaLogo from '@/assets/images/panda-logo-reg.webp'
import chocoLogo from '@/assets/images/choco-logo.png'
import loadingLogo from '@/assets/images/loading-logo.png'
import squareLogo from '@/assets/images/square-logo-reg.svg'
import zebraPeaking from '@/assets/images/section-peek-zebra.png'

// Reactive
const isLoading = ref(false)

// Quiz Data
const quizCardContent = [
  {
    questioNumb: 'Question 1',
    characterLogo: penguinLogo,
    quote: 'Happen to have any fish on you?',
    question: 'Do you prefer light or dark chocolate?',
    options: [
      { label: 'Light', tag: 'light', btnClass: 'white-btn' },
      { label: 'Dark', tag: 'dark', btnClass: 'black-btn' },
    ],
    themeClass: 'bg-penguin-blue',
  },
  {
    questioNumb: 'Question 2',
    characterLogo: lemurLogo,
    quote: "I'm bald but with a sweet beard.",
    question: 'Which mood best matches you today?',
    options: [
      { label: 'Chill', tag: 'chill', btnClass: 'white-btn' },
      { label: 'Bold', tag: 'bold', btnClass: 'black-btn' },
    ],
    themeClass: 'bg-lemur-orange',
  },
  {
    questioNumb: 'Question 3',
    characterLogo: cowLogo,
    quote: 'I make the milk.',
    question: 'Pick a flavor profile you lean toward?',
    options: [
      { label: 'Nutty', tag: 'nutty', btnClass: 'white-btn' },
      { label: 'Fruity', tag: 'fruity', btnClass: 'black-btn' },
    ],
    themeClass: 'bg-cow-red',
  },
  {
    questioNumb: 'Question 4',
    characterLogo: zebraLogo,
    quote: 'Have you seen my stripes?',
    question: 'Are you more drawn to playful packaging or elegant simplicity?',
    options: [
      { label: 'Playful', tag: 'playful', btnClass: 'white-btn' },
      { label: 'Elegance', tag: 'elegant', btnClass: 'black-btn' },
    ],
    themeClass: 'bg-zebra-cyan',
  },
  {
    questioNumb: 'Question 5',
    characterLogo: pandaLogo,
    quote: "I'm a fan of bamboo.",
    question: 'Who is this chocolate for?',
    options: [
      { label: 'Myself', tag: 'myself', btnClass: 'white-btn' },
      { label: 'Others', tag: 'others', btnClass: 'black-btn' },
    ],
    themeClass: 'bg-panda-orange',
  },
]

// Quiz logic
function selectOption(tag) {
  userAnswers.value.push(tag)

  if (currentIndex.value < quizCardContent.length - 1) {
    currentIndex.value++
  } else {
    isLoading.value = true

    // simulate loading (e.g., 1.5s), then show results
    setTimeout(() => {
      generateRecommendations()
      isLoading.value = false
      showResults.value = true

      // Scroll to results
      nextTick(() => {
        const resultEl = document.getElementById('quiz-results')
        resultEl?.scrollIntoView({ behavior: 'smooth' })
      })
    }, 1500)
  }
}

function generateRecommendations() {
  const products = productsStore.products

  const scored = products.map((product) => {
    const matches = product.tags.filter((tag) => userAnswers.value.includes(tag)).length
    return { ...product, score: matches }
  })

  topProducts.value = scored.sort((a, b) => b.score - a.score).slice(0, 3)
}

// Set Data
const fourBarSet = productsStore.products.find((p) => p.id === 'four-bar-set')
const sixBarSet = productsStore.products.find((p) => p.id === 'six-bar-set')
</script>

<template>
  <LoadingModal v-if="isLoading" :img="loadingLogo" />
  <SectionTitle
    title="Let us help you choose."
    description="Answer 5 quick questions and we'll recommend the top 3 chocolates most likely to match your taste and vibe."
    :img="pandaPeaking"
    customClass="mt-8"
  />
  <section
    v-if="currentIndex < quizCardContent.length"
    class="guide-main-wrapper"
    :class="['quiz-question', quizCardContent[currentIndex].themeClass]"
  >
    <img :src="squareLogo" alt="square bean and beast logo" class="img-special" />
    <div class="w-fit flex-start-center">
      <img
        :src="quizCardContent[currentIndex].characterLogo"
        alt="character logo"
        class="h-24 mb-4"
      />
      <p class="font-main-copy italic">“{{ quizCardContent[currentIndex].quote }}”</p>
    </div>
    <h3 class="fredo-title">{{ quizCardContent[currentIndex].questioNumb }}</h3>
    <h2 class="font-question-card">{{ quizCardContent[currentIndex].question }}</h2>
    <div class="two-btn-wrapper">
      <button
        v-for="option in quizCardContent[currentIndex].options"
        :key="option.tag"
        :class="option.btnClass"
        class="mt-8"
        @click="selectOption(option.tag)"
      >
        {{ option.label }}
      </button>
    </div>
  </section>
  <div class="guide-info-wrapper">
    <img :src="chocoLogo" alt="chocolate bars logo sillohuete" class="h-32" />
    <p class="font-main-copy">
      After you finish we'll tell you why we think what we chose for you reflects your flavor
      preferences, your aesthetic leanings, and your mood.
    </p>
  </div>
  <SeeProductsBtn />
  <section v-if="showResults" id="quiz-results" class="guide-results-wrapper">
    <SectionTitle
      title="your top three"
      description="Based on your answer we think you'll love the following choices. How did we do?"
      :img="zebraPeaking"
      customClass="mt-48 mb-8"
    />
    <article class="top-three-wrapper">
      <div class="mx-4" v-for="product in topProducts" :key="product.id">
        <div class="flex-between-center">
          <h3 class="fredo-title border-b-4" :class="product.borderColorClass">
            {{ product.name }}
          </h3>
          <p class="font-price">${{ product.price }}</p>
        </div>
        <ul class="flex-between-center mt-2">
          <li class="font-main-copy">{{ product.flavorProfile[0] }}</li>
          <li><i class="fa-solid fa-grip-lines-vertical text-dark-main"></i></li>
          <li class="font-main-copy">{{ product.flavorProfile[2] }}</li>
        </ul>

        <figure class="h-60 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
          <img :src="product.images[1]" :alt="product.name" class="img-cover" />
        </figure>
        <p class="font-main-copy mt-2">{{ product.recommendText }}</p>
        <div class="two-btn-wrapper">
          <button class="white-btn">See Details</button>
          <button class="black-btn">Add to Cart</button>
        </div>
      </div>
    </article>
    <SeeProductsBtn />
    <div>
      <SectionTitle
        title="we also have sets"
        description="If you can't decide, we also have sets ready to go!"
        :img="zebraPeaking"
        customClass="mt-48 mb-8"
      />
    </div>
    <section class="grid gap-8 md:grid md:grid-cols-2">
      <article class="mx-4">
        <div class="flex-between-center">
          <h3 class="fredo-title border-b-4" :class="fourBarSet.borderColorClass">
            {{ fourBarSet.name }}
          </h3>
          <p class="font-price">${{ fourBarSet.price }}</p>
        </div>
        <ul class="flex-between-center mt-2">
          <li class="font-main-copy">{{ fourBarSet.flavorProfile[0] }}</li>
          <li><i class="fa-solid fa-grip-lines-vertical text-dark-main"></i></li>
          <li class="font-main-copy">{{ fourBarSet.flavorProfile[2] }}</li>
        </ul>

        <figure class="h-60 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
          <img :src="fourBarSet.images[0]" :alt="fourBarSet.name" class="img-cover" />
        </figure>
        <p class="font-main-copy mt-2">{{ fourBarSet.recommendText }}</p>
        <div class="two-btn-wrapper">
          <button class="white-btn">See Details</button>
          <button class="black-btn">Add to Cart</button>
        </div>
      </article>
      <article class="mx-4">
        <div class="flex-between-center">
          <h3 class="fredo-title border-b-4" :class="sixBarSet.borderColorClass">
            {{ sixBarSet.name }}
          </h3>
          <p class="font-price">${{ sixBarSet.price }}</p>
        </div>
        <ul class="flex-between-center mt-2">
          <li class="font-main-copy">{{ sixBarSet.flavorProfile[0] }}</li>
          <li><i class="fa-solid fa-grip-lines-vertical text-dark-main"></i></li>
          <li class="font-main-copy">{{ sixBarSet.flavorProfile[2] }}</li>
        </ul>

        <figure class="h-60 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
          <img :src="sixBarSet.images[0]" :alt="sixBarSet.name" class="img-cover" />
        </figure>
        <p class="font-main-copy mt-2">{{ sixBarSet.recommendText }}</p>
        <div class="two-btn-wrapper">
          <button class="white-btn">See Details</button>
          <button class="black-btn">Add to Cart</button>
        </div>
      </article>
    </section>
    <SeeProductsBtn />
  </section>
</template>

<style scoped></style>
