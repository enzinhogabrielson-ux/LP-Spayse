const fs = require('fs');
const files = [
  'src/index.css',
  'src/lib/i18n.ts',
  'src/components/sections/CalculatorSection.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/xscales/g, 'spayse');
  content = content.replace(/Xscales/g, 'Spayse');
  fs.writeFileSync(file, content);
  console.log('Replaced in ' + file);
});
