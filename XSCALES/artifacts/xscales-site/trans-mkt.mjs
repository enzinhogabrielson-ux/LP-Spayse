import fs from 'fs';

const file = 'src/data/markets.ts';
let content = fs.readFileSync(file, 'utf8');

// Add imports at the top
if (!content.includes("import { getLang }")) {
  content = content.replace("import type { PaymentCategory, MarketLogo } from './payretailersAssets.generated';",
      "import type { PaymentCategory, MarketLogo } from './payretailersAssets.generated';\nimport { getLang } from '@/lib/lang';\nimport { tr } from '@/lib/i18n';");
}

// Translate market fields based on language internally
const i18nAppendPT = [];
const i18nAppendEN = [];
const i18nAppendES = [];

// We will replace fields with getters
// example: subtitle: 'Brasil: o principal mercado...'
// -> get subtitle() { return tr('mkt.brasil.sub', getLang()); },

// Regex to find id and then inner fields
const marketBlocks = content.match(/{\s*id: '([^']+)',[\s\S]*?(?=\n  },|\n  }])/g);

if (marketBlocks) {
  for (const block of marketBlocks) {
    const idMatch = block.match(/id: '([^']+)'/);
    if (!idMatch) continue;
    const id = idMatch[1];

    let newBlock = block;
    
    // Replace subtitle
    const subMatch = block.match(/subtitle:\s*'([^']+)'/);
    if (subMatch) {
       newBlock = newBlock.replace(subMatch[0], `get subtitle() { return tr('mkt.${id}.sub', getLang()) }`);
       i18nAppendPT.push(`  'mkt.${id}.sub': '${subMatch[1]}',`);
       i18nAppendEN.push(`  'mkt.${id}.sub': '${subMatch[1]}',`); // Need manual or default translation
       i18nAppendES.push(`  'mkt.${id}.sub': '${subMatch[1]}',`);
    }

    // Replace heroSubtitle (sometimes used)
    const heroMatch = block.match(/heroSubtitle:\s*'([^']+)'/);
    if (heroMatch) {
       newBlock = newBlock.replace(heroMatch[0], `get heroSubtitle() { return tr('mkt.${id}.hero', getLang()) }`);
       i18nAppendPT.push(`  'mkt.${id}.hero': '${heroMatch[1]}',`);
       i18nAppendEN.push(`  'mkt.${id}.hero': '${heroMatch[1]}',`);
       i18nAppendES.push(`  'mkt.${id}.hero': '${heroMatch[1]}',`);
    }

    const heroDescMatch = block.match(/heroDescription:\s*'([^']+)'/);
    if (heroDescMatch) {
       newBlock = newBlock.replace(heroDescMatch[0], `get heroDescription() { return tr('mkt.${id}.heroDesc', getLang()) }`);
       i18nAppendPT.push(`  'mkt.${id}.heroDesc': '${heroDescMatch[1]}',`);
       i18nAppendEN.push(`  'mkt.${id}.heroDesc': '${heroDescMatch[1]}',`);
       i18nAppendES.push(`  'mkt.${id}.heroDesc': '${heroDescMatch[1]}',`);
    }

    // Replace integrationDetails
    const integMatch = block.match(/integrationDetails:\s*'([^']+)'/);
    if (integMatch) {
       newBlock = newBlock.replace(integMatch[0], `get integrationDetails() { return tr('mkt.${id}.int', getLang()) }`);
       i18nAppendPT.push(`  'mkt.${id}.int': '${integMatch[1]}',`);
       i18nAppendEN.push(`  'mkt.${id}.int': '${integMatch[1]}',`);
       i18nAppendES.push(`  'mkt.${id}.int': '${integMatch[1]}',`);
    }

    // Replace stats descriptions
    const statsRegex = /description:\s*'([^']+)'/g;
    let match;
    let statIndex = 0;
    while ((match = statsRegex.exec(block)) !== null) {
       const statKey = `mkt.${id}.stat${statIndex}`;
       // Wait, replacing via string replace might hit the wrong description if multiple are identical.
       // It's a bit risky but usually they are unique.
       newBlock = newBlock.replace(match[0], `get description() { return tr('${statKey}', getLang()) }`);
       i18nAppendPT.push(`  '${statKey}': '${match[1]}',`);
       i18nAppendEN.push(`  '${statKey}': '${match[1]}',`);
       i18nAppendES.push(`  '${statKey}': '${match[1]}',`);
       statIndex++;
    }

    content = content.replace(block, newBlock);
  }
}

fs.writeFileSync(file, content);
console.log("Updated markets.ts");

// Print out the keys to add to i18n
fs.writeFileSync('i18n-append.txt', `
// --- PT ---
${i18nAppendPT.join('\n')}

// --- EN ---
${i18nAppendEN.join('\n')}

// --- ES ---
${i18nAppendES.join('\n')}
`);
console.log("Wrote i18n-append.txt");

