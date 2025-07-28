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

// ***** ABOUT PAGE IMAGES ******
import zebraGif from '@/assets/images/tablet/about/zebra-gif.gif'
import lemurGif from '@/assets/images/tablet/about/lemur-gif.gif'
import pandaGif from '@/assets/images/tablet/about/panda-gif.gif'
import penguinGif from '@/assets/images/tablet/about/penguin-gif.gif'
import skunkGif from '@/assets/images/tablet/about/skunk-gif.gif'
import cowGif from '@/assets/images/tablet/about/cow-gif.gif'
import cowProgression from '@/assets/images/tablet/about/cow-progression.png'
import lemurProgression from '@/assets/images/tablet/about/lemur-progression.png'
import pandaProgression from '@/assets/images/tablet/about/panda-progression.png'
import penguinProgression from '@/assets/images/tablet/about/penguin-progression.png'
import skunkProgression from '@/assets/images/tablet/about/skunk-progression.png'
import zebraProgression from '@/assets/images/tablet/about/zebra-progression.png'

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
        characterProfile: ['Proud stance', 'Calm focus', 'Visual clarity', 'Quiet defiance'],
        itemDetails: [
          '70% single-origin dark chocolate',
          'Spiced with red chili and sea salt',
          'Stone-ground for smooth texture',
          'Pairs well with red wine or mezcal',
        ],
        recommendText:
          'Picked for its bold edge and clean finish — a great fit for contrast seekers.',
        images: [zebraSingleColor, twoShotZebra, zebraSingleWhite, ZebraCollage],
      },
      {
        id: 'penguin-bar',
        name: 'The Penguin',
        flavor: 'Italian Peppermint and Dark Chocolate',
        description: 'Cool, confident dark chocolate with a clean peppermint finish.',
        price: 8.5,
        category: 'single',
        tags: ['dark', 'bold', 'elegant'],
        borderColorClass: 'border-b-penguin-blue',
        characterLogo: penguinLogo,
        flavorProfile: ['Cooling mint', 'Smooth dark', 'Subtle bite', 'Lingering finish'],
        characterProfile: [
          'Composed strength',
          'Chilled resolve',
          'Sharp elegance',
          'Refined calm',
        ],
        itemDetails: [
          '70% single-origin dark chocolate',
          'Infused with natural Italian peppermint oil',
          'Stone-ground for an ultra-smooth melt',
          'Pairs well with cold brew or dark whiskey',
        ],
        recommendText:
          'Selected for its refined boldness and cool finish. This is ideal for those drawn to elegant intensity.',
        images: [penguinSingleColor, twoShotPenguin, penguinSingleWhite, penguinCollage],
      },
      {
        id: 'panda-bar',
        name: 'The Panda',
        flavor: 'Green Tea and White Chocolate',
        description: 'Mellow white chocolate infused with delicate green tea warmth.',
        price: 8.5,
        category: 'single',
        tags: ['myself', 'elegant', 'gentle'],
        borderColorClass: 'border-b-panda-orange',
        characterLogo: pandaLogo,
        flavorProfile: ['Creamy green tea', 'Velvety white', 'Soft floral', 'Smooth finish'],
        characterProfile: ['Gentle strength', 'Quiet wisdom', 'Balanced spirit', 'Warm presence'],
        itemDetails: [
          'Infused with ceremonial-grade matcha',
          'Blended with smooth Belgian white chocolate',
          'Delicate, floral finish with earthy notes',
          'Pairs well with jasmine tea or sake',
        ],
        recommendText:
          'Chosen for its calming elegance and inner balance. This a perfect match for gentle souls and quiet thinkers.',
        images: [pandaSingleColor, twoShotPanda, pandaSingleWhite, pandaCollage],
      },
      {
        id: 'skunk-bar',
        name: 'The Skunk',
        flavor: 'Strawberry and Rose Milk Chocolate',
        description: 'Floral milk chocolate with a sweet and mischievous twist.',
        price: 8.5,
        category: 'single',
        tags: ['bold', 'playful', 'romantic', 'myself'],
        borderColorClass: 'border-b-skunk-pink',
        characterLogo: skunkLogo,
        flavorProfile: ['Floral rose', 'Sweet berry', 'Smooth milk', 'Lush finish'],
        characterProfile: ['Bold charm', 'Sweet mischief', 'Romantic spirit', 'Expressive nature'],
        itemDetails: [
          'Made with 40% creamy milk chocolate',
          'Infused with real strawberry and rose essence',
          'Smooth melt with fragrant floral notes',
          'Pairs well with sparkling rosé or hibiscus tea',
        ],
        recommendText:
          'Chosen for its romantic flair and playful edge. We belive this is perfect for those who wear their heart out loud.',
        images: [skunkSingleColor, twoShotSkunk, skunkSingleWhite, skunkCollage],
      },
      {
        id: 'lemur-bar',
        name: 'The Lemur',
        flavor: 'Banana, Peanut Butter & Milk Chocolate',
        description: 'Creamy, nutty milk chocolate with mellow banana sweetness.',
        price: 8.5,
        category: 'single',
        tags: ['chill', 'light', 'playful'],
        borderColorClass: 'border-lemur-orange',
        characterLogo: lemurLogo,
        flavorProfile: ['Creamy banana', 'Nutty peanut', 'Soft milk', 'Smooth melt'],
        characterProfile: ['Curious soul', 'Playful energy', 'Easygoing charm', 'Joyful nature'],
        itemDetails: [
          'Made with velvety milk chocolate and real banana',
          'Creamy peanut butter center with balanced sweetness',
          'Smooth and mellow flavor profile',
          'Pairs well with oat milk or black tea',
        ],
        recommendText:
          'Chosen for its lighthearted flavor and nostalgic warmth. We feel thi ideal for laid-back, fun-loving personalities.',
        images: [lemurSingleColor, twoShotLemur, lemurSingleWhite, lemurCollage],
      },
      {
        id: 'cow-bar',
        name: 'The Cow',
        flavor: 'Milk Chocolate with Salted Caramel and Vanilla',
        description: 'Comforting and smooth milk chocolate with a rich caramel core.',
        price: 8.5,
        category: 'single',
        tags: ['nutty', 'light', 'chill'],
        borderColorClass: 'border-b-cow-red',
        characterLogo: cowLogo,
        flavorProfile: ['Sweet caramel', 'Creamy vanilla', 'Soft milk', 'Smooth finish'],
        characterProfile: ['Grounded comfort', 'Loyal calm', 'Warm-hearted', 'Gentle strength'],
        itemDetails: [
          'Crafted with creamy milk chocolate and rich caramel',
          'Hints of real vanilla bean throughout',
          'Balanced sweetness with light saltiness',
          'Pairs well with lattes or bourbon',
        ],
        recommendText:
          'Chosen for its comforting blend of flavors. This is perfect for those who crave warmth and nostalgia.',
        images: [cowSingleColor, twoShotCow, cowSingleWhite, cowCollage],
      },
      {
        id: 'two-bar-set',
        name: 'Two Bar Set',
        flavor: 'Pick any two flavors that match you.',
        description: 'Explore a duo of premium bars, crafted for bold contrast and harmony.',
        price: 16,
        category: 'set',
        tags: ['curated', 'bold', 'balanced'],
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
          'Curated for complementary flavor and personality',
          'Wrapped in our signature black-and-white character style',
          'Perfect for gifting or indulgent sampling',
        ],
        recommendText: 'The perfect combo for those who crave variety but want thoughtful balance.',
        images: [twoPackA, twoPackB, twoPackC],
      },
      {
        id: 'three-bar-set',
        name: 'Three Bar Set',
        flavor: 'Any three flavors to match your mood, vibe, or gift intention.',
        description: 'A vibrant trio of bars capturing the full flavor spectrum of Bean & Beast.',
        price: 24,
        category: 'set',
        tags: ['playful', 'gift-ready', 'versatile'],
        borderColorClass: 'border-b-lemur-gold',
        characterLogo: chocoLogo,
        flavorProfile: ['Vivid variety', 'Snackable set', 'Distinct moods', 'Unforgettable taste'],
        characterProfile: ['Expressive', 'Multi-dimensional', 'Memorable', 'Just enough'],
        itemDetails: [
          'Three full-size bars with unique flavor and character',
          'Features a blend of dark, milk, and signature playful profiles',
          'Includes a collector’s card introducing each animal’s story',
          'Ideal for indecisive snackers or unique gift-givers',
        ],
        recommendText: 'Great for variety seekers or as a bold, story-rich gift.',
        images: [threePackA, threePackB, threePackC],
      },
      {
        id: 'four-bar-set',
        name: 'Four Bar Set',
        flavor: 'Choose a rich flight of flavors and personalities.',
        description: 'Four distinct characters, four unforgettable bars.',
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
        flavor: 'All six flavors. All six beasts. Enjoy!',
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
        id: 'zebra-lore',
        animalName: 'The Zebra',
        productId: 'zebra-bar',
        deepStory:
          'The Zebra is a creature of deliberate contrast, a visual paradox that commands attention yet rarely seeks it. At a glance, it’s black or white. But upon closer inspection, you realize it’s both, not in conflict, but in harmony. In our world, The Zebra stands for those who move with quiet confidence, who own their uniqueness without explanation. It is a symbol of grace, precision, and elegant resilience.\n\nThis chocolate mirrors that same balance: bold dark cacao grounded with a flash of sea salt and a slow burn of chili. It’s not for everyone. It’s for the ones who stride ahead without looking back, who believe subtlety can be striking, and who carry their strength like a tailored coat. The Zebra bar is for those who know exactly who they are and never need to prove it.',
        traits: ['Confident', 'Independent', 'Poised', 'Decisive'],
        animalLogo: zebraLogo,
        images: [homeLoreZebra, zebraGif, zebraProgression, zebraSingleColor],
        shortLore:
          'The Zebra walks the line between elegance and edge, always in motion, never in doubt.',
      },
      {
        id: 'cow-lore',
        animalName: 'The Cow',
        productId: 'cow-bar',
        deepStory:
          "The Cow is a symbol of warmth, patience, and unshakable steadiness. It doesn’t rush, it endures. In cultures around the world, the cow has long been revered as a provider, a nurturer, and a grounding presence. In our world, The Cow represents those who value comfort, dependability, and tradition, not as a refusal of change, but as an anchor through it.\n\nThis bar pairs smooth milk chocolate with salted caramel and a whisper of vanilla. A nostalgic nod to cozy kitchens and shared desserts. It's a flavor that wraps around you gently, like a well-worn sweater or a hug that lingers just a moment longer. The Cow bar is for those who create safe spaces, who stay soft in a loud world, and who understand that strength doesn’t need to shout.",
        traits: ['Warm', 'Steady', 'Grounded', 'Comforting'],
        animalLogo: cowLogo,
        images: [homeLoreCow, cowGif, cowProgression, cowSingleColor],
        shortLore:
          'The Cow is a gentle force. It is calming, nurturing, and always there when you need it.',
      },
      {
        id: 'penguin-lore',
        animalName: 'The Penguin',
        productId: 'penguin-bar',
        deepStory:
          "The Penguin is a master of balance in extreme conditions. It is resilient, loyal, and unexpectedly elegant. It thrives where others might stumble, moving through harshness with grace and humor. In a world of shifting ice and unpredictable tides, the Penguin forms unbreakable bonds and carves a path forward with quiet confidence.\n\nThis bar’s flavor, Italian peppermint and smooth dark chocolate, mirrors the Penguin’s nature: brisk, refreshing, and cool under pressure. It's a bold contrast softened by familiarity, much like the Penguin itself. For those who find strength in community, clarity in cold, and joy in life’s crisp edges, The Penguin offers a moment of chill, charm, and focus.",
        traits: ['Resilient', 'Charming', 'Cool-headed', 'Loyal'],
        animalLogo: penguinLogo,
        images: [homeLorePenguin, penguinGif, penguinProgression, penguinSingleColor],
        shortLore:
          'The Penguin is chill and steady. Finding loyalty, elegance, and joy in the coldest places.',
      },
      {
        id: 'lemur-lore',
        animalName: 'The Lemur',
        productId: 'lemur-bar',
        deepStory:
          'The Lemur is a curious spirit. Nimble, observant, and always in motion. It dances through life with instinctive agility and a sense of wonder, effortlessly shifting between quiet awareness and joyful energy. Deeply social and emotionally intelligent, the Lemur connects easily, trusts its gut, and finds delight in the small, sweet details.\n\nIts bar, a blend of banana, peanut butter, and milk chocolate, is a smooth, nostalgic harmony that reflects the Lemur’s playful personality and grounding charm. It’s for those who follow their intuition, value relationships, and aren’t afraid to mix comfort with adventure. Every bite is a moment of lighthearted wisdom.',
        traits: ['Curious', 'Playful', 'Instinctive', 'Relational'],
        animalLogo: lemurLogo,
        images: [homeLoreLemur, lemurGif, lemurProgression, lemurSingleColor],
        shortLore:
          'The Lemur is instinctive and joyful. Light on its feet, full of warmth, and led by curiosity.',
      },
      {
        id: 'panda-lore',
        animalName: 'The Panda',
        productId: 'panda-bar',
        deepStory:
          'The Panda is serene strength, soft in presence but firm in spirit. It moves through life with deliberate ease, valuing balance, solitude, and gentle joy. Rooted in calm, it finds power in stillness and patience, choosing peace over conflict and grace over noise.\n\nIts bar, green tea and white chocolate, is a soothing blend of elegance and sweetness. Subtle yet expressive, it reflects the Panda’s harmony between quietude and charisma. For those who appreciate nuance, self-care, and thoughtful indulgence, this is your flavor of inner strength.',
        traits: ['Peaceful', 'Gentle', 'Grounded', 'Graceful'],
        animalLogo: pandaLogo,
        images: [homeLorePanda, pandaGif, pandaProgression, pandaSingleColor],
        shortLore:
          'The Panda is soft but strong. It is a quiet soul that chooses calm, grace, and joyful presence.',
      },
      {
        id: 'skunk-lore',
        animalName: 'The Skunk',
        productId: 'skunk-bar',
        deepStory:
          'The Skunk is unapologetically itself. Bold yet composed, it doesn’t seek approval, it commands space through presence, not performance. It’s a master of contrast: soft and sweet when safe, defiant and powerful when tested. The Skunk teaches us to own our space without shrinking, and to find beauty in duality.\n\nIts bar, strawberry and rose milk chocolate, mirrors that dual nature: delicate, romantic, but with a confidence that’s unforgettable. Ideal for those who live authentically and aren’t afraid to be both tender and fierce.',
        traits: ['Confident', 'Unapologetic', 'Soft-spoken', 'Romantic'],
        animalLogo: skunkLogo,
        images: [homeLoreSkunk, skunkGif, skunkProgression, skunkSingleColor],
        shortLore:
          'The Skunk is gentle but fierce. It is a reminder that quiet confidence is its own kind of bold.',
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
        images: [hoodieDesignA],
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
        images: [hoodieDesignB],
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
        images: [hoodieDesignC],
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
        images: [hoodieDesignD],
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
