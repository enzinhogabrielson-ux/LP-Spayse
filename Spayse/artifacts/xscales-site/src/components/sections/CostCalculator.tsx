import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingDown, Check } from 'lucide-react';

interface GatewayComparison {
  name: string;
  logo?: string;
  color: string;
  creditFee: number; // Percentual
  pixFee: number; // Percentual
  boletoFee: number; // Valor fixo
  monthlyFee: number;
}

const gateways: GatewayComparison[] = [
  {
    name: 'Hotmart',
    color: '#FF6536',
    creditFee: 9.9,
    pixFee: 4.99,
    boletoFee: 4.99,
    monthlyFee: 0,
  },
  {
    name: 'Kiwify',
    color: '#00D4A1',
    creditFee: 6.49,
    pixFee: 2.99,
    boletoFee: 3.99,
    monthlyFee: 0,
  },
  {
    name: 'Eduzz',
    color: '#4A90E2',
    creditFee: 8.99,
    pixFee: 3.99,
    boletoFee: 4.49,
    monthlyFee: 0,
  },
  {
    name: 'PerfectPay',
    color: '#7B68EE',
    creditFee: 7.99,
    pixFee: 3.49,
    boletoFee: 3.99,
    monthlyFee: 0,
  },
  {
    name: 'Braip',
    color: '#FF1744',
    creditFee: 8.49,
    pixFee: 3.99,
    boletoFee: 4.49,
    monthlyFee: 0,
  },
  {
    name: 'Monetizze',
    color: '#00BFA5',
    creditFee: 9.49,
    pixFee: 4.49,
    boletoFee: 4.99,
    monthlyFee: 0,
  },
  {
    name: 'XSCALES',
    color: '#FFC500',
    creditFee: 4.99,
    pixFee: 1.99,
    boletoFee: 2.99,
    monthlyFee: 0,
  },
];

