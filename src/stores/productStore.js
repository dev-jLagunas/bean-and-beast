import { defineStore } from 'pinia'

// Images
// *****LOGO IMAGES******
import zebraLogo from '@/assets/images/zebra-logo-reg.webp'
import penguinLogo from '@/assets/images/penguin-logo-reg.webp'
import skunkLogo from '@/assets/images/skunk-logo-reg.webp'
import pandaLogo from '@/assets/images/panda-logo-reg.webp'
import cowLogo from '@/assets/images/cow-logo-reg.webp'
import lemurLogo from '@/assets/images/lemur-logo-reg.webp'
// *****SINGLE ITEM IMAGES******
import zebraSingleMd from '@/assets/images/tablet/home/zebra-single-md.webp'
import pandaSingleMd from '@/assets/images/tablet/home/panda-single-md.webp'
import skunkSingleMd from '@/assets/images/tablet/home/skunk-single-md.webp'
import cowSingleMd from '@/assets/images/tablet/home/cow-single-md.webp'
import penguinSingleMd from '@/assets/images/tablet/home/penguin-single-md.webp'
import lemurSingleMd from '@/assets/images/tablet/home/lemur-single-md.webp'
import zebraSingleLg from '@/assets/images/desktop/home/zebra-single-lg.webp'

// *****HOME LORE IMAGES******
import homeLoreZebra from '@/assets/images/tablet/home/home-lore-zebra.png'
import homeLoreLemur from '@/assets/images/tablet/home/home-lore-lemur.png'
import homeLorePanda from '@/assets/images/tablet/home/home-lore-panda.png'
import homeLoreSkunk from '@/assets/images/tablet/home/home-lore-skunk.png'
import homeLorePenguin from '@/assets/images/tablet/home/home-lore-penguin.png'
import homeLoreCow from '@/assets/images/tablet/home/home-lore-cow.png'

// *****MERCHANDISE IMAGES ******

