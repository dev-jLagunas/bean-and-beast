<script setup>
import { ref } from 'vue'
//components
import SectionTitle from '@/components/reusable/SectionTitle.vue'
import SeeProductsBtn from '@/components/reusable/SeeProductsBtn.vue'

// Reactive
const currentIndex = ref(0)
const userAnswers = ref([])



// Images
import pandaPeaking from '@/assets/images/section-peek-panda.png'
import penguinLogo from '@/assets/images/penguin-logo-reg.webp'
import lemurLogo from '@/assets/images/lemur-logo-reg.webp'
import cowLogo from '@/assets/images/cow-logo-reg.webp'
import zebraLogo from '@/assets/images/zebra-logo-reg.webp'
import pandaLogo from '@/assets/images/panda-logo-reg.webp'
import chocoLogo from '@/assets/images/choco-logo.png'


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
  currentIndex.value++
}
</script>

<template>
  <SectionTitle
    title="Let us help you choose."
    description="Answer 5 quick questions and we'll recommend the top 3 chocolates most likely to match your taste and vibe."
    :img="pandaPeaking"
    customClass="mt-8"
  />
  <section
    v-if="currentIndex < quizCardContent.length"
    class="quiz-question mx-4 mt-8 px-8 py-16 rounded-sm max-w-[1000px] md:mx-auto"
    :class="['quiz-question', quizCardContent[currentIndex].themeClass]"
  >
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
  <div class="w-[70vw] mx-auto mt-8 flex flex-col items-center justify-center max-w-[500px]" >
    <img :src="chocoLogo" alt="chocolate bars logo sillohuete" class="h-32">
    <p class="font-main-copy">After you finish we'll tell you why we think what we chose for you reflects your flavor preferences, your aesthetic leanings, and your mood.</p>
  </div>
  <SeeProductsBtn/>
</template>

<style scoped></style>
