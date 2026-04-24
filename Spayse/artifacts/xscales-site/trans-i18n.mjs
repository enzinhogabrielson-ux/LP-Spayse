import fs from 'fs';

const content = fs.readFileSync('src/lib/i18n.ts', 'utf8');

const ptAdditions = `
  // Markets Data
  'mkt.brasil.sub': 'Brasil: o principal mercado da América Latina.',
  'mkt.brasil.stat0': 'Adaptação às regulamentações locais é o nosso superpoder. Como Instituição de Pagamento licenciada, oferecemos uma solução de processamento de pagamentos totalmente em conformidade, que atende a todas as exigências e garante cobertura contínua do Pix, com uma infraestrutura robusta de nível bancário.',
  'mkt.brasil.stat1': 'Adaptação às regulamentações locais é o nosso superpoder. Como Instituição de Pagamento licenciada, oferecemos uma solução de processamento de pagamentos totalmente em conformidade, que atende a todas as exigências e garante cobertura contínua do Pix, com uma infraestrutura robusta de nível bancário.',
  'mkt.brasil.stat2': 'Orgulhosos por estarmos à frente da Transfeera, participante direta do Pix, entregamos uma solução completa, feita para as altas demandas do setor.',
  'mkt.brasil.stat3': 'Conectamos você a +170 milhões de consumidores no Brasil, todos em busca da disponibilidade 24/7/365 do Pix e do checkout fluido que oferecemos.',
  'mkt.brasil.stat4': 'Simplicidade para o cliente, segurança de alto nível para você. Por trás de cada transação rápida, há processos de compliance que garantem a proteção do consumidor e da sua plataforma.',
  'mkt.brasil.stat5': 'Com triagens automáticas de clientes e validação instantânea de CPF, o processo de onboarding fica muito mais ágil. Levamos clientes verificados e prontos para pagar até você, sempre em conformidade com as regulamentações locais de KYC.',
  'mkt.brasil.stat6': 'Certificado e respaldado por +800 bancos',
  'mkt.mexico.sub': 'México: um gigante dos pagamentos digitais.',
  'mkt.mexico.stat0': 'De pagamentos móveis a compras internacionais, conheça as inovações que impulsionam o crescimento do e-commerce no México.',
  'mkt.mexico.stat1': 'De pagamentos móveis a compras internacionais, conheça as inovações que impulsionam o crescimento do e-commerce no México.',
  'mkt.colombia.sub': 'Colômbia: um mercado digital em expansão.',
  'mkt.colombia.stat0': 'Aproveite a quarta maior economia da América Latina e o crescimento que o país alcançou nos últimos anos.',
  'mkt.colombia.stat1': 'Aproveite a quarta maior economia da América Latina e o crescimento que o país alcançou nos últimos anos.',
  'mkt.peru.sub': 'Peru: pagamentos digitais em alta.',
  'mkt.peru.stat0': 'Explore as oportunidades que estão surgindo com o crescimento acelerado das carteiras digitais e e-commerce no Peru.',
  'mkt.peru.stat1': 'Explore as oportunidades que estão surgindo com o crescimento acelerado das carteiras digitais e e-commerce no Peru.',
  'mkt.chile.sub': 'Chile: referência em compras pelo celular.',
  'mkt.chile.stat0': 'Descubra como conquistar novos clientes no Chile e aproveitar o imenso potencial de negócios do país.',
  'mkt.chile.stat1': 'Descubra como conquistar novos clientes no Chile e aproveitar o imenso potencial de negócios do país.',
  'mkt.chile.stat2': 'Para o processamento de cartões no Chile, atuamos como subadquirente internacional por meio da nossa empresa Operadora Tecnológica de Pagos S.A., que atualmente está em processo de registro junto à Comissão para o Mercado Financeiro (CMF).',
  'mkt.argentina.sub': 'Argentina: um polo estratégico na América Latina.',
  'mkt.argentina.stat0': 'Saiba mais sobre o mercado de e-commerce argentino e as expectativas de crescimento da sua economia em 2025 e 2026.',
  'mkt.argentina.stat1': 'Saiba mais sobre o mercado de e-commerce argentino e as expectativas de crescimento da sua economia em 2025 e 2026.',
  'mkt.costa-rica.sub': 'Costa Rica: a transformação dos pagamentos móveis e internacionais.',
  'mkt.costa-rica.stat0': 'Descubra como os pagamentos móveis e as transações internacionais estão impulsionando o crescimento do mercado digital da Costa Rica.',
  'mkt.costa-rica.stat1': 'Descubra como os pagamentos móveis e as transações internacionais estão impulsionando o crescimento do mercado digital da Costa Rica.',
  'mkt.equador.sub': 'Equador: um protagonista na América Latina.',
  'mkt.equador.stat0': 'Compreenda mais sobre essa potência econômica e descubra tudo o que você precisa para ter sucesso no Equador.',
  'mkt.equador.stat1': 'Compreenda mais sobre essa potência econômica e descubra tudo o que você precisa para ter sucesso no Equador.',
  'mkt.guatemala.sub': 'Guatemala: a maior economia da América Central.',
  'mkt.guatemala.stat0': 'Leia tudo sobre o crescimento dos pagamentos digitais e os mercados de e-commerce na Guatemala.',
  'mkt.guatemala.stat1': 'Leia tudo sobre o crescimento dos pagamentos digitais e os mercados de e-commerce na Guatemala.',
  'mkt.outros-mercados.sub': 'Expansão estratégica em geografias emergentes e de alto potencial.',
  'mkt.outros-mercados.stat0': 'Além dos mercados contemplados nas páginas da PayRetailers, a XSCALES continua preparada para avaliar novas entradas regionais com profundidade operacional.',
  'mkt.outros-mercados.stat1': 'Além dos mercados contemplados nas páginas da PayRetailers, a XSCALES continua preparada para avaliar novas entradas regionais com profundidade operacional.',
`;

