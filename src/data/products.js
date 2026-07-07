
// Import ALL available images
import memoryKind1 from '../assets/product/Ayurvedic brain tonic.png';
import memoryKind2 from '../assets/product/Ayurvedic brain tonic 1.png';
import vajrikaToothpaste from '../assets/product/Vajrika Ayurvedic toothpaste.png';
import carelivSyrup from '../assets/product/Careliv liver disorder syrup.png';
import charmolin1 from '../assets/product/Charmolin herbal restorative.png';
import charmolin2 from '../assets/product/Charmolin herbal restorative 1.png';
import charmolin3 from '../assets/product/Charmolin herbal restorative 2.png';
import gacidSyrup from '../assets/product/Gacid syrup.png';
import growerHairOil from '../assets/product/Grower hair oil.png';
import growerShampoo from '../assets/product/Hajara Herbal Hair.png';
import appezyme from '../assets/product/Hajara Appezyme digestive syrup.png';
import faceWash from '../assets/product/Herbal face wash with turmeric and aloe.png';
import shilajit1 from '../assets/product/Himalayan Shilajit.png';
import shilajit2 from '../assets/product/Himalayan Shilajit 1.png';
import irovitz1 from '../assets/product/Irovitz syrup with herbal ingredients.png';
import irovitz2 from '../assets/product/Irovitz syrup with herbal ingredients 1.png';
import kabjvida from '../assets/product/Kabjvida powde.png';
import kamaxi from '../assets/product/Kamaxi capsule.png';
import mrOrtho from '../assets/product/Mr.Ortho pain oil.png';
import puspanjali1 from '../assets/product/Puspanjali Ayurvedic Medicine syrup.png';
import puspanjali2 from '../assets/product/Puspanjali Ayurvedic Medicine syrup 1.png';
import puspanjali3 from '../assets/product/Puspanjali Ayurvedic Medicine syrup 2.png';
import puspanjali4 from '../assets/product/Puspanjali Ayurvedic Medicine syrup 3.png';

// ALL 11 Categories
export const categories = [
  'Vati & Gutika',
  'Guggul Formulations',
  'Churna',
  'Topical Application Powders',
  'Ayurvedic Tooth Powders',
  'Advanced Brain Tonics & Mineral Rasayanas',
  'Loh & Mandur',
  'Pak, Avaleha & Murabba',
  'Sharbat',
  'Medicated Taila',
  'Single Herb Powders'
];

// Helper function to create product objects
const createProduct = (id, name, category, desc, uses, dosage, img = null, gallery = []) => ({
  id,
  name,
  category,
  shortDescription: desc,
  description: desc,
  uses,
  dosage,
  image: img,
  gallery: gallery.length ? gallery : (img ? [img] : [])
});

let idCounter = 1;

// ================== CATEGORY 1: Vati & Gutika ==================
const vatiGutikaProducts = [
  'Viryashodhan Vati', 'Virya Stambhan Vati', 'Swasroggantak Vati', 'Hingul Vati',
  'Karanjadi Vati', 'Karpooradi Vati', 'Kanth Sudhar Vati', 'Kashisadi Vati',
  'Gandhak Vati', 'Chandraprabha Vati', 'Jwarari Vati', 'Dhananjay Vati',
  'Baljiwan Vati', 'Shilajatu Vati', 'Histeriyanashak Vati', 'Hingwadi Vati',
  'Panchansudha Vati', 'Lavanrasayan Vati', 'Raktarodhak Vati', 'Rasraj Vati',
  'Sarvtobhadra Vati', 'Vrakkshoolantak Vati', 'Ambarsundari Vati', 'Arogyavardhani Vati',
  'Jawahar Mohra', 'Agnivardhak Vati', 'Amritprabha Vati', 'Arshoghani Vati',
  'Amvatari Vati', 'Elad Vati', 'Kankayan Vati', 'Kas Vati',
  'Kutajghan Vati', 'Kaharwa Vati', 'Khadiradi Vati', 'Raj Vati',
  'Chandanadi Vati', 'Chitrakadi Vati', 'Prabhakar Vati', 'Boladi Vati',
  'Byoshadi Vati', 'Vradhibadhika Vati', 'Vradhihari Vatika', 'Brahmi Vati',
  'Makardwaj Vati', 'Madhumeh Nashni Gutika', 'Mahabhra Vati', 'Mahasankh Vati',
  'Mehmudgar Vati', 'Rajpravartani Vati', 'Ratanprabha Vati', 'Rechak Vati',
  'Lavangadi Vati', 'Lashunadi Vati', 'Sankh Vati', 'Shukramatrika Vati',
  'Shulvajrini Vati', 'Sarpgandhaghan Vati', 'Sanjivani Vati', 'Saubhagya Vati',
  'Kshuda Vati'
].map(name => createProduct(idCounter++, name, 'Vati & Gutika',
  `Ayurvedic ${name} for traditional wellness support.`,
  ['Supports overall health', 'Traditional formulation', 'Natural ingredients'],
  ['Take as directed by Ayurvedic physician', 'Follow recommended dosage']
));