export default function CostCalculator() {
  const [activeTab, setActiveTab] = useState<'custos' | 'faturamento'>('custos');
  const [volume, setVolume] = useState(50000);
  const [creditPercent, setCreditPercent] = useState(70);
  const [pixPercent, setPixPercent] = useState(20);
  const [boletoPercent, setBoletoPercent] = useState(10);
  const [transactions, setTransactions] = useState(1000);
  const [averageTicket, setAverageTicket] = useState(197);

  const calculateCost = (gateway: GatewayComparison) => {
    const totalVolume = activeTab === 'custos' ? volume : transactions * averageTicket;

    const creditVolume = (totalVolume * creditPercent) / 100;
    const pixVolume = (totalVolume * pixPercent) / 100;
    const boletoVolume = (totalVolume * boletoPercent) / 100;

    const creditCost = (creditVolume * gateway.creditFee) / 100;
    const pixCost = (pixVolume * gateway.pixFee) / 100;
    const boletoCost = (boletoVolume * gateway.boletoFee) / 100;

    return creditCost + pixCost + boletoCost + gateway.monthlyFee;
  };

  const calculateRevenue = (gateway: GatewayComparison) => {
    const totalVolume = transactions * averageTicket;
    const costs = calculateCost(gateway);
    return totalVolume - costs;
  };

  const results = gateways.map((gateway) => ({
    ...gateway,
    totalCost: calculateCost(gateway),
    revenue: calculateRevenue(gateway),
  })).sort((a, b) => a.totalCost - b.totalCost);

  const xscalesResult = results.find((r) => r.name === 'XSCALES');
  const xscalesCost = xscalesResult?.totalCost || 0;
  const xscalesRevenue = xscalesResult?.revenue || 0;

  const worstCost = results[results.length - 1].totalCost;
  const maxSaving = worstCost - xscalesCost;
  const maxRevenueGain = xscalesRevenue - results[results.length - 1].revenue;

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: '#050816' }}>
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(255,197,0,0.15) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(255,197,0,0.10)', border: '1px solid rgba(255,197,0,0.20)' }}
          >
            <Calculator size={16} style={{ color: '#FFC500' }} />
            <span className="text-sm font-medium" style={{ color: '#FFC500' }}>
              Calculadora de Economia
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ letterSpacing: '-0.025em' }}
          >
            Compare os Custos do Seu Gateway
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'rgba(248,250,252,0.68)' }}
          >
            Descubra quanto você pode economizar migrando para a XSCALES. Compare com as principais plataformas do mercado.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div
            className="inline-flex p-1 rounded-xl"
            style={{ background: 'rgba(11,16,32,0.60)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <button
              onClick={() => setActiveTab('custos')}
              className="px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{
                background: activeTab === 'custos' ? '#FFC500' : 'transparent',
                color: activeTab === 'custos' ? '#050816' : 'rgba(248,250,252,0.68)',
              }}
            >
              Custos
            </button>
            <button
              onClick={() => setActiveTab('faturamento')}
              className="px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{
                background: activeTab === 'faturamento' ? '#FFC500' : 'transparent',
                color: activeTab === 'faturamento' ? '#050816' : 'rgba(248,250,252,0.68)',
              }}
            >
              Faturamento
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl"
            style={{ background: 'rgba(11,16,32,0.60)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <h3 className="text-xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
              {activeTab === 'custos' ? 'Configure seu Volume Mensal' : 'Configure seu Faturamento'}
            </h3>

            <div className="space-y-6">
              {activeTab === 'custos' ? (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-white">Volume Total (R$)</label>
                    <span className="text-lg font-bold" style={{ color: '#FFC500' }}>
                      {volume.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="5000"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #FFC500 0%, #FFC500 ${((volume - 10000) / (500000 - 10000)) * 100}%, rgba(255,255,255,0.1) ${((volume - 10000) / (500000 - 10000)) * 100}%, rgba(255,255,255,0.1) 100%)`,
                    }}
                  />
                </div>
              ) : (
                <>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-medium text-white">Transações Mensais</label>
                      <span className="text-lg font-bold" style={{ color: '#FFC500' }}>
                        {transactions.toLocaleString('pt-BR')}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="10000"
                      step="100"
                      value={transactions}
                      onChange={(e) => setTransactions(Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #FFC500 0%, #FFC500 ${((transactions - 100) / (10000 - 100)) * 100}%, rgba(255,255,255,0.1) ${((transactions - 100) / (10000 - 100)) * 100}%, rgba(255,255,255,0.1) 100%)`,
                      }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-medium text-white">Ticket Médio (R$)</label>
                      <span className="text-lg font-bold" style={{ color: '#FFC500' }}>
                        {averageTicket.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="500"
                      step="5"
                      value={averageTicket}
                      onChange={(e) => setAverageTicket(Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #FFC500 0%, #FFC500 ${((averageTicket - 10) / (500 - 10)) * 100}%, rgba(255,255,255,0.1) ${((averageTicket - 10) / (500 - 10)) * 100}%, rgba(255,255,255,0.1) 100%)`,
                      }}
                    />
                  </div>
                  <div
                    className="p-4 rounded-lg"
                    style={{ background: 'rgba(255,197,0,0.08)', border: '1px solid rgba(255,197,0,0.20)' }}
                  >
                    <div className="text-xs mb-1" style={{ color: 'rgba(248,250,252,0.68)' }}>
                      Faturamento Total Estimado
                    </div>
                    <div className="text-2xl font-bold" style={{ color: '#FFC500' }}>
                      {(transactions * averageTicket).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </div>
                  </div>
                </>
              )}

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm" style={{ color: 'rgba(248,250,252,0.68)' }}>
                      Crédito
                    </label>
                    <span className="text-sm font-semibold text-white">{creditPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={creditPercent}
                    onChange={(e) => setCreditPercent(Number(e.target.value))}
                    className="w-full h-1.5 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #FFC500 0%, #FFC500 ${creditPercent}%, rgba(255,255,255,0.1) ${creditPercent}%, rgba(255,255,255,0.1) 100%)`,
                    }}
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm" style={{ color: 'rgba(248,250,252,0.68)' }}>
                      PIX
                    </label>
                    <span className="text-sm font-semibold text-white">{pixPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={pixPercent}
                    onChange={(e) => setPixPercent(Number(e.target.value))}
                    className="w-full h-1.5 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #FFC500 0%, #FFC500 ${pixPercent}%, rgba(255,255,255,0.1) ${pixPercent}%, rgba(255,255,255,0.1) 100%)`,
                    }}
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm" style={{ color: 'rgba(248,250,252,0.68)' }}>
                      Boleto
                    </label>
                    <span className="text-sm font-semibold text-white">{boletoPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={boletoPercent}
                    onChange={(e) => setBoletoPercent(Number(e.target.value))}
                    className="w-full h-1.5 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #FFC500 0%, #FFC500 ${boletoPercent}%, rgba(255,255,255,0.1) ${boletoPercent}%, rgba(255,255,255,0.1) 100%)`,
                    }}
                  />
                </div>
              </div>

              {creditPercent + pixPercent + boletoPercent !== 100 && (
                <div
                  className="p-3 rounded-lg text-xs"
                  style={{ background: 'rgba(239,68,68,0.10)', color: '#fca5a5' }}
                >
                  A soma das porcentagens deve ser 100%
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl"
            style={{ background: 'rgba(11,16,32,0.60)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <h3 className="text-xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
              {activeTab === 'custos' ? 'Comparação de Custos Mensais' : 'Comparação de Faturamento Líquido'}
            </h3>

            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              {results.map((result, index) => (
                <motion.div
                  key={result.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 rounded-xl relative overflow-hidden"
                  style={{
                    background: result.name === 'XSCALES' ? 'rgba(255,197,0,0.08)' : 'rgba(255,255,255,0.03)',
                    border: result.name === 'XSCALES' ? '2px solid rgba(255,197,0,0.35)' : '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  {result.name === 'XSCALES' && (
                    <div
                      className="absolute top-2 right-2 px-2 py-0.5 rounded text-xs font-bold"
                      style={{ background: '#FFC500', color: '#050816' }}
                    >
                      {activeTab === 'custos' ? 'MENOR CUSTO' : 'MAIOR FATURAMENTO'}
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: result.color }}
                      />
                      <span className="font-bold text-white text-sm">{result.name}</span>
                    </div>
                    <span className="text-xs" style={{ color: 'rgba(248,250,252,0.50)' }}>
                      #{index + 1}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xl font-bold text-white">
                      {activeTab === 'custos'
                        ? result.totalCost.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                        : result.revenue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                    <span className="text-xs" style={{ color: 'rgba(248,250,252,0.50)' }}>
                      /mês
                    </span>
                  </div>

                  <div className="text-xs" style={{ color: 'rgba(248,250,252,0.60)' }}>
                    Crédito: {result.creditFee}% • PIX: {result.pixFee}% • Boleto: {result.boletoFee}%
                  </div>

                  {result.name !== 'XSCALES' && (
                    <div className="mt-2 flex items-center gap-1 text-xs" style={{ color: activeTab === 'custos' ? '#ef4444' : '#10b981' }}>
                      <TrendingDown size={12} />
                      <span>
                        {activeTab === 'custos'
                          ? `+${(result.totalCost - xscalesCost).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} mais caro`
                          : `-${(xscalesRevenue - result.revenue).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} menos`}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(255,197,0,0.12) 0%, rgba(255,197,0,0.05) 100%)',
            border: '1px solid rgba(255,197,0,0.20)',
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: '#FFC500' }}
            >
              <Check size={24} style={{ color: '#050816' }} />
            </div>
            <div className="text-left">
              <div className="text-sm" style={{ color: 'rgba(248,250,252,0.68)' }}>
                {activeTab === 'custos' ? 'Economia Anual com XSCALES' : 'Ganho de Faturamento Anual'}
              </div>
              <div className="text-3xl font-bold" style={{ color: '#FFC500' }}>
                {activeTab === 'custos'
                  ? (maxSaving * 12).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                  : (maxRevenueGain * 12).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </div>
            </div>
          </div>

          <p className="text-sm mb-6" style={{ color: 'rgba(248,250,252,0.68)' }}>
            Migre para a XSCALES e reduza seus custos operacionais sem comprometer a qualidade do serviço.
          </p>

          <a
            href="/contato"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
            style={{
              background: '#FFC500',
              color: '#050816',
              boxShadow: '0 0 24px rgba(255,197,0,0.25)',
            }}
          >
            Falar com especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}
