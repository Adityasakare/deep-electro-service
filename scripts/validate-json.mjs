import { readFileSync } from 'node:fs';
for (const file of ['src/assets/config/website-content.json','config/deployment.config.json']) {
  JSON.parse(readFileSync(file, 'utf8'));
  console.log(`Valid JSON: ${file}`);
}
