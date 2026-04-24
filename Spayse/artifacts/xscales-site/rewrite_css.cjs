const fs = require('fs');

const filePath = 'src/index.css';
let css = fs.readFileSync(filePath, 'utf-8');

// 1. Update fonts
css = css.replace(
    /@import url\('https:\/\/fonts\.googleapis\.com\/css2\?family=Plus\+Jakarta\+Sans:.*?'\);\n@import url\('https:\/\/fonts\.googleapis\.com\/css2\?family=Poppins:.*?'\);/,
    "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');"
);

// 2. Update :root variables
css = css.replace('/* XSCALES Dark Premium Theme */', '/* Spayse Dark Premium Theme */');
css = css.replace('--background: 230 85% 3%;', '--background: 216 60% 10%;');
css = css.replace('--foreground: 210 40% 98%;', '--foreground: 0 0% 100%;');
css = css.replace('--border: 228 25% 12%;', '--border: 216 61% 26%;');
css = css.replace('--card: 228 56% 7%;', '--card: 220 60% 16%;');
css = css.replace('--card-foreground: 210 40% 98%;', '--card-foreground: 0 0% 100%;');
css = css.replace('--card-border: 228 25% 13%;', '--card-border: 216 61% 26%;');
css = css.replace('--sidebar: 228 56% 5%;', '--sidebar: 216 60% 10%;');
css = css.replace('--sidebar-foreground: 210 40% 98%;', '--sidebar-foreground: 0 0% 100%;');
css = css.replace('--sidebar-border: 228 25% 10%;', '--sidebar-border: 216 61% 26%;');
css = css.replace('--sidebar-primary: 55 83% 43%;', '--sidebar-primary: 44 54% 54%;');
css = css.replace('--sidebar-primary-foreground: 228 56% 8%;', '--sidebar-primary-foreground: 216 60% 10%;');
css = css.replace('--sidebar-accent: 228 40% 13%;', '--sidebar-accent: 212 35% 17%;');
css = css.replace('--sidebar-accent-foreground: 210 40% 98%;', '--sidebar-accent-foreground: 0 0% 100%;');
css = css.replace('--sidebar-ring: 55 83% 43%;', '--sidebar-ring: 44 54% 54%;');
css = css.replace('--popover: 228 56% 7%;', '--popover: 220 60% 16%;');
css = css.replace('--popover-foreground: 210 40% 98%;', '--popover-foreground: 0 0% 100%;');
css = css.replace('--popover-border: 228 25% 13%;', '--popover-border: 216 61% 26%;');
css = css.replace('--primary: 55 83% 43%;', '--primary: 44 54% 54%;');
css = css.replace('--primary-foreground: 228 56% 8%;', '--primary-foreground: 216 60% 10%;');
css = css.replace('--secondary: 228 40% 13%;', '--secondary: 217 68% 37%;');
css = css.replace('--secondary-foreground: 210 40% 98%;', '--secondary-foreground: 0 0% 100%;');
css = css.replace('--muted: 228 40% 10%;', '--muted: 212 35% 17%;');
css = css.replace('--muted-foreground: 210 25% 60%;', '--muted-foreground: 211 22% 63%;');
css = css.replace('--accent: 55 83% 43%;', '--accent: 44 54% 54%;');
css = css.replace('--accent-foreground: 228 56% 8%;', '--accent-foreground: 216 60% 10%;');
css = css.replace('--input: 228 40% 13%;', '--input: 212 35% 17%;');
css = css.replace('--ring: 55 83% 43%;', '--ring: 44 54% 54%;');

// App fonts
css = css.replace("--app-font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;", "--app-font-sans: 'Epilogue', system-ui, sans-serif;");
css = css.replace("--app-font-serif: Georgia, serif;", "--app-font-serif: 'Sora', system-ui, sans-serif;");
css = css.replace("font-family: 'Plus Jakarta Sans', system-ui, sans-serif;", "font-family: 'Epilogue', system-ui, sans-serif;");
css = css.replace("font-family: 'Plus Jakarta Sans', system-ui, sans-serif;", "font-family: 'Sora', system-ui, sans-serif;"); // the headings

css = css.replace("/* XSCALES Custom Tokens */", "/* Spayse Custom Tokens */\n  --navy-deep: #0A1628;\n  --navy-mid: #102040;\n  --royal-blue: #1A3A6B;\n  --sapphire: #1E4FA0;\n  --azure: #2563C4;\n  --gold-spayse: #C9A84C;\n  --slate-dark: #1C2A3A;\n  --slate-mid: #3A4D62;\n  --slate-light: #8FA0B2;\n  --silver: #C8D4DF;\n  --frost: #EDF2F7;\n  --bg-light: #F4F7FB;");

