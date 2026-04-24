import fs from 'fs';

const p = './src/lib/i18n.ts';
let code = fs.readFileSync(p, 'utf-8');

const enPatch = {
  'footer.seguranca': 'Security',
  'footer.compliance': 'Compliance',
  'footer.privacidade': 'Privacy',
  'footer.termos': 'Terms & Conditions',
  'footer.ouvidoria': 'Ombudsman',
};

const esPatch = {
  'footer.seguranca': 'Seguridad',
  'footer.compliance': 'Cumplimiento',
  'footer.privacidade': 'Privacidad',
  'footer.termos': 'Términos y Condiciones',
  'footer.ouvidoria': 'Defensoría',
};

const enIndex = code.indexOf('const en: Translations');
const esIndex = code.indexOf('const es: Translations');

if (enIndex !== -1 && esIndex !== -1) {
  let ptBlock = code.substring(0, enIndex);
  let enBlock = code.substring(enIndex, esIndex);
  let esBlock = code.substring(esIndex);

  let newEn = "  // Footer extras";
  for (const [k, v] of Object.entries(enPatch)) {
    newEn += `\n  '${k}': '${v}',`;
  }
  
  let newEs = "  // Footer extras";
  for (const [k, v] of Object.entries(esPatch)) {
    newEs += `\n  '${k}': '${v}',`;
  }

  enBlock = enBlock.replace(/};\s*$/, newEn + '\n};\n\n');
  esBlock = esBlock.replace(/};\s*$/, newEs + '\n};\n\n');

  fs.writeFileSync(p, ptBlock + enBlock + esBlock, 'utf-8');
}
console.log('Extra footer appends done!');
