import { readFileSync, existsSync, writeFileSync, mkdirSync } from 'node:fs';
const config=JSON.parse(readFileSync('config/deployment.config.json','utf8'));
const {username,repository}=config.github;
if(!username||username.startsWith('YOUR_')||!repository||repository.startsWith('YOUR_')) throw new Error('Set github.username and github.repository in config/deployment.config.json');
const rootRepo=repository===`${username}.github.io`;
const baseHref = config.domains.useCustomDomain
  ? '/'
  : rootRepo
    ? '/'
    : `/${repository}/`;
const domain=config.domains.useCustomDomain?config.domains.customDomain:'';
writeFileSync('deployment.env',`BASE_HREF=${baseHref}\nCUSTOM_DOMAIN=${domain}\n`);
console.log(`Base href: ${baseHref}; custom domain: ${domain||'(not configured)'}`);