const enAdditions = `
  // Markets Data
  'mkt.brasil.sub': 'Brazil: the main market in Latin America.',
  'mkt.brasil.stat0': 'Adapting to local regulations is our superpower. As a licensed Payment Institution, we offer a fully compliant payment processing solution that meets all requirements and ensures continuous Pix coverage, with robust bank-grade infrastructure.',
  'mkt.brasil.stat1': 'Adapting to local regulations is our superpower. As a licensed Payment Institution, we offer a fully compliant payment processing solution that meets all requirements and ensures continuous Pix coverage, with robust bank-grade infrastructure.',
  'mkt.brasil.stat2': 'Proud to be ahead with Transfeera, a direct Pix participant, we deliver a complete solution tailored to the high demands of the sector.',
  'mkt.brasil.stat3': 'We connect you to 170+ million consumers in Brazil, all seeking the 24/7/365 availability of Pix and the seamless checkout we provide.',
  'mkt.brasil.stat4': 'Simplicity for the customer, top-tier security for you. Behind every fast transaction, there are compliance processes that ensure consumer and platform protection.',
  'mkt.brasil.stat5': 'With automated customer screenings and instant CPF validation, the onboarding process is much faster. We bring verified, purchase-ready customers to you, always compliant with local KYC regulations.',
  'mkt.brasil.stat6': 'Certified and backed by 800+ banks',
  'mkt.mexico.sub': 'Mexico: a digital payments giant.',
  'mkt.mexico.stat0': 'From mobile payments to cross-border purchases, learn about the innovations driving e-commerce growth in Mexico.',
  'mkt.mexico.stat1': 'From mobile payments to cross-border purchases, learn about the innovations driving e-commerce growth in Mexico.',
  'mkt.colombia.sub': 'Colombia: a booming digital market.',
  'mkt.colombia.stat0': 'Take advantage of the fourth largest economy in Latin America and the growth the country has achieved in recent years.',
  'mkt.colombia.stat1': 'Take advantage of the fourth largest economy in Latin America and the growth the country has achieved in recent years.',
  'mkt.peru.sub': 'Peru: digital payments on the rise.',
  'mkt.peru.stat0': 'Explore emerging opportunities with the accelerated growth of digital wallets and e-commerce in Peru.',
  'mkt.peru.stat1': 'Explore emerging opportunities with the accelerated growth of digital wallets and e-commerce in Peru.',
  'mkt.chile.sub': 'Chile: a leader in mobile shopping.',
  'mkt.chile.stat0': 'Discover how to win new customers in Chile and tap into the country’s massive business potential.',
  'mkt.chile.stat1': 'Discover how to win new customers in Chile and tap into the country’s massive business potential.',
  'mkt.chile.stat2': 'For card processing in Chile, we operate as an international sub-acquirer through our company Operadora Tecnológica de Pagos S.A., which is currently undergoing registration with the Financial Market Commission (CMF).',
  'mkt.argentina.sub': 'Argentina: a strategic hub in Latin America.',
  'mkt.argentina.stat0': 'Learn more about the Argentine e-commerce market and growth expectations for its economy in 2025 and 2026.',
  'mkt.argentina.stat1': 'Learn more about the Argentine e-commerce market and growth expectations for its economy in 2025 and 2026.',
  'mkt.costa-rica.sub': 'Costa Rica: the transformation of mobile and international payments.',
  'mkt.costa-rica.stat0': 'Discover how mobile payments and cross-border transactions are driving the growth of Costa Rica’s digital market.',
  'mkt.costa-rica.stat1': 'Discover how mobile payments and cross-border transactions are driving the growth of Costa Rica’s digital market.',
  'mkt.equador.sub': 'Ecuador: a protagonist in Latin America.',
  'mkt.equador.stat0': 'Understand more about this economic powerhouse and discover everything you need to succeed in Ecuador.',
  'mkt.equador.stat1': 'Understand more about this economic powerhouse and discover everything you need to succeed in Ecuador.',
  'mkt.guatemala.sub': 'Guatemala: the largest economy in Central America.',
  'mkt.guatemala.stat0': 'Read all about the growth of the digital payments and e-commerce markets in Guatemala.',
  'mkt.guatemala.stat1': 'Read all about the growth of the digital payments and e-commerce markets in Guatemala.',
  'mkt.outros-mercados.sub': 'Strategic expansion in emerging and high-potential geographies.',
  'mkt.outros-mercados.stat0': 'Beyond the markets covered by PayRetailers, XSCALES remains ready to evaluate new regional entries with operational depth.',
  'mkt.outros-mercados.stat1': 'Beyond the markets covered by PayRetailers, XSCALES remains ready to evaluate new regional entries with operational depth.',
`;