// ================== CATEGORY 2: Guggul Formulations ==================
const guggulProducts = [
  'Amritadi Guggul', 'Abha Guggul', 'Kanchanar Guggul', 'Kaishor Guggul',
  'Gokshuradi Guggul', 'Trayodashang Guggul', 'Triphala Guggul', 'Panchatikta Ghrita Guggul',
  'Punarnavadi Guggul', 'Panchamrit Loh Guggul', 'Mahayograj Guggul', 'Yograj Guggul',
  'Rasnadi Guggul', 'Lakshadi Guggul', 'Singhnad Guggul', 'Brahad Singhnad Guggul',
  'Haritkyadi Guggul', 'Agastya Guggul', 'Ashwagandhadi Guggul', 'Medohar Guggul'
].map(name => createProduct(idCounter++, name, 'Guggul Formulations',
  `Ayurvedic ${name} with Guggul base.`,
  ['Supports joint & muscle health', 'Traditional Guggul formulation', 'Natural ingredients'],
  ['Take 1-2 tablets twice daily', 'Or as directed by physician']
));

// ================== CATEGORY 3: Churna ==================
const churnaProducts = [
  'Agnimukh Churna', 'Ajmodadi Churna', 'Avipattikar Churna', 'Eladi Churna',
  'Kamdev Churna', 'Gokshuradi Churna', 'Chitrakadi Churna', 'Chopchinyadi Churna',
  'Jatiphaladi Churna', 'Talisadi Churna', 'Triphala Churna', 'Dantprabha Churna',
  'Dadimashtaka Churna', 'Dhatu Pushti Churna', 'Namak Sulemani Churna', 'Narasimha Churna',
  'Narayan Churna', 'Nimbadi Churna', 'Panchsakar Churna', 'Panchsam Churna',
  'Pradarnashak Churna', 'Punarnava Churna', 'Pushyanuga Churna', 'Vajrakshar Churna',
  'Bakuchi Churna', 'Balachaturbhadra Churna', 'Bilwadi Churna', 'Vidaryadi Churna',
  'Lavanbhaskar Churna', 'Madanprakash Churna', 'Manjisthadi Churna', 'Marichadi Churna',
  'Malshodhak Churna', 'Mahakhand Churna', 'Swadishta Virechan Churna', 'Mahasudarshan Churna',
  'Lavangadi Churna', 'Lal Churna', 'Satpatradi Churna', 'Satavaryadi Churna',
  'Shivakshar Pachan Churna', 'Virechan Churna', 'Saraswata Churna', 'Sitopaladi Churna',
  'Hingvastak Churna', 'Antravradhihar Churna', 'Amritadi Churna', 'Chandanadi Churna',
  'Chintamani Churna', 'Bhasmaknashak Churna', 'Mutravirechan Churna', 'Raj Pravartak Churna',
  'Vasadi Churna', 'Viryashodhan Churna', 'Madhumehdaman Churna'
].map(name => createProduct(idCounter++, name, 'Churna',
  `Ayurvedic herbal powder ${name} for wellness.`,
  ['Traditional herbal powder', 'Natural ingredients', 'Supports digestive health'],
  ['Take 3-5g with warm water', 'Or as directed']
));