import miniLogo from '@/assets/images/mini-logo.svg'
import hoodieDesignA from '@/assets/images/tablet/merch/woman-hoodie-a.webp'
import hoodieDesignB from '@/assets/images/tablet/merch/woman-hoodie-b.webp'
import hoodieDesignC from '@/assets/images/tablet/merch/woman-hoodie-c.webp'
import hoodieDesignD from '@/assets/images/tablet/merch/woman-hoodie-d.webp'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      {
        id: 'zebra-bar',
        name: 'The Zebra',
        flavor: 'Dark chocolate with Chili and Sea Salt',
        description: 'Bold and silky dark chocolate crafted for contrast lovers.',
        price: 8.5,
        borderColorClass: 'border-b-zebra-cyan',
        characterLogo: zebraLogo,
        flavorProfile: ['Dark & creamy', 'Subtle bitterness', 'Roasted depth', 'Smooth finish'],
        characterProfile: [
          'Striking personality',
          'Confident vibe',
          'Elegantly wild',
          'Unapologetically bold',
        ],
        itemDetails: [
          'Crafted from 70% single-origin cacao',
          'Stone-ground for a smooth, slow melt',
          'Balanced with light vanilla undertones',
          'Pairs well with espresso or cabernet',
        ],
        recommendText:
          'Chosen for its bold contrast and smooth intensity — perfect for classic dark chocolate lovers.',
        images: [
          zebraSingleMd,
          zebraSingleLg,
          'img-c.png',
          'img-d.png',
          'img-e.png',
          'img-f.png',
          'img-g.png',
          'img-h.png',
        ],
      },
      {
        id: 'penguin-bar',
        name: 'The Penguin',
        flavor: 'Italian Peppermint and Dark Chocolate',
        description: 'Bold and silky dark chocolate crafted for contrast lovers.',
        price: 8.5,
        borderColorClass: 'border-b-penguin-blue',

        characterLogo: penguinLogo,
        flavorProfile: ['Dark & creamy', 'Subtle bitterness', 'Roasted depth', 'Smooth finish'],
        characterProfile: [
          'Striking personality',
          'Confident vibe',
          'Elegantly wild',
          'Unapologetically bold',
        ],
        itemDetails: [
          'Crafted from 70% single-origin cacao',
          'Stone-ground for a smooth, slow melt',
          'Balanced with light vanilla undertones',
          'Pairs well with espresso or cabernet',
        ],
        recommendText:
          'Chosen for its bold contrast and smooth intensity — perfect for classic dark chocolate lovers.',
        images: [
          penguinSingleMd,
          'img-b.png',
          'img-c.png',
          'img-d.png',
          'img-e.png',
          'img-f.png',
          'img-g.png',
          'img-h.png',
        ],
      },
      {
        id: 'panda-bar',
        name: 'The Panda',
        flavor: 'Green Tea and White Chocolate',
        description: 'Bold and silky dark chocolate crafted for contrast lovers.',
        price: 8.5,
        borderColorClass: 'border-b-panda-orange',
        characterLogo: pandaLogo,
        flavorProfile: ['Dark & creamy', 'Subtle bitterness', 'Roasted depth', 'Smooth finish'],
        characterProfile: [
          'Striking personality',
          'Confident vibe',
          'Elegantly wild',
          'Unapologetically bold',
        ],
        itemDetails: [
          'Crafted from 70% single-origin cacao',
          'Stone-ground for a smooth, slow melt',
          'Balanced with light vanilla undertones',
          'Pairs well with espresso or cabernet',
        ],
        recommendText:
          'Chosen for its bold contrast and smooth intensity — perfect for classic dark chocolate lovers.',
        images: [
          pandaSingleMd,
          'img-b.png',
          'img-c.png',
          'img-d.png',
          'img-e.png',
          'img-f.png',
          'img-g.png',
          'img-h.png',
        ],
      },
      {
        id: 'skunk-bar',
        name: 'The Skunk',
        flavor: 'Strawberry and Rose Milk Chocolate',
        description: 'Bold and silky dark chocolate crafted for contrast lovers.',
        price: 8.5,
        borderColorClass: 'border-b-skunk-pink',

        characterLogo: skunkLogo,
        flavorProfile: ['Dark & creamy', 'Subtle bitterness', 'Roasted depth', 'Smooth finish'],
        characterProfile: [
          'Striking personality',
          'Confident vibe',
          'Elegantly wild',
          'Unapologetically bold',
        ],
        itemDetails: [
          'Crafted from 70% single-origin cacao',
          'Stone-ground for a smooth, slow melt',
          'Balanced with light vanilla undertones',
          'Pairs well with espresso or cabernet',
        ],
        recommendText:
          'Chosen for its bold contrast and smooth intensity — perfect for classic dark chocolate lovers.',
        images: [
          skunkSingleMd,
          'img-b.png',
          'img-c.png',
          'img-d.png',
          'img-e.png',
          'img-f.png',
          'img-g.png',
          'img-h.png',
        ],
      },
      {
        id: 'lemur-bar',
        name: 'The Lemur',
        flavor: 'Peppermint and dark chocolate mint',
        description: 'Banana, Peanut Butter, & Milk Chocolate',
        price: 8.5,
        characterLogo: lemurLogo,
        borderColorClass: 'border-lemur-orange',

        flavorProfile: ['Dark & creamy', 'Subtle bitterness', 'Roasted depth', 'Smooth finish'],
        characterProfile: [
          'Striking personality',
          'Confident vibe',
          'Elegantly wild',
          'Unapologetically bold',
        ],
        itemDetails: [
          'Crafted from 70% single-origin cacao',
          'Stone-ground for a smooth, slow melt',
          'Balanced with light vanilla undertones',
          'Pairs well with espresso or cabernet',
        ],
        recommendText:
          'Chosen for its bold contrast and smooth intensity — perfect for classic dark chocolate lovers.',
        images: [
          lemurSingleMd,
          'img-b.png',
          'img-c.png',
          'img-d.png',
          'img-e.png',
          'img-f.png',
          'img-g.png',
          'img-h.png',
        ],
      },
      {
        id: 'cow-bar',
        name: 'The Cow',
        flavor: 'Milk Chocolate with Salted Caramel and Vanilla',
        description: 'Bold and silky dark chocolate crafted for contrast lovers.',
        price: 8.5,
        borderColorClass: 'border-b-cow-red',

        characterLogo: cowLogo,
        flavorProfile: ['Dark & creamy', 'Subtle bitterness', 'Roasted depth', 'Smooth finish'],
        characterProfile: [
          'Striking personality',
          'Confident vibe',
          'Elegantly wild',
          'Unapologetically bold',
        ],
        itemDetails: [
          'Crafted from 70% single-origin cacao',
          'Stone-ground for a smooth, slow melt',
          'Balanced with light vanilla undertones',
          'Pairs well with espresso or cabernet',
        ],
        recommendText:
          'Chosen for its bold contrast and smooth intensity — perfect for classic dark chocolate lovers.',
        images: [
          cowSingleMd,
          'img-b.png',
          'img-c.png',
          'img-d.png',
          'img-e.png',
          'img-f.png',
          'img-g.png',
          'img-h.png',
        ],
      },
    ],
    animalLore: [
      {
        id: 'zebra-bar',
        animalName: 'The Zebra',
        deepStory:
          'The zebra lives in stark contrast — thriving in balance, blending with none, and standing proudly alone. It represents clarity in complexity, and finds strength in duality. Its stride is measured, confident, and always forward.',
        traits: ['Proud', 'Composed', 'Loyal', 'Visually bold'],
        animalLogo: zebraLogo,
        images: [
          homeLoreZebra,
          'img-b.png',
          'img-c.png',
          'img-d.png',
          'img-e.png',
          'img-f.png',
          'img-g.png',
          'img-h.png',
        ],
        shortLore:
          'The Zebra is your confident guide. The Zebra is equal parts grace and defiance.',
      },
      {
        id: 'cow-bar',
        animalName: 'The Cow',
        deepStory:
          'The zebra lives in stark contrast — thriving in balance, blending with none, and standing proudly alone. It represents clarity in complexity, and finds strength in duality. Its stride is measured, confident, and always forward.',
        traits: ['Proud', 'Composed', 'Loyal', 'Visually bold'],
        animalLogo: zebraLogo,
        images: [
          homeLoreCow,
          'img-b.png',
          'img-c.png',
          'img-d.png',
          'img-e.png',
          'img-f.png',
          'img-g.png',
          'img-h.png',
        ],
        shortLore:
          'The Cow is steady and nurturing. Grounded in tradition, it offers calm in a fast-moving world.',
      },
      {
        id: 'penguin-bar',
        animalName: 'The Penguin',
        deepStory:
          'The zebra lives in stark contrast — thriving in balance, blending with none, and standing proudly alone. It represents clarity in complexity, and finds strength in duality. Its stride is measured, confident, and always forward.',
        traits: ['Proud', 'Composed', 'Loyal', 'Visually bold'],
        animalLogo: zebraLogo,
        images: [
          homeLorePenguin,
          'img-b.png',
          'img-c.png',
          'img-d.png',
          'img-e.png',
          'img-f.png',
          'img-g.png',
          'img-h.png',
        ],
        shortLore:
          'The Penguin thrives in extremes. Loyal and adaptable, it finds unity and warmth even in the coldest moments.',
      },
      {
        id: 'lemur-bar',
        animalName: 'The Lemur',
        deepStory:
          'The zebra lives in stark contrast — thriving in balance, blending with none, and standing proudly alone. It represents clarity in complexity, and finds strength in duality. Its stride is measured, confident, and always forward.',
        traits: ['Proud', 'Composed', 'Loyal', 'Visually bold'],
        animalLogo: zebraLogo,
        images: [
          homeLoreLemur,
          'img-b.png',
          'img-c.png',
          'img-d.png',
          'img-e.png',
          'img-f.png',
          'img-g.png',
          'img-h.png',
        ],
        shortLore:
          'The Lemur is playful but sharp. Curious and nimble, it thrives on connection and instinctive choices.',
      },
      {
        id: 'panda-bar',
        animalName: 'The Panda',
        deepStory:
          'The zebra lives in stark contrast — thriving in balance, blending with none, and standing proudly alone. It represents clarity in complexity, and finds strength in duality. Its stride is measured, confident, and always forward.',
        traits: ['Proud', 'Composed', 'Loyal', 'Visually bold'],
        animalLogo: zebraLogo,
        images: [
          homeLorePanda,
          'img-b.png',
          'img-c.png',
          'img-d.png',
          'img-e.png',
          'img-f.png',
          'img-g.png',
          'img-h.png',
        ],
        shortLore:
          'The Panda embodies peaceful strength. It lives slowly, choosing joy and balance over speed and pressure.',
      },
      {
        id: 'skunk-bar',
        animalName: 'The Skunk',
        deepStory:
          'The zebra lives in stark contrast — thriving in balance, blending with none, and standing proudly alone. It represents clarity in complexity, and finds strength in duality. Its stride is measured, confident, and always forward.',
        traits: ['Proud', 'Composed', 'Loyal', 'Visually bold'],
        animalLogo: zebraLogo,
        images: [
          homeLoreSkunk,
          'img-b.png',
          'img-c.png',
          'img-d.png',
          'img-e.png',
          'img-f.png',
          'img-g.png',
          'img-h.png',
        ],
        shortLore:
          'The Skunk moves with quiet confidence. It demands respect, not attention, and flourishes by staying authentically itself.',
      },
    ],
    merchandise: [
      {
        id: 'hoodie-a',
        name: 'Bean And Beast Hoodie',
        flavor: 'Our signature hoodie brings bold color and quiet strength to every day comfort',
        description:
          'Our signature hoodie brings bold color and quiet strength to every day comfort',
        price: 45,
        borderColorClass: 'border-b-zebra-cyan',
        storeLogo: miniLogo,
        flavorProfile: ['Dark & creamy', 'Subtle bitterness', 'Roasted depth', 'Smooth finish'],
        characterProfile: [
          'Striking personality',
          'Confident vibe',
          'Elegantly wild',
          'Unapologetically bold',
        ],
        itemDetails: [
          'soft, breathable cotton-blend fleece',
          'Graphic print, signature color bars',
          'Balanced with light vanilla undertones',
          'Pairs well with espresso or cabernet',
        ],
        recommendText:
          'Chosen for its bold contrast and smooth intensity — perfect for classic dark chocolate lovers.',
        images: [
          hoodieDesignA,
          'img-c.png',
          'img-d.png',
          'img-e.png',
          'img-f.png',
          'img-g.png',
          'img-h.png',
        ],
      },
      {
        id: 'hoodie-b',
        name: 'Bean And Beast Black Hoodie',
        flavor: 'Our signature hoodie brings bold color and quiet strength to every day comfort',
        description:
          'Our signature hoodie brings bold color and quiet strength to every day comfort',
        price: 45,
        borderColorClass: 'border-b-zebra-cyan',
        storeLogo: miniLogo,
        flavorProfile: ['Dark & creamy', 'Subtle bitterness', 'Roasted depth', 'Smooth finish'],
        characterProfile: [
          'Striking personality',
          'Confident vibe',
          'Elegantly wild',
          'Unapologetically bold',
        ],
        itemDetails: [
          'soft, breathable cotton-blend fleece',
          'Graphic print, signature color bars',
          'Balanced with light vanilla undertones',
          'Pairs well with espresso or cabernet',
        ],
        recommendText:
          'Chosen for its bold contrast and smooth intensity — perfect for classic dark chocolate lovers.',
        images: [
          hoodieDesignB,
          'img-c.png',
          'img-d.png',
          'img-e.png',
          'img-f.png',
          'img-g.png',
          'img-h.png',
        ],
      },
      {
        id: 'hoodie-c',
        name: 'Bean And Beast Hoodie',
        flavor: 'Our signature hoodie brings bold color and quiet strength to every day comfort',
        description:
          'Our signature hoodie brings bold color and quiet strength to every day comfort',
        price: 45,
        borderColorClass: 'border-b-zebra-cyan',
        storeLogo: miniLogo,
        flavorProfile: ['Dark & creamy', 'Subtle bitterness', 'Roasted depth', 'Smooth finish'],
        characterProfile: [
          'Striking personality',
          'Confident vibe',
          'Elegantly wild',
          'Unapologetically bold',
        ],
        itemDetails: [
          'soft, breathable cotton-blend fleece',
          'Graphic print, signature color bars',
          'Balanced with light vanilla undertones',
          'Pairs well with espresso or cabernet',
        ],
        recommendText:
          'Chosen for its bold contrast and smooth intensity — perfect for classic dark chocolate lovers.',
        images: [
          hoodieDesignC,
          'img-c.png',
          'img-d.png',
          'img-e.png',
          'img-f.png',
          'img-g.png',
          'img-h.png',
        ],
      },
      {
        id: 'hoodie-d',
        name: 'Bean And Beast Art Hoodie',
        flavor: 'Our signature hoodie brings bold color and quiet strength to every day comfort',
        description:
          'Our signature hoodie brings bold color and quiet strength to every day comfort',
        price: 50,
        borderColorClass: 'border-b-zebra-cyan',
        storeLogo: miniLogo,
        flavorProfile: ['Dark & creamy', 'Subtle bitterness', 'Roasted depth', 'Smooth finish'],
        characterProfile: [
          'Striking personality',
          'Confident vibe',
          'Elegantly wild',
          'Unapologetically bold',
        ],
        itemDetails: [
          'soft, breathable cotton-blend fleece',
          'Graphic print, signature color bars',
          'Balanced with light vanilla undertones',
          'Pairs well with espresso or cabernet',
        ],
        recommendText:
          'Chosen for its bold contrast and smooth intensity — perfect for classic dark chocolate lovers.',
        images: [
          hoodieDesignD,
          'img-c.png',
          'img-d.png',
          'img-e.png',
          'img-f.png',
          'img-g.png',
          'img-h.png',
        ],
      },
    ],
  }),
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id)
    },
    getAnimalLoreById: (state) => (id) => {
      return state.animalLore.find((animal) => animal.id === id)
    },
  },
})
