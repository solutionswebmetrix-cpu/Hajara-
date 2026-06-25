import growerHairOilImg from '../assets/product/Grower hair oil.png'
import growerSatImg from '../assets/product/Hajara Herbal Hair.png'
import vajrikaToothpasteImg from '../assets/product/Vajrika Ayurvedic toothpaste.png'
import kabjvidaPowderImg from '../assets/product/Kabjvida powde.png'
import kamaxiCapsuleImg from '../assets/product/Kamaxi capsule.png'
import irovitZImg from '../assets/product/Irovit -z.png'

export const products = [
  {
    id: 1,
    name: 'Grower Hair Oil',
    shortDescription: 'Premium Ayurvedic hair oil for hair growth and nourishment with natural herbal extracts.',
    image: growerHairOilImg,
    longDescription: 'Grower Hair Oil is a premium Ayurvedic formulation designed to promote healthy hair growth and nourishment from root to tip. Crafted with a blend of potent herbal ingredients, this oil penetrates deep into the hair follicles to strengthen hair, reduce hair fall, and improve overall hair texture. With regular use, it helps in making hair thicker, longer, and naturally shiny.',
    benefits: [
      'Stimulates hair growth and reduces hair fall',
      'Nourishes and strengthens hair follicles',
      'Prevents premature graying of hair',
      'Reduces dandruff and scalp irritation',
      'Improves hair texture and adds natural shine',
      'Soothes dry and itchy scalp'
    ],
    keyIngredients: [
      'Bhringraj (Eclipta alba): Known for promoting hair growth and preventing hair fall',
      'Amla (Emblica officinalis): Rich in Vitamin C, strengthens hair and boosts collagen',
      'Neem (Azadirachta indica): Fights dandruff and scalp infections',
      'Coconut Oil: Deeply moisturizes hair and scalp',
      'Brahmi (Bacopa monnieri): Improves scalp health and reduces stress-induced hair loss',
      'Almond Oil: Rich in Vitamin E, nourishes hair from within'
    ],
    usageInstructions: [
      'Take a small amount of Grower Hair Oil in your palms',
      'Gently massage into your scalp and hair using circular motions',
      'Leave it on for at least 1-2 hours, preferably overnight',
      'Wash off with a mild herbal shampoo',
      'Use 2-3 times a week for best results'
    ],
    suitableFor: 'Suitable for all hair types, including dry, oily, and combination hair. Safe for both men and women.',
    storageInformation: 'Store in a cool, dry place away from direct sunlight. Keep the bottle tightly closed when not in use to preserve the potency of herbal ingredients.'
  },
  {
    id: 2,
    name: 'Grower Sat',
    shortDescription: 'Herbal hair care product for strong, healthy, and shiny hair.',
    image: growerSatImg,
    longDescription: 'Grower Sat is a natural herbal powder formulation specially designed for complete hair care. This traditional Ayurvedic remedy helps in maintaining healthy hair and scalp, addressing common hair concerns like hair fall, dandruff, and dullness. It provides essential nutrients to hair follicles, promoting stronger and more resilient hair.',
    benefits: [
      'Strengthens hair roots and reduces hair fall',
      'Promotes healthy and shiny hair',
      'Controls dandruff and scalp infections',
      'Conditions and nourishes hair naturally',
      'Prevents premature graying',
      'Improves hair volume and thickness'
    ],
    keyIngredients: [
      'Amla: Rich in Vitamin C and antioxidants, boosts hair health',
      'Shikakai: Natural cleanser that gently cleanses hair without harsh chemicals',
      'Bhringraj: Promotes hair growth and prevents hair fall',
      'Neem: Antibacterial and antifungal properties for scalp health',
      'Hibiscus: Conditions hair and adds natural shine',
      'Mehndi: Improves hair texture and color'
    ],
    usageInstructions: [
      'Mix Grower Sat powder with water to form a smooth paste',
      'Apply evenly to wet hair and scalp',
      'Gently massage for a few minutes',
      'Leave on for 15-20 minutes',
      'Rinse thoroughly with water',
      'Use once or twice a week for optimal results'
    ],
    precautions: 'Avoid contact with eyes. If irritation occurs, discontinue use. For external use only. Store in a cool, dry place. Perform a patch test on a small area of skin before full use to check for any allergic reactions.'
  },
  {
    id: 3,
    name: 'Vajrika Toothpaste',
    price: '₹199',
    shortDescription: 'Ayurvedic toothpaste for healthy gums and fresh breath with natural ingredients.',
    image: vajrikaToothpasteImg,
    longDescription: 'Vajrika Toothpaste is a natural Ayurvedic formulation that provides complete oral care without any harsh chemicals. Made with a blend of traditional herbal ingredients, it helps maintain healthy teeth and gums, prevents cavities, and ensures long-lasting fresh breath. This herbal toothpaste gently cleanses teeth while protecting the enamel and promoting overall oral hygiene.',
    oralCareBenefits: [
      'Prevents cavities and tooth decay',
      'Strengthens gums and prevents bleeding',
      'Fights bad breath naturally',
      'Reduces plaque and tartar formation',
      'Maintains healthy oral pH balance',
      'Soothes gum inflammation and irritation'
    ],
    herbalIngredients: [
      'Neem: Powerful antibacterial properties to fight oral bacteria',
      'Clove: Relieves toothache and prevents cavities',
      'Peppermint: Provides fresh breath and cooling sensation',
      'Babool: Strengthens gums and prevents gum diseases',
      'Miswak: Natural tooth cleaner with antimicrobial properties',
      'Turmeric: Anti-inflammatory and antibacterial properties for oral health'
    ],
    usageDirections: [
      'Wet your toothbrush and apply a small amount of Vajrika Toothpaste',
      'Brush teeth thoroughly for 2-3 minutes in circular motions',
      'Clean all surfaces of teeth, gums, and tongue',
      'Rinse your mouth thoroughly with water',
      'Use twice daily, morning and night, for best results'
    ],
    storageInstructions: 'Store in a cool, dry place away from direct sunlight. Close the cap tightly after each use to prevent drying out. Keep out of reach of children. For best results, use within 12 months of opening.'
  },
  {
    id: 4,
    name: 'Kabjvida Powder',
    price: '₹299',
    shortDescription: 'Herbal churna for relief from constipation and better digestive health.',
    image: kabjvidaPowderImg,
    longDescription: 'Kabjvida Powder is a natural Ayurvedic laxative and digestive aid formulated to provide relief from constipation and promote healthy bowel movements. Made with a blend of herbal ingredients known for their digestive properties, this churna gently cleanses the digestive tract, relieves gas and bloating, and supports overall digestive health without any harsh side effects.',
    benefits: [
      'Relieves constipation naturally',
      'Promotes regular bowel movements',
      'Reduces gas, bloating, and indigestion',
      'Improves digestive health',
      'Cleanses the digestive tract gently',
      'Supports healthy gut function'
    ],
    keyIngredients: [
      'Haritaki (Terminalia chebula): Traditional digestive tonic and laxative',
      'Senna: Natural purgative for relieving constipation',
      'Ajwain (Carom Seeds): Reduces gas and improves digestion',
      'Saunf (Fennel Seeds): Soothes the digestive system',
      'Jeera (Cumin Seeds): Aids in digestion and reduces bloating',
      'Hing (Asafoetida): Relieves gas and stomach discomfort'
    ],
    howToUse: [
      'Take 1-2 teaspoons of Kabjvida Powder with warm water or milk',
      'Consume preferably at bedtime for best results',
      'For best results, take it regularly for 2-4 weeks',
      'Do not exceed the recommended dosage',
      'Consult a healthcare professional before use if you have any medical conditions'
    ],
    storageInformation: 'Store in a cool, dry place away from direct sunlight and moisture. Keep the container tightly closed after each use. Keep out of reach of children. Do not use if the seal is broken.'
  },
  {
    id: 5,
    name: 'Kamaxi Capsule',
    price: '₹599',
    shortDescription: 'Advanced herbal capsules for overall wellness, strength, and vitality.',
    image: kamaxiCapsuleImg,
    longDescription: 'Kamaxi Capsules are a premium Ayurvedic formulation designed to promote overall wellness, strength, and vitality. Made with a potent blend of natural herbs and ingredients, these capsules help in boosting energy levels, improving stamina, and enhancing overall physical performance. They are specially formulated to support the body\'s natural systems and promote a healthy and active lifestyle.',
    benefits: [
      'Boosts energy levels and improves stamina',
      'Enhances physical strength and vitality',
      'Supports overall health and wellness',
      'Improves concentration and mental clarity',
      'Reduces stress and fatigue',
      'Strengthens the immune system'
    ],
    ingredients: [
      'Ashwagandha (Withania somnifera): Adaptogenic herb that reduces stress and improves stamina',
      'Shatavari (Asparagus racemosus): Supports overall wellness and vitality',
      'Gokshura (Tribulus terrestris): Improves strength and stamina',
      'Safed Musli (Chlorophytum borivilianum): Traditional vitality booster',
      'Bala (Sida cordifolia): Strengthens the body and improves energy',
      'Kapikacchu (Mucuna pruriens): Supports nervous system health'
    ],
    usageInstructions: [
      'Take 1 capsule twice daily with warm water or milk',
      'For best results, take one capsule in the morning after breakfast and one in the evening after dinner',
      'Continue use regularly for 2-3 months for long-term benefits',
      'Do not exceed the recommended dosage',
      'Consult a healthcare professional before use if you have any medical conditions or are taking other medications'
    ],
    precautions: 'Not recommended for children, pregnant or nursing women without consulting a healthcare professional. Store in a cool, dry place away from direct sunlight. Keep out of reach of children. If you experience any adverse effects, discontinue use and consult a doctor.'
  },
  {
    id: 6,
    name: 'Irovit-Z',
    shortDescription: 'Premium Ayurvedic syrup for energy, vitality, and improved immunity.',
    image: irovitZImg,
    longDescription: 'Irovit-Z is a premium Ayurvedic syrup formulated to boost energy, vitality, and immunity. This tonic is packed with essential nutrients and herbal extracts that help in maintaining overall health and well-being. Regular consumption helps in improving energy levels, supporting the immune system, and enhancing the body\'s natural defense mechanisms. It is perfect for individuals looking for a natural way to stay healthy and active.',
    benefits: [
      'Boosts natural energy levels and reduces fatigue',
      'Strengthens the immune system',
      'Improves overall vitality and well-being',
      'Provides essential nutrients for the body',
      'Supports healthy blood formation',
      'Enhances overall physical performance'
    ],
    ingredients: [
      'Amla: Rich in Vitamin C, boosts immunity and acts as an antioxidant',
      'Ashwagandha: Adaptogenic herb that helps the body cope with stress',
      'Shatavari: Nourishes and revitalizes the body',
      'Dates: Natural source of energy and essential minerals',
      'Honey: Natural sweetener with numerous health benefits',
      'Iron-rich herbs: Support healthy blood formation'
    ],
    usageDirections: [
      'Adults: Take 2 teaspoons (10ml) twice daily',
      'Children: Take 1 teaspoon (5ml) twice daily or as directed by a physician',
      'Take preferably after meals for better absorption',
      'Shake the bottle well before each use',
      'Continue use regularly for best results'
    ],
    storageInformation: 'Store in a cool, dry place away from direct sunlight. Do not refrigerate. Keep the bottle tightly closed after each use. Keep out of reach of children. Use within the shelf life mentioned on the bottle.'
  }
]

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id))
}
