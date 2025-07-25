import { defineStore } from 'pinia'

// Images
// *****LOGO IMAGES******
import zebraLogo from '@/assets/images/zebra-logo-reg.webp'
import penguinLogo from '@/assets/images/penguin-logo-reg.webp'
import skunkLogo from '@/assets/images/skunk-logo-reg.webp'
import pandaLogo from '@/assets/images/panda-logo-reg.webp'
import cowLogo from '@/assets/images/cow-logo-reg.webp'
import lemurLogo from '@/assets/images/lemur-logo-reg.webp'
import chocoLogo from '@/assets/images/choco-logo.png'

// *****SINGLE ITEM IMAGES******
import zebraSingleColor from '@/assets/images/tablet/home/zebra-single-md.webp'
import ZebraCollage from '@/assets/images/tablet/products/zebra-collage.webp'
import zebraSingleWhite from '@/assets/images/tablet/products/zebra-single-white.webp'
import pandaSingleColor from '@/assets/images/tablet/home/panda-single-md.webp'
import pandaSingleWhite from '@/assets/images/tablet/products/panda-single-white.webp'
import pandaCollage from '@/assets/images/tablet/products/panda-collage.webp'
import skunkSingleWhite from '@/assets/images/tablet/products/skunk-single-white.webp'
import skunkCollage from '@/assets/images/tablet/products/skunk-collage.webp'

import skunkSingleColor from '@/assets/images/tablet/home/skunk-single-md.webp'
import cowSingleColor from '@/assets/images/tablet/home/cow-single-md.webp'
import cowSingleWhite from '@/assets/images/tablet/products/cow-single-white.webp'
import cowCollage from '@/assets/images/tablet/products/cow-collage.webp'
import penguinSingleColor from '@/assets/images/tablet/home/penguin-single-md.webp'
import penguinSingleWhite from '@/assets/images/tablet/products/penguin-single-white.webp'
import penguinCollage from '@/assets/images/tablet/products/penguin-collage.webp'

import lemurSingleColor from '@/assets/images/tablet/home/lemur-single-md.webp'
import lemurSingleWhite from '@/assets/images/tablet/products/lemur-single-white.webp'
import lemurCollage from '@/assets/images/tablet/products/penguin-collage.webp'

// *****TWO SHOT IMAGES******
import twoShotCow from '@/assets/images/tablet/guide/cow-two-shot.webp'
import twoShotLemur from '@/assets/images/tablet/guide/lemur-two-shot.webp'
import twoShotPanda from '@/assets/images/tablet/guide/panda-two-shot.webp'
import twoShotPenguin from '@/assets/images/tablet/guide/penguin-two-shot.webp'
import twoShotSkunk from '@/assets/images/tablet/guide/skunk-two-shot.webp'
import twoShotZebra from '@/assets/images/tablet/guide/zebra-two-shot.webp'

// *****SET IMAGES******
import giftBoxMint from '@/assets/images/tablet/guide/gift-box-mint.webp'
import giftBoxPurple from '@/assets/images/tablet/products/gift-box-purple.webp'

import giftBoxPink from '@/assets/images/tablet/guide/gift-box-pink.webp'
import threePackA from '@/assets/images/tablet/products/three-pack-set-a.webp'
import threePackB from '@/assets/images/tablet/products/three-pack-set-b.webp'
import threePackC from '@/assets/images/tablet/products/three-pack-set-c.webp'
import fourPackA from '@/assets/images/tablet/products/four-pack-set-a.webp'
import fourPackB from '@/assets/images/tablet/products/four-pack-set-b.webp'
import fourPackC from '@/assets/images/tablet/products/four-pack-set-c.webp'
import fourPackD from '@/assets/images/tablet/products/four-pack-set-d.webp'

