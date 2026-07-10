const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'products.js');
let content = fs.readFileSync(filePath, 'utf8');

// Remove the export and categories part, just get the products array
const productsStart = content.indexOf('export const products = [');
const productsEnd = content.lastIndexOf('];', productsStart) + 2;
const productsCode = content.slice(productsStart, productsEnd);

// Write to a temp file to require it
const tempFile = path.join(__dirname, 'temp_products.cjs');
fs.writeFileSync(tempFile, productsCode.replace('export const products =', 'module.exports ='));

const products = require(tempFile);
console.log('Products (id, name, category):');
products.forEach(p => console.log(`${p.id}: "${p.name}" (${p.category})`));
fs.unlinkSync(tempFile);
