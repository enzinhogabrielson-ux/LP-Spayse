const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

code = code.replace(
  "<Lottie animationData={globeAnimation} loop={true} autoplay={true} style={{ width: '100%', height: '100%' }} />",
  "<Lottie animationData={globeAnimation.default || globeAnimation} loop={true} autoplay={true} style={{ width: '100%', height: '100%', filter: 'invert(1) opacity(0.8)' }} />"
);

fs.writeFileSync('src/pages/Home.tsx', code);
console.log('updated');