// ================== CATEGORY 4: Topical Application Powders ==================
const topicalPowdersProducts = [
  'Dashang Lep Churna', 'Pamari Pralep Churna'
].map(name => createProduct(idCounter++, name, 'Topical Application Powders',
  `Topical herbal powder ${name} for external use.`,
  ['For external application', 'Supports skin health', 'Natural ingredients'],
  ['Apply externally as directed', 'For topical use only']
));

// ================== CATEGORY 5: Ayurvedic Tooth Powders ==================
const toothPowdersProducts = [
  'Dantmanjan Lal', 'Dantdoshhar Manjan', 'Dantrashak Manjan', 'Dantshoolhar Manjan'
].map(name => createProduct(idCounter++, name, 'Ayurvedic Tooth Powders',
  `Ayurvedic tooth powder ${name} for oral care.`,
  ['Cleans teeth & gums', 'Freshens breath', 'Natural ingredients'],
  ['Use daily for brushing', 'Follow usage instructions']
));

// ================== CATEGORY 6: Advanced Brain Tonics & Mineral Rasayanas ==================
const brainRasayanasProducts = [
  'Mastiskbal Vardhak Churna', 'Navjeevan Ras', 'Kamchudamani Ras'
].map(name => createProduct(idCounter++, name, 'Advanced Brain Tonics & Mineral Rasayanas',
  `Ayurvedic ${name} for brain & vitality support.`,
  ['Supports cognitive function', 'Promotes vitality', 'Traditional rasayana'],
  ['Take as directed by physician', 'Follow recommended dosage']
));

// ================== CATEGORY 7: Loh & Mandur ==================
const lohMandurProducts = [
  'Agnimukh Loh', 'Astadashang Loh', 'Amritavaran Loh', 'Guduchiyadi Loh',
  'Tara Mandur', 'Triphaladi Loh', 'Dhatri Loh', 'Pradarantak Loh',
  'Pipalyadi Loh', 'Punarnavadi Mandur', 'Panchamrit Lohmandur', 'Vishamjwarantak Loh',
  'Vidangadi Loh', 'Medohar Vidangadi Loh', 'Yograj Loh', 'Rohitak Loh',
  'Shilajitwadi Loh', 'Shothari Mandur', 'Saptamrit Loh', 'Sarvjwarhar Loh'
].map(name => createProduct(idCounter++, name, 'Loh & Mandur',
  `Ayurvedic ${name} for traditional support.`,
  ['Supports blood health', 'Traditional formulation', 'Natural ingredients'],
  ['Take as directed', 'Follow physician advice']
));

// ================== CATEGORY 8: Pak, Avaleha & Murabba ==================
const pakAvalehaProducts = [
  'Amritprash Avaleha', 'Ashwagandha Pak', 'Aamr Pak', 'Aadrak Pak',
  'Amaltas Pak', 'Amaltas Ki Chatani', 'Amla Murabba', 'Khameere Gajwan',
  'Gokharu Pak', 'Chitrak Haritaki', 'Chyawanprash Avaleha', 'Chuhara Pak',
  'Jeevan Kalp', 'Badam Pak', 'Vasa Avaleha', 'Majun Falsafa',
  'Musali Pak', 'Lauh-e-Sapistan', 'Supari Pak', 'Haridra Khand',
  'Saubhagya Sunthi Pak', 'Avale Ka Murabba'
].map(name => createProduct(idCounter++, name, 'Pak, Avaleha & Murabba',
  `Ayurvedic ${name} for vitality & wellness.`,
  ['Supports overall vitality', 'Traditional formulation', 'Tasteful & healthy'],
  ['Take 1-2 tsp daily', 'Or as directed']
));

// ================== CATEGORY 9: Sharbat ==================
const sharbatProducts = [
  'Adusa Sharbat', 'Unnab Sharbat', 'Gaozaban Sharbat', 'Anar Sharbat',
  'Kevda Sharbat', 'Khus Sharbat', 'Gul Banafsha Sharbat', 'Gulab Sharbat',
  'Chandan Sharbat', 'Neebu Sharbat', 'Bel Sharbat', 'Santara Sharbat',
  'Rakta Shodhak Sharbat', 'Brahmi Sharbat', 'Shankhpushpi Sharbat', 'Adrak Sharbat'
].map(name => createProduct(idCounter++, name, 'Sharbat',
  `Refreshing Ayurvedic ${name} for wellness.`,
  ['Cooling & refreshing', 'Supports overall health', 'Natural ingredients'],
  ['Mix with water & drink', 'Follow dosage instructions']
));