// Legacy class mapping
css = css.replace("--xscales-bg: #050816;", "--xscales-bg: var(--navy-deep);");
css = css.replace("--xscales-surface: #0B1020;", "--xscales-surface: var(--navy-mid);");
css = css.replace("--xscales-elevated: #10182B;", "--xscales-elevated: var(--slate-dark);");
css = css.replace("--xscales-primary: #FFC500;", "--xscales-primary: var(--gold-spayse);");
css = css.replace("--xscales-teal: #009FAD;", "--xscales-teal: var(--sapphire);");

css = css.replace("background-color: #050816;", "background-color: var(--navy-deep);");
css = css.replace("color: #F8FAFC;", "color: #FFFFFF;");

css = css.replace("background: linear-gradient(180deg, #050816 0%, #0B1020 50%, #050816 100%);", "background: linear-gradient(180deg, var(--navy-deep) 0%, var(--navy-mid) 50%, var(--navy-deep) 100%);");
css = css.replace("background: rgba(5,8,22,0.95);", "background: rgba(10,22,40,0.95);");
css = css.replace("background: rgba(5,8,22,0.97);", "background: rgba(10,22,40,0.97);");
css = css.replace("background: rgba(5,8,22,0.85);", "background: rgba(10,22,40,0.85);");

css = css.replace(".bg-xscales { background-color: #050816; }", ".bg-navy-deep { background-color: var(--navy-deep); }\n  .bg-xscales { background-color: var(--navy-deep); }");
css = css.replace(".bg-surface { background-color: #0B1020; }", ".bg-surface { background-color: var(--navy-mid); }");
css = css.replace(".bg-elevated { background-color: #10182B; }", ".bg-elevated { background-color: var(--slate-dark); }");
css = css.replace(".bg-primary-gold { background-color: #FFC500; }", ".bg-accent-gold { background-color: var(--gold-spayse); }\n  .bg-primary-gold { background-color: var(--gold-spayse); }");

css = css.replace(".text-primary-gold { color: #FFC500; }", ".text-accent-gold { color: var(--gold-spayse); }\n  .text-primary-gold { color: var(--gold-spayse); }");
css = css.replace(".text-teal-xscales { color: #009FAD; }", ".text-accent-sapphire { color: var(--sapphire); }\n  .text-teal-xscales { color: var(--sapphire); }");
css = css.replace(".text-xscales { color: #F8FAFC; }", ".text-white-spayse { color: #FFFFFF; }\n  .text-xscales { color: #FFFFFF; }");

// Neutralize glows
css = css.replace(/\.glow-primary\s*\{[^}]*\}/g, ".glow-primary { /* Removed glow */ }");
css = css.replace(/\.glow-primary-sm\s*\{[^}]*\}/g, ".glow-primary-sm { /* Removed glow */ }");
css = css.replace(/\.glow-primary-md\s*\{[^}]*\}/g, ".glow-primary-md { /* Removed glow */ }");
css = css.replace(/\.text-glow\s*\{[^}]*\}/g, ".text-glow { /* Removed glow */ }");
css = css.replace(/\.glow-circle\s*\{[^}]*\}/g, ".glow-circle { /* Removed glow */ }");
css = css.replace(/\.glow-teal\s*\{[^}]*\}/g, ".glow-teal { /* Removed glow */ }");
css = css.replace(/\.glow-teal-sm\s*\{[^}]*\}/g, ".glow-teal-sm { /* Removed glow */ }");
css = css.replace(/\.glow-circle-teal\s*\{[^}]*\}/g, ".glow-circle-teal { /* Removed glow */ }");

// Replace hardcoded Hex colors with variables
css = css.replaceAll("#FFC500", "var(--gold-spayse)");
css = css.replaceAll("rgba(255,197,0,", "rgba(201,168,76,");
css = css.replaceAll("rgba(255, 197, 0,", "rgba(201,168,76,");

css = css.replaceAll("#009FAD", "var(--sapphire)");
css = css.replaceAll("rgba(0,159,173,", "rgba(30,79,160,");

css = css.replace("font-family: 'Poppins', system-ui, sans-serif;", "font-family: 'Sora', system-ui, sans-serif;");

fs.writeFileSync(filePath, css, 'utf-8');
console.log('CSS updated successfully!');
