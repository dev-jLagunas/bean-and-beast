<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

// Images
import tabletHero1 from '@/assets/images/tablet/hero/slide-1.png'
import tabletHero2 from '@/assets/images/tablet/hero/slide-2.png'
import tabletHero3 from '@/assets/images/tablet/hero/slide-3.png'
import desktopHero1 from '@/assets/images/desktop/hero/slide-1.png'
import desktopHero2 from '@/assets/images/desktop/hero/slide-2.png'
import desktopHero3 from '@/assets/images/desktop/hero/slide-3.png'

// Hero Slider Content
const slides = [
  {
    sm: tabletHero1,
    lg: desktopHero1,
    alt: 'Hero slide 1',
  },
  {
    sm: tabletHero2,
    lg: desktopHero2,
    alt: 'Hero slide 2',
  },
  {
    sm: tabletHero3,
    lg: desktopHero3,
    alt: 'Hero slide 3',
  },
]
</script>

<template>
  <Swiper
    :loop="true"
    :autoplay="{ delay: 4000, disableOnInteraction: false }"
    :modules="[Autoplay]"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <SwiperSlide v-for="(slide, index) in slides" :key="index">
      <picture>
        <source :srcset="slide.lg" media="(min-width: 500px)" />
        <img :src="slide.sm" :alt="slide.alt" class="w-full xl:object-contain" />
      </picture>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped></style>
