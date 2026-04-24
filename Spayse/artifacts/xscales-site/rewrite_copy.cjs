const fs = require('fs');

const filePath = 'src/lib/i18n.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// Home - Hero
content = content.replace(/'INFRAESTRUTURA FINANCEIRA GLOBAL'/g, "'PAYMENTS, REFINED.'");
content = content.replace(/'Para empresas'/g, "'A infraestrutura de pagamentos'");
content = content.replace(/'que querem'/g, "'para operações que exigem'");
content = content.replace(/'escalar sem fronteiras'/g, "'precisão e elegância.'");
content = content.replace(/'Pagamentos, banking e operação internacional em uma única infraestrutura tecnológica — preparada para mercados locais e expansão global\.'/g, "'Pagamentos, recebimentos e operações estruturadas em uma base sólida e confiável. Expanda sua operação sem comprometer o controle.'");

// Home - VP
content = content.replace(/'Uma estrutura única para simplificar operações complexas'/g, "'A infraestrutura definitiva para pagamentos complexos'");
content = content.replace(/'A Spayse foi criada para atender empresas que precisam vender, receber, processar, liquidar e expandir com mais inteligência\. Nossa infraestrutura combina tecnologia, adaptação local e visão estratégica\.'/g, "'A Spayse foi criada para empresas que precisam de controle absoluto sobre suas operações. Nossa base técnica integra pagamentos e gestão de forma precisa e eficiente.'");
// Note: "XSCALES foi criada" might have been replaced to "Spayse foi criada" by previous script.
content = content.replace(/'A XSCALES foi criada para atender empresas que precisam vender, receber, processar, liquidar e expandir com mais inteligência\. Nossa infraestrutura combina tecnologia, adaptação local e visão estratégica\.'/g, "'Criada para empresas que precisam de controle absoluto sobre suas operações. Nossa base técnica integra pagamentos e gestão de forma precisa e eficiente.'");

// EN
content = content.replace(/'GLOBAL FINANCIAL INFRASTRUCTURE'/g, "'PAYMENTS, REFINED.'");
content = content.replace(/'For companies'/g, "'The payment infrastructure'");
content = content.replace(/'that want to'/g, "'for operations that demand'");
content = content.replace(/'scale without borders'/g, "'precision and elegance.'");
content = content.replace(/'Payments, banking and international operations in a single technology infrastructure — ready for local markets and global expansion\.'/g, "'Structured payments, receipts and operations on a solid and reliable foundation. Expand your operation without compromising control.'");
content = content.replace(/'A unique structure to simplify complex operations'/g, "'The ultimate infrastructure for complex payments'");

fs.writeFileSync(filePath, content, 'utf-8');
console.log('i18n copies updated successfully!');
