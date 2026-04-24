import re

file_path = 'src/index.css'
with open(file_path, 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Update fonts
css = re.sub(
    r"@import url\('https://fonts\.googleapis\.com/css2\?family=Plus\+Jakarta\+Sans:.*?'\);\n@import url\('https://fonts\.googleapis\.com/css2\?family=Poppins:.*?'\);",
    "@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');",
    css
)

# 2. Update :root variables
css = css.replace('/* XSCALES Dark Premium Theme */', '/* Spayse Dark Premium Theme */')
css = re.sub(r'--background: 230 85% 3%;', '--background: 216 60% 10%;', css)
css = re.sub(r'--foreground: 210 40% 98%;', '--foreground: 0 0% 100%;', css)
css = re.sub(r'--border: 228 25% 12%;', '--border: 216 61% 26%;', css)
css = re.sub(r'--card: 228 56% 7%;', '--card: 220 60% 16%;', css)
css = re.sub(r'--card-foreground: 210 40% 98%;', '--card-foreground: 0 0% 100%;', css)
css = re.sub(r'--card-border: 228 25% 13%;', '--card-border: 216 61% 26%;', css)
css = re.sub(r'--sidebar: 228 56% 5%;', '--sidebar: 216 60% 10%;', css)
css = re.sub(r'--sidebar-foreground: 210 40% 98%;', '--sidebar-foreground: 0 0% 100%;', css)
css = re.sub(r'--sidebar-border: 228 25% 10%;', '--sidebar-border: 216 61% 26%;', css)
css = re.sub(r'--sidebar-primary: 55 83% 43%;', '--sidebar-primary: 44 54% 54%;', css)
css = re.sub(r'--sidebar-primary-foreground: 228 56% 8%;', '--sidebar-primary-foreground: 216 60% 10%;', css)
css = re.sub(r'--sidebar-accent: 228 40% 13%;', '--sidebar-accent: 212 35% 17%;', css)
css = re.sub(r'--sidebar-accent-foreground: 210 40% 98%;', '--sidebar-accent-foreground: 0 0% 100%;', css)
css = re.sub(r'--sidebar-ring: 55 83% 43%;', '--sidebar-ring: 44 54% 54%;', css)
css = re.sub(r'--popover: 228 56% 7%;', '--popover: 220 60% 16%;', css)
css = re.sub(r'--popover-foreground: 210 40% 98%;', '--popover-foreground: 0 0% 100%;', css)
css = re.sub(r'--popover-border: 228 25% 13%;', '--popover-border: 216 61% 26%;', css)
css = re.sub(r'--primary: 55 83% 43%;', '--primary: 44 54% 54%;', css)
css = re.sub(r'--primary-foreground: 228 56% 8%;', '--primary-foreground: 216 60% 10%;', css)
css = re.sub(r'--secondary: 228 40% 13%;', '--secondary: 217 68% 37%;', css)
css = re.sub(r'--secondary-foreground: 210 40% 98%;', '--secondary-foreground: 0 0% 100%;', css)
css = re.sub(r'--muted: 228 40% 10%;', '--muted: 212 35% 17%;', css)
css = re.sub(r'--muted-foreground: 210 25% 60%;', '--muted-foreground: 211 22% 63%;', css)
css = re.sub(r'--accent: 55 83% 43%;', '--accent: 44 54% 54%;', css)
css = re.sub(r'--accent-foreground: 228 56% 8%;', '--accent-foreground: 216 60% 10%;', css)
css = re.sub(r'--destructive: 0 72% 51%;', '--destructive: 0 72% 51%;', css)
css = re.sub(r'--input: 228 40% 13%;', '--input: 212 35% 17%;', css)
css = re.sub(r'--ring: 55 83% 43%;', '--ring: 44 54% 54%;', css)

# App fonts
css = re.sub(r"--app-font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;", "--app-font-sans: 'Epilogue', system-ui, sans-serif;", css)
css = re.sub(r"--app-font-serif: Georgia, serif;", "--app-font-serif: 'Sora', system-ui, sans-serif;", css)
css = re.sub(r"font-family: 'Plus Jakarta Sans', system-ui, sans-serif;", "font-family: 'Epilogue', system-ui, sans-serif;", css)

css = css.replace("/* XSCALES Custom Tokens */", "/* Spayse Custom Tokens */")
css = css.replace("--xscales-bg: #050816;", "--navy-deep: #0A1628;\n  --navy-mid: #102040;\n  --royal-blue: #1A3A6B;\n  --sapphire: #1E4FA0;\n  --azure: #2563C4;\n  --gold-spayse: #C9A84C;\n  --slate-dark: #1C2A3A;\n  --slate-mid: #3A4D62;\n  --slate-light: #8FA0B2;\n  --silver: #C8D4DF;\n  --frost: #EDF2F7;\n  --bg-light: #F4F7FB;")
css = css.replace("background-color: #050816;", "background-color: var(--navy-deep);")
css = css.replace("color: #F8FAFC;", "color: #FFFFFF;")

# Replace global background gradient (section-bg)
css = css.replace("background: linear-gradient(180deg, #050816 0%, #0B1020 50%, #050816 100%);", "background: linear-gradient(180deg, var(--navy-deep) 0%, var(--navy-mid) 50%, var(--navy-deep) 100%);")

# Replace header backdrop
css = css.replace("background: rgba(5,8,22,0.95);", "background: rgba(10,22,40,0.95);")
css = css.replace("background: rgba(5,8,22,0.97);", "background: rgba(10,22,40,0.97);")
css = css.replace("background: rgba(5,8,22,0.85);", "background: rgba(10,22,40,0.85);")

# Utility classes
css = css.replace(".bg-xscales { background-color: #050816; }", ".bg-navy-deep { background-color: var(--navy-deep); }\n  .bg-xscales { background-color: var(--navy-deep); } /* Legacy */")
css = css.replace(".bg-surface { background-color: #0B1020; }", ".bg-surface { background-color: var(--navy-mid); }")
css = css.replace(".bg-elevated { background-color: #10182B; }", ".bg-elevated { background-color: var(--slate-dark); }")
css = css.replace(".bg-primary-gold { background-color: #FFC500; }", ".bg-accent-gold { background-color: var(--gold-spayse); }\n  .bg-primary-gold { background-color: var(--gold-spayse); } /* Legacy */")

css = css.replace(".text-primary-gold { color: #FFC500; }", ".text-accent-gold { color: var(--gold-spayse); }\n  .text-primary-gold { color: var(--gold-spayse); } /* Legacy */")
css = css.replace(".text-teal-xscales { color: #009FAD; }", ".text-accent-sapphire { color: var(--sapphire); }\n  .text-teal-xscales { color: var(--sapphire); } /* Legacy */")

css = css.replace(".text-xscales { color: #F8FAFC; }", ".text-white-spayse { color: #FFFFFF; }\n  .text-xscales { color: #FFFFFF; } /* Legacy */")

# Remove Glows
css = re.sub(r"\.glow-primary \{[\s\S]*?\}", ".glow-primary { /* Removed glow */ }", css)
css = re.sub(r"\.glow-primary-sm \{[\s\S]*?\}", ".glow-primary-sm { /* Removed glow */ }", css)
css = re.sub(r"\.glow-primary-md \{[\s\S]*?\}", ".glow-primary-md { /* Removed glow */ }", css)
css = re.sub(r"\.text-glow \{[\s\S]*?\}", ".text-glow { /* Removed glow */ }", css)
css = re.sub(r"\.glow-circle \{[\s\S]*?\}", ".glow-circle { /* Removed glow */ }", css)
css = re.sub(r"\.glow-teal \{[\s\S]*?\}", ".glow-teal { /* Removed glow */ }", css)
css = re.sub(r"\.glow-teal-sm \{[\s\S]*?\}", ".glow-teal-sm { /* Removed glow */ }", css)
css = re.sub(r"\.glow-circle-teal \{[\s\S]*?\}", ".glow-circle-teal { /* Removed glow */ }", css)

# Fix hex colors in buttons and components to use var(--gold-spayse) and var(--sapphire)
css = css.replace("#FFC500", "var(--gold-spayse)")
css = css.replace("rgba(255,197,0,", "rgba(201,168,76,")
css = css.replace("rgba(255, 197, 0,", "rgba(201,168,76,")

css = css.replace("#009FAD", "var(--sapphire)")
css = css.replace("rgba(0,159,173,", "rgba(30,79,160,")

css = css.replace("font-family: 'Poppins', system-ui, sans-serif;", "font-family: 'Sora', system-ui, sans-serif;")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(css)
print("CSS updated successfully!")