// ================== CATEGORY 10: Medicated Taila ==================
const medicatedTailaProducts = [
  'Jaitoon Oil', 'Almond Oil', 'Croton Seed Oil', 'Clove Oil',
  'Castor Oil', 'Ajwain Oil', 'Zingiber Oil', 'Jatamansi Oil',
  'Cardamom Oil', 'Cinnamon Bark Oil', 'Karanj Oil', 'Neem Oil',
  'Bakuchi Oil', 'Terpen Oil', 'Kapasbeej Oil', 'Chalmoogra Oil',
  'Tuvrak Oil'
].map(name => createProduct(idCounter++, name, 'Medicated Taila',
  `Ayurvedic medicated oil ${name} for external use.`,
  ['For external application', 'Supports skin & hair health', 'Natural oil'],
  ['Apply externally as directed', 'Massage gently']
));

// ================== CATEGORY 11: Single Herb Powders ==================
const singleHerbProducts = [
  'Multani Mitti', 'Harad', 'Baheda', 'Amla',
  'Methi', 'Mulathi', 'Chirayta', 'Chandan',
  'Giloy', 'Bel', 'Neem', 'Kachnar',
  'Musali', 'Satavari', 'Ashwagandha', 'Neelni',
  'Brahmi', 'Tulsi', 'Jamun Seed', 'Arjuna',
  'Reetha', 'Garbhkar', 'Shilajit', 'Alsi',
  'Ishabagol Husk', 'Henna (Mehandi)', 'Sanay'
].map(name => createProduct(idCounter++, name, 'Single Herb Powders',
  `Pure ${name} single herb powder.`,
  ['Pure single herb', 'Natural & organic', 'Traditional wellness support'],
  ['Take as directed', 'Follow usage instructions']
));

