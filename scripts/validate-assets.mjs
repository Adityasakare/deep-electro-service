import { existsSync, readFileSync } from 'node:fs';
const content = JSON.parse(readFileSync('src/assets/config/website-content.json', 'utf8'));
const routes = new Set(['/', '/about', '/products', '/applications', '/zen-bundle', '/contact']);
for (const item of content.navigation) {
  if (!routes.has(item.path)) throw new Error(`Navigation path is not registered: ${item.path}`);
}
for (const product of content.products) {
  const imagePath = `src/assets/images/${product.image}`;
  if (!existsSync(imagePath)) throw new Error(`Missing image for ${product.id}: ${imagePath}`);
  if (product.document && !existsSync(`src/assets/documents/${product.document}`)) {
    throw new Error(`Missing PDF for ${product.id}: ${product.document}`);
  }
}
console.log('Navigation, product image and technical PDF references verified.');
