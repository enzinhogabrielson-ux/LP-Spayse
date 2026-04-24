import { useState, type CSSProperties } from 'react';
import { platformLogos } from '@/components/calculadora/PlatformLogos';
import { getLang } from '@/lib/lang';
import { tr } from '@/lib/i18n';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const platforms = [
  { id: 'hotmart', name: 'Hotmart', taxa: 12 },
  { id: 'kiwify', name: 'Kiwify', taxa: 9.49 },
  { id: 'eduzz', name: 'Eduzz', taxa: 8.78 },
  { id: 'perfectpay', name: 'Perfectpay', taxa: 7.99 },
  { id: 'braip', name: 'Braip', taxa: 9 },
  { id: 'ticto', name: 'Ticto', taxa: 5.79 },
  { id: 'monetizze', name: 'Monetizze', taxa: 8 },
  { id: 'kirvano', name: 'Kirvano', taxa: 5.49 },
];

const XSCALES_TAXA = 3.5;
const FAT_MIN = 100_000;
const FAT_MAX = 1_000_000;
const VALOR_MIN = 50_000;
const VALOR_MAX = 10_000_000;
const PROD_MIN = 50;
const PROD_MAX = 50_000;

const GOLD = '#FFC500';
const TEAL = '#009FAD';

type Platform = (typeof platforms)[number];
type ViewMode = 'costs' | 'revenue';
type ChartMode = 'bar' | 'area';

function getLocale(lang: ReturnType<typeof getLang>) {
  if (lang === 'en') return 'en-US';
  if (lang === 'es') return 'es-419';
  return 'pt-BR';
}

function calcSliderPct(value: number, min: number, max: number) {
  return ((value - min) / (max - min)) * 100;
}

function PlatformBtn({
  platform,
  active,
  onSelect,
}: {
  platform: Platform;
  active: boolean;
  onSelect: (platform: Platform) => void;
}) {
  const Logo = platformLogos[platform.id];

  return (
    <button
      onClick={() => onSelect(platform)}
      className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200"
      style={
        active
          ? { background: GOLD, color: '#050A18', border: `1.5px solid ${GOLD}` }
          : {
              background: '#0C1220',
              color: 'rgba(248,250,252,0.72)',
              border: '1.5px solid rgba(255,255,255,0.08)',
            }
      }
    >
      <span className="flex-shrink-0 overflow-hidden rounded-lg" style={{ width: 26, height: 26 }}>
        {Logo ? <Logo size={26} /> : null}
      </span>
      <span className="truncate">{platform.name}</span>
    </button>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  onChange,
  displayValue,
  minLabel,
  maxLabel,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  displayValue: string;
  minLabel: string;
  maxLabel: string;
}) {
  const pct = calcSliderPct(value, min, max);

  return (
    <div className="mb-8">
      <p className="mb-2 text-sm" style={{ color: 'rgba(248,250,252,0.50)' }}>
        {label}
      </p>
      <p className="mb-5 text-4xl font-bold text-white md:text-5xl" style={{ letterSpacing: '-0.03em' }}>
        {displayValue}
      </p>
      <div className="mb-2">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="calc-slider w-full"
          style={{ '--sp': `${pct}%` } as CSSProperties}
        />
      </div>
      <div className="flex justify-between">
        <span className="text-xs font-semibold" style={{ color: GOLD }}>
          {minLabel}
        </span>
        <span className="text-xs font-semibold" style={{ color: GOLD }}>
          {maxLabel}
        </span>
      </div>
    </div>
  );
}

function NumberInput({
  label,
  value,
  step,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  step?: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="mb-5">
      <p className="mb-3 text-sm" style={{ color: 'rgba(248,250,252,0.50)' }}>
        {label}
      </p>
      <input
        type="number"
        min={min ?? 0}
        max={max}
        step={step ?? 1}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full rounded-xl px-4 py-3 text-sm text-white transition-colors focus:outline-none"
        style={{ background: '#0C1220', border: '1.5px solid rgba(255,255,255,0.08)' }}
        onFocus={(event) => {
          event.currentTarget.style.borderColor = 'rgba(255,197,0,0.40)';
        }}
        onBlur={(event) => {
          event.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
        }}
      />
    </div>
  );
}

