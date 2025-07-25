import { defineStore } from 'pinia'

// Images
import zebraLogo from '@/assets/images/zebra-logo-reg.webp'
import penguinLogo from '@/assets/images/penguin-logo-reg.webp'
import skunkLogo from '@/assets/images/skunk-logo-reg.webp'
import pandaLogo from '@/assets/images/panda-logo-reg.webp'
import cowLogo from '@/assets/images/cow-logo-reg.webp'
import lemurLogo from '@/assets/images/lemur-logo-reg.webp'
import zebraSingleMd from '@/assets/images/tablet/home/zebra-single-md.webp'
import pandaSingleMd from '@/assets/images/tablet/home/panda-single-md.webp'
import skunkSingleMd from '@/assets/images/tablet/home/skunk-single-md.webp'
import cowSingleMd from '@/assets/images/tablet/home/cow-single-md.webp'
import penguinSingleMd from '@/assets/images/tablet/home/penguin-single-md.webp'
import lemurSingleMd from '@/assets/images/tablet/home/lemur-single-md.webp'

import zebraSingleLg from '@/assets/images/desktop/home/zebra-single-lg.webp'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      {
        id: 'zebra-bar',
        name: 'The Zebra',
        flavor: 'Dark chocolate with Chili & Sea Salt',
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
        flavor: 'Peppermint & Dark Chocolate',
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
        flavor: 'Matcha & White Chocolate',
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
        flavor: 'Strawberry & Rose Milk Chocolate',
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
        flavor: 'Milk Chocolate with Salted Caramel & Vanilla',
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
        animalName: 'Zebra',
        deepStory:
          'The zebra lives in stark contrast — thriving in balance, blending with none, and standing proudly alone. It represents clarity in complexity, and finds strength in duality. Its stride is measured, confident, and always forward.',
        traits: ['Proud', 'Composed', 'Loyal', 'Visually bold'],
        animalLogo: 'zebra-logo.png',
        images: [
          'img-a.png',
          'img-b.png',
          'img-c.png',
          'img-d.png',
          'img-e.png',
          'img-f.png',
          'img-g.png',
          'img-h.png',
        ],
        shortLore: 'The Zebra is your confident guide — equal parts grace and defiance.',
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