const esAdditions = `
  // Markets Data
  'mkt.brasil.sub': 'Brasil: el principal mercado de América Latina.',
  'mkt.brasil.stat0': 'Adaptarse a las regulaciones locales es nuestro superpoder. Como Institución de Pago licenciada, ofrecemos una solución de procesamiento totalmente compatible que cumple con todos los requisitos y asegura cobertura continua de Pix, con infraestructura robusta de nivel bancario.',
  'mkt.brasil.stat1': 'Adaptarse a las regulaciones locales es nuestro superpoder. Como Institución de Pago licenciada, ofrecemos una solución de procesamiento totalmente compatible que cumple con todos los requisitos y asegura cobertura continua de Pix, con infraestructura robusta de nivel bancario.',
  'mkt.brasil.stat2': 'Orgullosos de estar a la vanguardia con Transfeera, participante directo de Pix, entregamos una solución completa, hecha para las altas demandas del sector.',
  'mkt.brasil.stat3': 'Te conectamos con +170 millones de consumidores en Brasil, todos en busca de la disponibilidad 24/7/365 de Pix y del checkout fluido que ofrecemos.',
  'mkt.brasil.stat4': 'Simplicidad para el cliente, seguridad de alto nivel para ti. Detrás de cada transacción rápida, hay procesos de cumplimiento que garantizan la protección del consumidor y de tu plataforma.',
  'mkt.brasil.stat5': 'Con verificaciones de clientes automáticas y validación instantánea de CPF, el proceso de onboarding es mucho más ágil. Te traemos clientes verificados y listos para pagar, siempre en cumplimiento con las regulaciones locales KYC.',
  'mkt.brasil.stat6': 'Certificado y respaldado por +800 bancos',
  'mkt.mexico.sub': 'México: un gigante de los pagos digitales.',
  'mkt.mexico.stat0': 'Desde pagos móviles hasta compras internacionales, conoce las innovaciones que impulsan el crecimiento del e-commerce en México.',
  'mkt.mexico.stat1': 'Desde pagos móviles hasta compras internacionales, conoce las innovaciones que impulsan el crecimiento del e-commerce en México.',
  'mkt.colombia.sub': 'Colombia: un mercado digital en expansión.',
  'mkt.colombia.stat0': 'Aprovecha la cuarta mayor economía de América Latina y el crecimiento que el país ha alcanzado en los últimos años.',
  'mkt.colombia.stat1': 'Aprovecha la cuarta mayor economía de América Latina y el crecimiento que el país ha alcanzado en los últimos años.',
  'mkt.peru.sub': 'Perú: pagos digitales en alza.',
  'mkt.peru.stat0': 'Explora las oportunidades emergentes con el crecimiento acelerado de las billeteras digitales y el e-commerce en Perú.',
  'mkt.peru.stat1': 'Explora las oportunidades emergentes con el crecimiento acelerado de las billeteras digitales y el e-commerce en Perú.',
  'mkt.chile.sub': 'Chile: líder en compras móviles.',
  'mkt.chile.stat0': 'Descubre cómo conquistar nuevos clientes en Chile y aprovechar el inmenso potencial de negocios del país.',
  'mkt.chile.stat1': 'Descubre cómo conquistar nuevos clientes en Chile y aprovechar el inmenso potencial de negocios del país.',
  'mkt.chile.stat2': 'Para el procesamiento de tarjetas en Chile, operamos como subadquirente internacional a través de nuestra empresa Operadora Tecnológica de Pagos S.A., que actualmente está en proceso de registro ante la Comisión para el Mercado Financiero (CMF).',
  'mkt.argentina.sub': 'Argentina: un polo estratégico en América Latina.',
  'mkt.argentina.stat0': 'Conoce más sobre el mercado de e-commerce argentino y las expectativas de crecimiento de su economía en 2025 y 2026.',
  'mkt.argentina.stat1': 'Conoce más sobre el mercado de e-commerce argentino y las expectativas de crecimiento de su economía en 2025 y 2026.',
  'mkt.costa-rica.sub': 'Costa Rica: la transformación de los pagos móviles e internacionales.',
  'mkt.costa-rica.stat0': 'Descubre cómo los pagos móviles y las transacciones transfronterizas están impulsando el crecimiento del mercado digital en Costa Rica.',
  'mkt.costa-rica.stat1': 'Descubre cómo los pagos móviles y las transacciones transfronterizas están impulsando el crecimiento del mercado digital en Costa Rica.',
  'mkt.equador.sub': 'Ecuador: un protagonista en América Latina.',
  'mkt.equador.stat0': 'Comprende más sobre esta potencia económica y descubre todo lo que necesitas para tener éxito en Ecuador.',
  'mkt.equador.stat1': 'Comprende más sobre esta potencia económica y descubre todo lo que necesitas para tener éxito en Ecuador.',
  'mkt.guatemala.sub': 'Guatemala: la mayor economía de Centroamérica.',
  'mkt.guatemala.stat0': 'Lee todo sobre el crecimiento de los pagos digitales y los mercados de e-commerce en Guatemala.',
  'mkt.guatemala.stat1': 'Lee todo sobre el crecimiento de los pagos digitales y los mercados de e-commerce en Guatemala.',
  'mkt.outros-mercados.sub': 'Expansión estratégica en geografías emergentes y de alto potencial.',
  'mkt.outros-mercados.stat0': 'Más allá de los mercados cubiertos por PayRetailers, XSCALES sigue preparada para evaluar nuevas entradas regionales con profundidad operativa.',
  'mkt.outros-mercados.stat1': 'Más allá de los mercados cubiertos por PayRetailers, XSCALES sigue preparada para evaluar nuevas entradas regionales con profundidad operativa.',
`;

let newContent = content.replace(
  "'inst.talkTeam': 'Fale com nosso time',",
  "'inst.talkTeam': 'Fale com nosso time',\n" + ptAdditions
);

newContent = newContent.replace(
  "'inst.talkTeam': 'Talk to our team',",
  "'inst.talkTeam': 'Talk to our team',\n" + enAdditions
);

if (newContent.includes("'inst.talkTeam': 'Hablar con nuestro equipo',")) {
   newContent = newContent.replace(
     "'inst.talkTeam': 'Hablar con nuestro equipo',",
     "'inst.talkTeam': 'Hablar con nuestro equipo',\n" + esAdditions
   );
} else {
   // Fallback to match exact ending of ES array since we might not have 'inst.talkTeam' yet or it's different
   newContent = newContent.replace(
     "const es: Translations = {",
     "const es: Translations = {\n" + esAdditions
   );
}

fs.writeFileSync('src/lib/i18n.ts', newContent);
console.log("Updated src/lib/i18n.ts with translated data keys!");
