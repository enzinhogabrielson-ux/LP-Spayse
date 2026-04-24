const fs = require('fs');

function addDisclaimer(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  if (content.includes('REBRAND-LEGAL: revisar')) return; // Already added

  const disclaimer = `\n    {/* REBRAND-LEGAL: revisar - Substituição nominal realizada. Favor validar com o time jurídico. */}\n    <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-200 p-4 rounded-lg mb-8 text-sm">\n      <strong>Aviso de Atualização de Marca:</strong> Em abril de 2026, a marca XSCALES foi atualizada para <strong>Spayse</strong>. As condições jurídicas aqui descritas permanecem as mesmas, refletindo a nova identidade nominal.\n    </div>\n`;

  // Insert disclaimer after `<main ...>` or `<section ...>` containing the article/content
  // Looking for `<article`
  content = content.replace(/(<article[^>]*>)/, `$1${disclaimer}`);
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${filePath}`);
}

addDisclaimer('src/pages/Termos.tsx');
addDisclaimer('src/pages/Privacidade.tsx');
addDisclaimer('src/pages/Ouvidoria.tsx');