import twoPackA from '@/assets/images/tablet/products/two-set-a.webp'
import twoPackB from '@/assets/images/tablet/products/two-set-b.webp'
import twoPackC from '@/assets/images/tablet/products/two-set-c.webp'

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
        category: 'single',
        tags: ['playful', 'fruity', 'bold'],
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
        images: [zebraSingleColor, twoShotZebra, zebraSingleWhite, ZebraCollage],
      },
      {
        id: 'penguin-bar',
        name: 'The Penguin',
        flavor: 'Italian Peppermint and Dark Chocolate',
        description: 'Bold and silky dark chocolate crafted for contrast lovers.',
        price: 8.5,
        borderColorClass: 'border-b-penguin-blue',
        tags: ['dark', 'bold', 'elegant'],
        category: 'single',
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
        images: [penguinSingleColor, twoShotPenguin, penguinSingleWhite, penguinCollage],
      },
      {
        id: 'panda-bar',
        name: 'The Panda',
        flavor: 'Green Tea and White Chocolate',
        description: 'Bold and silky dark chocolate crafted for contrast lovers.',
        price: 8.5,
        borderColorClass: 'border-b-panda-orange',
        characterLogo: pandaLogo,
        tags: ['myself', 'elegant', 'dark'],
        category: 'single',
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
        images: [pandaSingleColor, twoShotPanda, pandaSingleWhite, pandaCollage],
      },
      {
        id: 'skunk-bar',
        name: 'The Skunk',
        flavor: 'Strawberry and Rose Milk Chocolate',
        description: 'Bold and silky dark chocolate crafted for contrast lovers.',
        price: 8.5,
        borderColorClass: 'border-b-skunk-pink',
        tags: ['bold', 'dark', 'playful', 'myself'],
        category: 'single',
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
        images: [skunkSingleColor, twoShotSkunk, skunkSingleWhite, skunkCollage],
      },
      {
        id: 'lemur-bar',
        name: 'The Lemur',
        flavor: 'Peppermint and dark chocolate mint',
        description: 'Banana, Peanut Butter, & Milk Chocolate',
        category: 'single',
        price: 8.5,
        tags: ['chill', 'light', 'playful'],

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
        images: [lemurSingleColor, twoShotLemur, lemurSingleWhite, lemurCollage],
      },
      {
        id: 'cow-bar',
        name: 'The Cow',
        flavor: 'Milk Chocolate with Salted Caramel and Vanilla',
        description: 'Bold and silky dark chocolate crafted for contrast lovers.',
        price: 8.5,
        borderColorClass: 'border-b-cow-red',
        tags: ['nutty', 'light', 'chill'],
        category: 'single',
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
        images: [cowSingleColor, twoShotCow, cowSingleWhite, cowCollage],
      },
      {
        id: 'two-bar-set',
        name: 'Two Bar Set',
        flavor: 'A thoughtful pairing of two bold flavors — curated for balance and contrast.',
        description:
          'Explore the dynamic duo of our premium chocolate bars. Perfect for gifting or a personal indulgence.',
        price: 16,
        tags: ['curated', 'bold', 'balanced'],
        category: 'set',
        borderColorClass: 'border-b-zebra-red',
        characterLogo: chocoLogo,
        flavorProfile: ['Rich contrast', 'Balanced notes', 'Double impact', 'Smooth finish'],
        characterProfile: [
          'Thoughtfully paired',
          'Flavor-forward',
          'Distinct personalities',
          'Shared strength',
        ],
        itemDetails: [
          'Includes two full-size bars of your choice',
          'Carefully selected for complementary flavor profiles',
          'Wrapped in signature black-and-white character designs',
          'Ideal for trying something new or sharing with a friend',
        ],
        recommendText: 'The perfect combo for those who crave variety but want thoughtful balance.',
        images: [twoPackA, twoPackB, twoPackC],
      },
      {
        id: 'three-bar-set',
        name: 'Three Bar Set',
        flavor: 'Three standout flavors — selected to match your mood, vibe, or gift intention.',
        description:
          'Dive into a trio of character-driven bars. A flavorful snapshot of our Beast & Bean universe.',
        price: 24,
        tags: ['playful', 'gift-ready', 'versatile'],
        category: 'set',
        borderColorClass: 'border-b-lemur-gold',
        characterLogo: chocoLogo,
        flavorProfile: ['Vivid variety', 'Snackable set', 'Distinct moods', 'Unforgettable taste'],
        characterProfile: ['Expressive', 'Multi-dimensional', 'Memorable', 'Just enough'],
        itemDetails: [
          'Features three different bars, each with unique personalities',
          'Includes a mix of dark, milk, and playful flavors',
          'Comes boxed with a vibrant card explaining each animal’s story',
          'Perfect for those who “can’t choose just one”',
        ],
        recommendText: 'Great for variety seekers or as a bold, story-rich gift.',
        images: [threePackA, threePackB, threePackC],
      },
      {
        id: 'four-bar-set',
        name: 'Four Bar Set',
        flavor:
          'A rich flight of flavors and personalities — explore the deeper side of Bean & Beast.',
        description:
          'Four distinct characters, four unforgettable bars. A journey in taste, contrast, and storytelling.',
        price: 32,
        tags: ['depth', 'sampler', 'crafted'],
        category: 'set',
        borderColorClass: 'border-b-panda-rose',
        characterLogo: chocoLogo,
        flavorProfile: [
          'Deep exploration',
          'Flavors that evolve',
          'Contrast & harmony',
          'Narrative richness',
        ],
        characterProfile: ['Adventurous', 'Sophisticated', 'Story-driven', 'Artfully paired'],
        itemDetails: [
          'Four full bars representing a balance of dark, milk, and playful infusions',
          'Each bar features a unique animal character and origin story',
          'Designed as a tasting flight with visual storytelling cards included',
          'Pairs well with wine tastings or cozy evenings',
        ],
        recommendText:
          'Crafted for flavor enthusiasts who love exploring the full spectrum of chocolate design.',
        images: [fourPackA, fourPackB, fourPackC, fourPackD, giftBoxMint],
      },
      {
        id: 'six-bar-set',
        name: 'The Full Collection',
        flavor: 'All six flavors. All six beasts. The complete Bean & Beast experience.',
        description:
          'A full set of character-rich bars, each wrapped in visual storytelling and premium chocolate.',
        price: 48,
        tags: ['complete', 'luxury', 'collector'],
        category: 'set',
        borderColorClass: 'border-b-penguin-sky',
        characterLogo: chocoLogo,
        flavorProfile: [
          'Full experience',
          'Visual & flavorful',
          'Balanced & bold',
          'Signature gift',
        ],
        characterProfile: [
          'Collector-ready',
          'Emotionally engaging',
          'Design-focused',
          'Perfectly curated',
        ],
        itemDetails: [
          'Includes all six animal-themed bars with matching storytelling elements',
          'Presented in a premium display box with character bios and pairing suggestions',
          'Perfect for milestone gifts, design lovers, and chocolate collectors',
          'Each bar made from ethically sourced cacao and wrapped in brand-exclusive art',
        ],
        recommendText: 'A show-stopping gift or a self-indulgent dive into the Bean & Beast world.',
        images: [giftBoxPink, threePackA, threePackB, fourPackA, fourPackD, giftBoxPurple],
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
        category: 'merch',
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
        category: 'merch',

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
        category: 'merch',

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
        category: 'merch',

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
