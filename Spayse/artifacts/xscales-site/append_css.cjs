const fs = require('fs');

const cssToAppend = `
/* --- SPAYSE ANIMATED BUTTON (XscaleAI style) --- */

.botao-cta * {
  transition: 0.5s;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}

.botao-cta {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  min-width: 240px;
  height: 60px;
  border-radius: 100px;
  background: linear-gradient(104deg, var(--gold-spayse), var(--sapphire));
  cursor: pointer;
  border: none;
  text-decoration: none;
}

.container-botao-cta {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 40px;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
  background: linear-gradient(104deg, rgba(30, 79, 160, 0.9), rgba(10, 22, 40, 0.8));
}

@media (max-width: 768px) {
  .botao-cta {
    padding: 5px;
    height: 54px;
  }
  .container-botao-cta {
    padding: 10px 20px;
  }
  .texto-cta-1, .texto-cta-2 {
    font-size: 11px !important;
  }
  .texto-cta-1 {
    margin-left: 12px;
  }
  .wrapper-icones-cta {
    width: 16px;
    height: 16px;
    left: 10px;
  }
}

.wrapper-icones-cta {
  display: flex;
  flex-wrap: nowrap;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  border-radius: 50%;
  z-index: 2;
  background: linear-gradient(var(--sapphire), var(--navy-deep));
  box-shadow: rgba(30, 79, 160, 0.1) 0px 2.5px 4.2px, rgba(30, 79, 160, 0.2) 0px 6px 10px, rgba(30, 79, 160, 0.3) 0px 12px 19px;
}

.icone-cta-1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  z-index: 1;
}

.icone-cta-2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  z-index: 1;
  opacity: 0;
  color: #fff;
}

.fundo-cta {
  position: absolute;
  left: 0;
  width: 0%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  border-radius: 100px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px -1px, rgba(255, 255, 255, 0.25) 0px 0px 1px inset, var(--sapphire) 0px 4px 44px, var(--gold-spayse) 0px 0px 10px, var(--gold-spayse) 0px 0px 12px inset;
}

.texto-cta-1 {
  margin-left: 20px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 3;
}

.texto-cta-2 {
  position: absolute;
  color: var(--navy-deep);
  opacity: 0;
  transform: translate(100%);
  font-weight: 700;
  font-size: 16px;
}

.botao-cta:hover .fundo-cta {
  width: calc(100% - 40px);
  height: 100%;
}

.botao-cta:hover .wrapper-icones-cta {
  left: calc(100% - 38px);
}

.botao-cta:hover .texto-cta-1, .botao-cta:hover .icone-cta-1 {
  opacity: 0;
}

.botao-cta:hover .texto-cta-2 {
  opacity: 1;
  transform: translate(0);
}

.botao-cta:hover .icone-cta-2 {
  opacity: 1;
}

/* Secondary Button Shinery */
.btn-shinery {
  overflow: hidden !important;
  border-radius: 10px;
  position: relative;
  display: inline-block;
  background: linear-gradient(-45deg, var(--navy-deep), var(--sapphire), var(--navy-deep), var(--sapphire));
  background-size: 800% 400%;
  transition: all 0.5s;
  animation: gradient-shinery 5s infinite cubic-bezier(0.62, 0.28, 0.23, 0.99) both;
  border: 1px solid rgba(255,255,255,0.1);
  color: white;
  padding: 14px 28px;
  font-weight: 600;
  text-decoration: none;
}

@keyframes gradient-shinery {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.btn-shinery:after {
  content: "";
  background: linear-gradient(10deg, rgba(201,168,76,0.6) 12.81%, rgba(201,168,76,0) 66.66%);
  mix-blend-mode: overlay;
  width: 90px;
  height: 160%;
  position: absolute;
  transform: translate(-50%) skew(-25deg);
  bottom: 0%;
  user-select: none;
  pointer-events: none;
  animation: shinery-sweep 6s infinite ease-in-out;
}

@keyframes shinery-sweep {
  0%, 100% { left: -10%; opacity: 0; }
  20% { opacity: 1; }
  48% { left: 140%; opacity: 1; }
  51% { opacity: 0; }
}
`;

fs.appendFileSync('src/index.css', cssToAppend, 'utf-8');
console.log('Appended Spayse Animated Button CSS');
