const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
        arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

const files = getAllFiles('src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Colors
  content = content.replace(/#009FAD/gi, '#1E4FA0');
  content = content.replace(/0,159,173/g, '30,79,160');
  content = content.replace(/#FFC500/gi, '#C9A84C');
  content = content.replace(/255,197,0/g, '201,168,76');

  // Classes
  content = content.replace(/badge-teal/g, 'badge-sapphire');
  content = content.replace(/btn-teal/g, 'btn-sapphire');
  content = content.replace(/border-teal/g, 'border-sapphire');
  content = content.replace(/bg-teal/g, 'bg-sapphire');
  content = content.replace(/text-teal/g, 'text-sapphire');
  content = content.replace(/-teal/g, '-sapphire');
  content = content.replace(/teal-gold/g, 'sapphire-gold');

  // Make sure we replace instances in i18n if any
  content = content.replace(/xscales/g, 'spayse');
  content = content.replace(/Xscales/g, 'Spayse');
  content = content.replace(/XSCALES/g, 'SPAYSE');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated', file);
  }
});
console.log('Internal pages cleanup complete.');
