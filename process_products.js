
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read products.js
const productsPath = path.join(__dirname, 'src', 'data', 'products.js');
let productsContent = fs.readFileSync(productsPath, 'utf8');

// Read all images in src/assets/product
const imagesDir = path.join(__dirname, 'src', 'assets', 'product');
const imageFiles = fs.readdirSync(imagesDir);

// Create a map from product name (normalized) to import variable names and image files
const productImageMap = new Map();
const importLines = [];

// Function to convert filename to camelCase import name
function filenameToImportName(filename) {
  // Remove extension
  const nameWithoutExt = path.basename(filename, path.extname(filename));
  // Convert snake_case to camelCase
  return nameWithoutExt.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}

// Process all image files
imageFiles.forEach((file) => {
  const importName = filenameToImportName(file);
  importLines.push(`import ${importName} from '../assets/product/${file}';`);

  // Extract product name from filename (remove numbers at end like "_1", "_2", etc.)
  let productNamePart = path.basename(file, path.extname(file));
  productNamePart = productNamePart.replace(/_\d+$/, '');
  // Convert snake_case to space-separated and capitalize each word
  const productName = productNamePart.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  if (!productImageMap.has(productName)) {
    productImageMap.set(productName, []);
  }
  productImageMap.get(productName).push(importName);
});

console.log('Product image map:', productImageMap);
console.log('Import lines:', importLines);