// ================== EXISTING 15 PRODUCTS (with FULL IMAGES RESTORED) ==================
const existingProducts = [
  createProduct(idCounter++, 'Memory Kind Gold Avaleh', 'Pak, Avaleha & Murabba',
    'Premium Ayurvedic avaleh for memory and brain health',
    ['Supports memory and concentration', 'Promotes cognitive function', 'Helps in maintaining brain health', 'Made with traditional Ayurvedic ingredients'],
    ['Take 1-2 teaspoons daily', 'Or as directed by Ayurvedic physician'],
    memoryKind1, [memoryKind1, memoryKind2]
  ),
  createProduct(idCounter++, 'Vajrika Ayurvedic Oral Care Toothpaste', 'Ayurvedic Tooth Powders',
    'Ayurvedic toothpaste for complete oral care',
    ['Cleans teeth and gums', 'Freshens breath', 'Maintains oral health', 'Ayurvedic formula'],
    ['Use twice daily', 'Brush with a soft brush'],
    vajrikaToothpaste, [vajrikaToothpaste]
  ),
  createProduct(idCounter++, 'Careliv Liver Syrup', 'Sharbat',
    'Syrup for supporting liver health',
    ['Supports liver function', 'Helps in detoxification', 'Maintains liver health', 'Natural ingredients'],
    ['Take 10-15 ml twice daily', 'Or as directed by physician'],
    carelivSyrup, [carelivSyrup]
  ),
  createProduct(idCounter++, 'Charmolin Syrup', 'Sharbat',
    'Herbal restorative syrup for wellness',
    ['Promotes overall wellness', 'Supports vitality', 'Herbal formulation', 'Traditional Ayurvedic blend'],
    ['Take 10-15 ml twice daily', 'Or as directed by physician'],
    charmolin1, [charmolin1, charmolin2, charmolin3]
  ),
  createProduct(idCounter++, 'Gacid Gastric Syrup', 'Sharbat',
    'Syrup for gastric and digestive health',
    ['Supports digestive health', 'Relieves gastric discomfort', 'Promotes digestion', 'Natural formula'],
    ['Take 10-15 ml as needed', 'Or as directed by physician'],
    gacidSyrup, [gacidSyrup]
  ),
  createProduct(idCounter++, 'Grower Hair Oil', 'Medicated Taila',
    'Ayurvedic hair oil for hair care',
    ['Nourishes hair and scalp', 'Supports healthy hair', 'Natural oil blend'],
    ['Apply to scalp and massage gently', 'Leave for 30 mins or overnight'],
    growerHairOil, [growerHairOil]
  ),
  createProduct(idCounter++, 'Grower Herbal Hair Cleanser Shampoo', 'Medicated Taila',
    'Herbal shampoo for hair cleansing',
    ['Cleanses hair and scalp', 'Herbal formula', 'Maintains hair health'],
    ['Wet hair, lather, massage and rinse', 'Use as needed'],
    growerShampoo, [growerShampoo]
  ),
  createProduct(idCounter++, 'Appezyme Digestive Syrup', 'Sharbat',
    'Digestive syrup for better digestion',
    ['Supports digestion', 'Improves appetite', 'Herbal digestive aid'],
    ['Take 10-15 ml before meals', 'Or as directed'],
    appezyme, [appezyme]
  ),
  createProduct(idCounter++, 'Hajara Multicare Face Wash', 'Topical Application Powders',
    'Herbal face wash for clean skin',
    ['Cleanses skin', 'Maintains skin health', 'Natural ingredients'],
    ['Use twice daily', 'Massage on face and rinse'],
    faceWash, [faceWash]
  ),
  createProduct(idCounter++, 'Himalayan Shilajit Resin', 'Advanced Brain Tonics & Mineral Rasayanas',
    'Pure Himalayan Shilajit for vitality',
    ['Supports vitality and strength', 'Natural energy booster', 'Pure Himalayan Shilajit'],
    ['Take a pea-sized portion daily', 'Dissolve in water or milk'],
    shilajit1, [shilajit1, shilajit2]
  ),
  createProduct(idCounter++, 'Irovitz Syrup', 'Sharbat',
    'Herbal syrup for blood and vitality',
    ['Supports blood health', 'Promotes vitality', 'Herbal ingredients'],
    ['Take 10-15 ml twice daily', 'Or as directed'],
    irovitz1, [irovitz1, irovitz2]
  ),
  createProduct(idCounter++, 'Kabjvida Powder', 'Churna',
    'Ayurvedic powder for digestive health',
    ['Supports digestion', 'Maintains gut health', 'Ayurvedic powder'],
    ['Take 3-5 g with warm water', 'Or as directed'],
    kabjvida, [kabjvida]
  ),
  createProduct(idCounter++, 'Kamaxi Capsule', 'Vati & Gutika',
    'Herbal capsules for wellness',
    ['Supports overall wellness', 'Herbal capsules', 'Natural ingredients'],
    ['Take 1-2 capsules twice daily', 'Or as directed by physician'],
    kamaxi, [kamaxi]
  ),
  createProduct(idCounter++, 'Mr. Ortho Pain Oil', 'Medicated Taila',
    'Oil for joint and muscle pain',
    ['Relieves joint and muscle pain', 'Supports joint health', 'Natural oil'],
    ['Apply to affected area and massage', 'Use as needed'],
    mrOrtho, [mrOrtho]
  ),
  createProduct(idCounter++, 'Puspanjali Syrup', 'Sharbat',
    'Ayurvedic syrup for women\'s health',
    ['Supports women\'s health', 'Maintains overall wellness', 'Ayurvedic formula'],
    ['Take 10-15 ml twice daily', 'Or as directed'],
    puspanjali1, [puspanjali1, puspanjali2, puspanjali3, puspanjali4]
  )
];

// Combine ALL products
export const products = [
  ...vatiGutikaProducts,
  ...guggulProducts,
  ...churnaProducts,
  ...topicalPowdersProducts,
  ...toothPowdersProducts,
  ...brainRasayanasProducts,
  ...lohMandurProducts,
  ...pakAvalehaProducts,
  ...sharbatProducts,
  ...medicatedTailaProducts,
  ...singleHerbProducts,
  ...existingProducts
];

// Helper functions
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getRelatedProducts = (product) => {
  return products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
};
