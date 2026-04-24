function PlatformImg({ src, alt, size }: { src: string; alt: string; size: number }) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return (
    <img
      src={`${base}${src}`}
      alt={alt}
      width={size}
      height={size}
      style={{ objectFit: 'contain', borderRadius: 6, display: 'block' }}
    />
  );
}

export function HotmartLogo({ size = 24 }: { size?: number }) {
  return <PlatformImg src="/platform-logos/hotmart.png" alt="Hotmart" size={size} />;
}

export function KiwifyLogo({ size = 24 }: { size?: number }) {
  return <PlatformImg src="/platform-logos/kiwify.webp" alt="Kiwify" size={size} />;
}

export function EduzzLogo({ size = 24 }: { size?: number }) {
  return <PlatformImg src="/platform-logos/eduzz.png" alt="Eduzz" size={size} />;
}

export function PerfectpayLogo({ size = 24 }: { size?: number }) {
  return <PlatformImg src="/platform-logos/perfectpay.png" alt="Perfectpay" size={size} />;
}

export function BraipLogo({ size = 24 }: { size?: number }) {
  return <PlatformImg src="/platform-logos/braip.png" alt="Braip" size={size} />;
}

export function TictoLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#111827" />
      <rect x="8" y="9" width="16" height="3" rx="1.5" fill="white" />
      <rect x="13.5" y="12" width="5" height="13" rx="2.5" fill="white" />
    </svg>
  );
}

export function MonetizzeLogo({ size = 24 }: { size?: number }) {
  return <PlatformImg src="/platform-logos/monetizze.png" alt="Monetizze" size={size} />;
}

export function KirvanoLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#1E1E1E" />
      <text x="7" y="24" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="20" fill="white">K</text>
    </svg>
  );
}

export const platformLogos: Record<string, React.FC<{ size?: number }>> = {
  hotmart: HotmartLogo,
  kiwify: KiwifyLogo,
  eduzz: EduzzLogo,
  perfectpay: PerfectpayLogo,
  braip: BraipLogo,
  ticto: TictoLogo,
  monetizze: MonetizzeLogo,
  kirvano: KirvanoLogo,
};
