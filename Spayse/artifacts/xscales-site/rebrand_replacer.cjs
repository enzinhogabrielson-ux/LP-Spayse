const fs = require('fs');
const path = require('path');

function processDirectory(directory) {
  fs.readdirSync(directory).forEach(file => {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  });
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // 1. Logos
  content = content.replace(/\/xscalewh\.png/g, '/spayselogo (3).png');
  content = content.replace(/\/favicon\.png/g, '/spayselogo (1).png');

  // 2. Classes de cores
  content = content.replace(/bg-xscales/g, 'bg-navy-deep');
  content = content.replace(/text-teal-xscales/g, 'text-accent-sapphire');
  content = content.replace(/text-primary-gold/g, 'text-accent-gold');
  content = content.replace(/bg-primary-gold/g, 'bg-accent-gold');

  // 3. Classes de efeito e jargões antigos
  content = content.replace(/\bglow-primary-md\b/g, '');
  content = content.replace(/\bglow-primary-sm\b/g, '');
  content = content.replace(/\bglow-primary\b/g, '');
  content = content.replace(/\btext-glow\b/g, '');
  content = content.replace(/\bglow-teal\b/g, '');
  content = content.replace(/\bglow-circle\b/g, '');
  content = content.replace(/\bfont-payretailers\b/g, '');

  // 4. Video substitution in Home.tsx
  if (filePath.endsWith('Home.tsx')) {
    content = content.replace(
      /<video[\s\S]*?src="\/animxsc\.mp4"[\s\S]*?\/>/g,
      `<div className="w-full aspect-video rounded-2xl bg-navy-mid flex items-center justify-center border border-subtle">
                  <div className="text-accent-sapphire opacity-50 flex flex-col items-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <span className="mt-4 text-sm tracking-widest font-medium uppercase">Spayse Engine</span>
                  </div>
                </div>`
    );
  }

  // 5. Replace "XSCALES" with "Spayse" carefully
  // Only replace XSCALES globally, but keep it in URLs or specific IDs if any.
  // Actually, wait, replacing XSCALES globally in UI text is requested.
  // In `Termos`, `Privacidade`, we need a disclaimer but changing XSCALES to Spayse is fine.
  content = content.replace(/XSCALES/g, 'Spayse');
  content = content.replace(/xscales/g, 'spayse');

  // Capitalization fix
  content = content.replace(/spayse/g, (match, offset, full) => {
    // if part of a URL or path, keep lowercase
    const priorContext = full.substring(Math.max(0, offset - 10), offset);
    if (priorContext.includes('/')) return 'spayse';
    if (priorContext.includes('bg-')) return 'spayse';
    if (priorContext.includes('text-')) return 'spayse';
    if (priorContext.includes('className=')) return 'spayse';
    return match; // fallback
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
}

processDirectory('src');
