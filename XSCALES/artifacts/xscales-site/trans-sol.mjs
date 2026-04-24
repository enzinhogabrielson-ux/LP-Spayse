import fs from 'fs';

const file = 'src/data/solutions.ts';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes("import { getLang }")) {
  content = content.replace("export interface Solution {", 
  "import { getLang } from '@/lib/lang';\nimport { tr } from '@/lib/i18n';\n\nexport interface Solution {");
}

const ptAdditions = [];
const enAdditions = [];
const esAdditions = [];

const blocks = content.match(/{\s*id: '([^']+)',[\s\S]*?(?=\n  },|\n  }])/g);
if (blocks) {
  for (const block of blocks) {
    const idMatch = block.match(/id: '([^']+)'/);
    if (!idMatch) continue;
    const id = idMatch[1];
    let newBlock = block;

    const matchTitle = block.match(/title:\s*'([^']+)'/);
    if (matchTitle) {
      newBlock = newBlock.replace(matchTitle[0], `get title() { return tr('sol.${id}.title', getLang()) }`);
      ptAdditions.push(`  'sol.${id}.title': '${matchTitle[1]}',`);
      enAdditions.push(`  'sol.${id}.title': '${matchTitle[1]}',`);
      esAdditions.push(`  'sol.${id}.title': '${matchTitle[1]}',`);
    }

    const matchDesc = block.match(/description:\s*'([^']+)'/);
    if (matchDesc) {
      newBlock = newBlock.replace(matchDesc[0], `get description() { return tr('sol.${id}.desc', getLang()) }`);
      ptAdditions.push(`  'sol.${id}.desc': '${matchDesc[1]}',`);
      enAdditions.push(`  'sol.${id}.desc': '${matchDesc[1]}',`);
      esAdditions.push(`  'sol.${id}.desc': '${matchDesc[1]}',`);
    }

    const matchLongDesc = block.match(/longDescription:\s*'([^']+)'/);
    if (matchLongDesc) {
      newBlock = newBlock.replace(matchLongDesc[0], `get longDescription() { return tr('sol.${id}.longDesc', getLang()) }`);
      ptAdditions.push(`  'sol.${id}.longDesc': '${matchLongDesc[1]}',`);
      enAdditions.push(`  'sol.${id}.longDesc': '${matchLongDesc[1]}',`);
      esAdditions.push(`  'sol.${id}.longDesc': '${matchLongDesc[1]}',`);
    }

    // Features array
    const featuresMatch = block.match(/features:\s*\[([\s\S]*?)\]/);
    if (featuresMatch) {
       const featureLines = featuresMatch[1].match(/'([^']+)'/g);
       if (featureLines) {
           let i = 0;
           for (const f of featureLines) {
               const rawStr = f.replace(/'/g, '');
               ptAdditions.push(`  'sol.${id}.f${i}': '${rawStr}',`);
               enAdditions.push(`  'sol.${id}.f${i}': '${rawStr}',`);
               esAdditions.push(`  'sol.${id}.f${i}': '${rawStr}',`);
               i++;
           }
           const newFeatures = `get features() { return [\n` + featureLines.map((_, idx) => `      tr('sol.${id}.f${idx}', getLang()),`).join('\n') + `\n    ] }`;
           newBlock = newBlock.replace(featuresMatch[0], newFeatures);
       }
    }

    content = content.replace(block, newBlock);
  }
}

fs.writeFileSync(file, content);
console.log("Updated solutions.ts");

let i18n = fs.readFileSync('src/lib/i18n.ts', 'utf8');
i18n = i18n.replace("'inst.talkTeam': 'Fale com nosso time',", "'inst.talkTeam': 'Fale com nosso time',\n" + ptAdditions.join('\n'));
i18n = i18n.replace("'inst.talkTeam': 'Talk to our team',", "'inst.talkTeam': 'Talk to our team',\n" + enAdditions.join('\n'));
i18n = i18n.replace("'inst.talkTeam': 'Hablar con nuestro equipo',", "'inst.talkTeam': 'Hablar con nuestro equipo',\n" + esAdditions.join('\n'));

fs.writeFileSync('src/lib/i18n.ts', i18n);
console.log("Updated i18n.ts for solutions");
