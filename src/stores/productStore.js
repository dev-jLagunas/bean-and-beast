import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      {
        id: 'zebra-bar',
        name: 'The Zebra',
        description: 'Bold and silky dark chocolate crafted for contrast lovers.',
        price: 8.5,
        characterLogo: 'zebra-logo.png',
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
          'img-a.png',
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
