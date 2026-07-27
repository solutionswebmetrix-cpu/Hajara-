// Import from products.json and categories.json instead!
import productsJson from './products.json';
import categoriesJson from './categories.json';

export const categories = categoriesJson;
export const products = productsJson;

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