export default function CalculatorSection() {
  const lang = getLang();
  const locale = getLocale(lang);
  const t = (key: string) => tr(key, lang);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat(locale, { style: 'currency', currency: 'BRL' }).format(value);

  const formatCompactCurrency = (value: number) =>
    new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'BRL',
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(value);

  const formatNumber = (value: number) => new Intl.NumberFormat(locale).format(value);

  const [view, setView] = useState<ViewMode>('costs');
  const [faturamento, setFaturamento] = useState(691_000);
  const [selectedId, setSelectedId] = useState('hotmart');
  const [customTaxa, setCustomTaxa] = useState(12);
  const [valorMedio, setValorMedio] = useState(100_000);
  const [numProdutores, setNumProdutores] = useState(100);
  const [lucroPct, setLucroPct] = useState(2.5);
  const [crescimento, setCrescimento] = useState(20);
  const [chartType, setChartType] = useState<ChartMode>('bar');

  const custoOutros = faturamento * (customTaxa / 100);
  const custoXscales = faturamento * (XSCALES_TAXA / 100);
  const baseLucro = valorMedio * numProdutores * (lucroPct / 100);
  const growthFactor = 1 + crescimento / 100;
  const meses = Array.from({ length: 12 }, (_, index) => baseLucro * Math.pow(growthFactor, 2 * index));
  const totalAnual = meses.reduce((sum, value) => sum + value, 0);

  const handlePlatform = (platform: Platform) => {
    setSelectedId(platform.id);
    setCustomTaxa(platform.taxa);
  };

  const monthLabel = (month: number) => `${t('calc.month')} ${month}`;
  const producerRangeLabel = (value: number) => `${formatNumber(value)} ${t('calc.producers')}`;

  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{ background: '#060B18' }}>
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,197,0,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{ background: 'rgba(255,197,0,0.10)', border: '1px solid rgba(255,197,0,0.25)' }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: GOLD }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: GOLD }}>
              {t('calc.badge')}
            </span>
          </div>

          <h2
            className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            {t('calc.title1')}
            <span style={{ color: GOLD }}>{t('calc.title2')}</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base md:text-lg" style={{ color: 'rgba(248,250,252,0.60)' }}>
            {t('calc.subtitle')}
          </p>
        </div>

        <div className="mb-10 flex justify-end">
          <div
            className="flex items-center gap-0 rounded-full p-1"
            style={{ background: '#0C1220', border: '1px solid rgba(255,255,255,0.10)' }}
          >
            {([
              { id: 'costs', label: t('calc.costs') },
              { id: 'revenue', label: t('calc.revenue') },
            ] as const).map((option) => (
              <button
                key={option.id}
                onClick={() => setView(option.id)}
                className="rounded-full px-5 py-1.5 text-sm font-medium transition-all duration-200"
                style={
                  view === option.id
                    ? { background: GOLD, color: '#060B18' }
                    : { color: 'rgba(248,250,252,0.50)', background: 'transparent' }
                }
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {view === 'costs' && (
          <div className="grid items-start gap-8 lg:grid-cols-[3fr_2fr]">
            <div>
              <SliderField
                label={t('calc.monthlyRevenue')}
                value={faturamento}
                min={FAT_MIN}
                max={FAT_MAX}
                step={10_000}
                onChange={setFaturamento}
                displayValue={formatCurrency(faturamento)}
                minLabel={formatCurrency(FAT_MIN)}
                maxLabel={formatCurrency(FAT_MAX)}
              />

              <p className="mb-4 text-sm" style={{ color: 'rgba(248,250,252,0.50)' }}>
                {t('calc.platformUsed')}
              </p>
              <div className="mb-8 grid grid-cols-6 gap-2">
                {platforms.map((platform, i) => (
                  <div
                    key={platform.id}
                    className={`col-span-2 ${i === 6 ? 'col-start-2' : ''}`}
                  >
                    <PlatformBtn
                      platform={platform}
                      active={selectedId === platform.id}
                      onSelect={handlePlatform}
                    />
                  </div>
                ))}
              </div>

              <NumberInput
                label={t('calc.customRate')}
                value={customTaxa}
                step={0.1}
                min={0}
                max={100}
                onChange={setCustomTaxa}
              />
            </div>

            <div className="flex flex-col gap-4">
              <div
                className="rounded-2xl p-5"
                style={{
                  background: 'linear-gradient(145deg,#1C0A08 0%,#2D1010 100%)',
                  border: '1px solid rgba(239,68,68,0.22)',
                }}
              >
                <div className="mb-8 flex items-start justify-between">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: 'linear-gradient(135deg,#EF4444 0%,#B91C1C 100%)' }}
                  >
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 22 }}>🔥</span>
                </div>

                <p className="mb-2 text-xs" style={{ color: 'rgba(248,250,252,0.50)' }}>
                  {t('calc.costOthers')}
                </p>
                <p className="mb-4 text-2xl font-bold text-white" style={{ letterSpacing: '-0.025em' }}>
                  {formatCurrency(custoOutros)}
                </p>
                <div className="flex items-center gap-1.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                  <span className="text-sm font-semibold" style={{ color: '#EF4444' }}>
                    {customTaxa.toFixed(1)}% {t('calc.rateLabel')}
                  </span>
                </div>
              </div>

              <div
                className="rounded-2xl p-5"
                style={{
                  background: 'linear-gradient(145deg,#030D10 0%,#05181E 100%)',
                  border: '1px solid rgba(0,159,173,0.25)',
                }}
              >
                <div className="mb-8 flex items-start justify-between">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: `linear-gradient(135deg,${TEAL} 0%,#007A87 100%)` }}
                  >
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                      <polyline points="16 17 22 17 22 11" />
                    </svg>
                  </div>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(0,159,173,0.70)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </div>

                <p className="mb-2 text-xs" style={{ color: 'rgba(248,250,252,0.50)' }}>
                  {t('calc.savingsXscales')}
                </p>
                <p className="mb-4 text-2xl font-bold text-white" style={{ letterSpacing: '-0.025em' }}>
                  {formatCurrency(custoXscales)}
                </p>
                <div className="flex items-center gap-1.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={TEAL}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                    <polyline points="16 17 22 17 22 11" />
                  </svg>
                  <span className="text-sm font-semibold" style={{ color: TEAL }}>
                    {XSCALES_TAXA.toFixed(1)}% {t('calc.rateLabel')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'revenue' && (
          <div className="grid items-start gap-8 lg:grid-cols-[3fr_2fr]">
            <div>
              <SliderField
                label={t('calc.avgRevenue')}
                value={valorMedio}
                min={VALOR_MIN}
                max={VALOR_MAX}
                step={50_000}
                onChange={setValorMedio}
                displayValue={formatCurrency(valorMedio)}
                minLabel={formatCurrency(VALOR_MIN)}
                maxLabel={formatCurrency(VALOR_MAX)}
              />

              <SliderField
                label={t('calc.numProducers')}
                value={numProdutores}
                min={PROD_MIN}
                max={PROD_MAX}
                step={50}
                onChange={setNumProdutores}
                displayValue={formatNumber(numProdutores)}
                minLabel={producerRangeLabel(PROD_MIN)}
                maxLabel={producerRangeLabel(PROD_MAX)}
              />

              <NumberInput label={t('calc.profitPct')} value={lucroPct} step={0.1} min={0} onChange={setLucroPct} />
              <NumberInput
                label={t('calc.growthForecast')}
                value={crescimento}
                step={1}
                min={0}
                onChange={setCrescimento}
              />
            </div>

            <div className="flex flex-col gap-4">
              <div
                className="overflow-hidden rounded-2xl"
                style={{ background: '#0C1220', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="px-5 pb-3 pt-5">
                  <p className="text-sm font-semibold text-white">{t('calc.profitMonth')}</p>
                </div>
                <div className="px-3 pb-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr>
                        <th className="px-2 py-1.5 text-left text-xs font-medium" style={{ color: 'rgba(248,250,252,0.40)' }}>
                          {t('calc.month')}
                        </th>
                        <th className="px-2 py-1.5 text-left text-xs font-medium" style={{ color: 'rgba(248,250,252,0.40)' }}>
                          {t('calc.profits')}
                        </th>
                        <th className="px-2 py-1.5 text-left text-xs font-medium" style={{ color: 'rgba(248,250,252,0.40)' }}>
                          {t('calc.month')}
                        </th>
                        <th className="px-2 py-1.5 text-left text-xs font-medium" style={{ color: 'rgba(248,250,252,0.40)' }}>
                          {t('calc.profits')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <tr key={index} className="border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                          <td className="px-2 py-2 text-xs" style={{ color: 'rgba(248,250,252,0.55)' }}>
                            {monthLabel(index + 1)}
                          </td>
                          <td className="px-2 py-2 text-xs font-semibold" style={{ color: GOLD }}>
                            {formatCompactCurrency(meses[index])}
                          </td>
                          <td className="px-2 py-2 text-xs" style={{ color: 'rgba(248,250,252,0.55)' }}>
                            {monthLabel(index + 7)}
                          </td>
                          <td className="px-2 py-2 text-xs font-semibold" style={{ color: GOLD }}>
                            {formatCompactCurrency(meses[index + 6])}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div
                className="overflow-hidden rounded-2xl"
                style={{ background: '#0C1220', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="flex items-center justify-between px-5 pb-3 pt-5">
                  <p className="text-sm font-semibold text-white">{t('calc.profitGrowth')}</p>
                  <div
                    className="flex items-center gap-0.5 rounded-lg p-0.5"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}
                  >
                    {([
                      { id: 'bar', label: t('calc.bars') },
                      { id: 'area', label: t('calc.area') },
                    ] as const).map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setChartType(option.id)}
                        className="rounded-md px-3 py-1 text-xs font-medium transition-all"
                        style={{
                          background: chartType === option.id ? 'rgba(255,197,0,0.15)' : 'transparent',
                          color: chartType === option.id ? GOLD : 'rgba(248,250,252,0.45)',
                          border:
                            chartType === option.id
                              ? '1px solid rgba(255,197,0,0.35)'
                              : '1px solid transparent',
                        }}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="px-2 pb-4" style={{ height: 180 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    {chartType === 'bar' ? (
                      <BarChart
                        data={meses.map((value, index) => ({ mes: `M${index + 1}`, lucro: value }))}
                        margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
                        barCategoryGap="30%"
                      >
                        <XAxis
                          dataKey="mes"
                          tick={{ fill: 'rgba(248,250,252,0.40)', fontSize: 10 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis hide />
                        <Tooltip
                          cursor={{ fill: 'rgba(0,159,173,0.06)' }}
                          content={({ active, payload, label }) => {
                            if (!active || !payload?.length) return null;

                            const index = parseInt(String(label).replace('M', ''), 10) - 1;
                            const growth =
                              index === 0
                                ? null
                                : ((meses[index] - meses[index - 1]) / Math.abs(meses[index - 1])) * 100;

                            return (
                              <div
                                className="rounded-xl px-3 py-2 text-xs"
                                style={{
                                  background: '#0F1E30',
                                  border: '1px solid rgba(0,159,173,0.30)',
                                  color: '#fff',
                                }}
                              >
                                <p className="mb-0.5" style={{ color: 'rgba(248,250,252,0.55)' }}>
                                  {monthLabel(index + 1)}
                                </p>
                                <p className="mb-1 font-semibold" style={{ color: GOLD }}>
                                  {formatCurrency(payload[0].value as number)}
                                </p>
                                {growth !== null ? (
                                  <span
                                    className="inline-block rounded px-1.5 py-0.5 text-xs font-medium"
                                    style={{
                                      background: 'rgba(0,159,173,0.15)',
                                      color: TEAL,
                                      border: '1px solid rgba(0,159,173,0.30)',
                                    }}
                                  >
                                    +{growth.toFixed(1)}%
                                  </span>
                                ) : (
                                  <span
                                    className="inline-block rounded px-1.5 py-0.5 text-xs font-medium"
                                    style={{
                                      background: 'rgba(255,197,0,0.12)',
                                      color: GOLD,
                                      border: '1px solid rgba(255,197,0,0.25)',
                                    }}
                                  >
                                    Base
                                  </span>
                                )}
                              </div>
                            );
                          }}
                        />
                        <Bar dataKey="lucro" radius={[4, 4, 0, 0]}>
                          {meses.map((_, index) => (
                            <Cell key={index} fill={`rgba(0,159,173,${0.35 + (index / 11) * 0.65})`} />
                          ))}
                        </Bar>
                      </BarChart>
                    ) : (
                      <AreaChart
                        data={meses.map((value, index) => ({ mes: `M${index + 1}`, lucro: value }))}
                        margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="lucroGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={TEAL} stopOpacity={0.35} />
                            <stop offset="95%" stopColor={TEAL} stopOpacity={0.02} />
                          </linearGradient>
                        </defs>
                        <XAxis
                          dataKey="mes"
                          tick={{ fill: 'rgba(248,250,252,0.40)', fontSize: 10 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis hide />
                        <Tooltip
                          cursor={{ stroke: 'rgba(0,159,173,0.25)', strokeWidth: 1 }}
                          content={({ active, payload, label }) => {
                            if (!active || !payload?.length) return null;

                            const index = parseInt(String(label).replace('M', ''), 10) - 1;
                            const growth =
                              index === 0
                                ? null
                                : ((meses[index] - meses[index - 1]) / Math.abs(meses[index - 1])) * 100;

                            return (
                              <div
                                className="rounded-xl px-3 py-2 text-xs"
                                style={{
                                  background: '#0F1E30',
                                  border: '1px solid rgba(0,159,173,0.30)',
                                  color: '#fff',
                                }}
                              >
                                <p className="mb-0.5" style={{ color: 'rgba(248,250,252,0.55)' }}>
                                  {monthLabel(index + 1)}
                                </p>
                                <p className="mb-1 font-semibold" style={{ color: GOLD }}>
                                  {formatCurrency(payload[0].value as number)}
                                </p>
                                {growth !== null ? (
                                  <span
                                    className="inline-block rounded px-1.5 py-0.5 text-xs font-medium"
                                    style={{
                                      background: 'rgba(0,159,173,0.15)',
                                      color: TEAL,
                                      border: '1px solid rgba(0,159,173,0.30)',
                                    }}
                                  >
                                    +{growth.toFixed(1)}%
                                  </span>
                                ) : (
                                  <span
                                    className="inline-block rounded px-1.5 py-0.5 text-xs font-medium"
                                    style={{
                                      background: 'rgba(255,197,0,0.12)',
                                      color: GOLD,
                                      border: '1px solid rgba(255,197,0,0.25)',
                                    }}
                                  >
                                    Base
                                  </span>
                                )}
                              </div>
                            );
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="lucro"
                          stroke={TEAL}
                          strokeWidth={2}
                          fill="url(#lucroGradient)"
                          dot={false}
                          activeDot={{ r: 4, fill: TEAL, stroke: '#0C1220', strokeWidth: 2 }}
                        />
                      </AreaChart>
                    )}
                  </ResponsiveContainer>
                </div>
              </div>

              <div
                className="rounded-2xl p-5"
                style={{
                  background: 'linear-gradient(145deg,#030D10 0%,#05181E 100%)',
                  border: '1px solid rgba(0,159,173,0.25)',
                }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                    style={{ background: `linear-gradient(135deg,${TEAL} 0%,#007A87 100%)` }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                      <polyline points="16 17 22 17 22 11" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium" style={{ color: 'rgba(248,250,252,0.65)' }}>
                    {t('calc.totalYear')}
                  </p>
                </div>
                <p className="text-2xl font-bold text-white" style={{ letterSpacing: '-0.025em' }}>
                  {formatCurrency(totalAnual)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
