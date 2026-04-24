import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'C:/Users/enzog/Documentos/GitHub/XSCALES';
const DOWNLOADS_DIR = 'C:/Users/enzog/Downloads';
const OUTPUT_DIR = path.join(ROOT, 'artifacts/xscales-site/public/payretailers/markets');
const GENERATED_DATA_PATH = path.join(
  ROOT,
  'artifacts/xscales-site/src/data/payretailersAssets.generated.json',
);

const pageFiles = {
  argentina: 'PayRetailers： Mercados Argentina (16_04_2026 16：40：28).html',
  brasil: 'PayRetailers (16_04_2026 16：40：57).html',
  chile: 'PayRetailers： Mercados Chile (16_04_2026 16：41：11).html',
  colombia: 'PayRetailers (16_04_2026 16：41：34).html',
  'costa-rica': 'PayRetailers： Mercados Costa Rica (16_04_2026 16：41：51).html',
  equador: 'PayRetailers (16_04_2026 16：42：13).html',
  guatemala: 'PayRetailers： Mercados Guatemala (16_04_2026 16：42：30).html',
  mexico: 'PayRetailers (16_04_2026 16：42：50).html',
  peru: 'PayRetailers： Mercados Perú (16_04_2026 16：43：12).html',
};

const flagAltBySlug = {
  argentina: ['argentina'],
  brasil: ['brasil'],
  chile: ['chile'],
  colombia: ['colômbia', 'colombia'],
  'costa-rica': ['costa rica'],
  equador: ['equador'],
  guatemala: ['guatemala'],
  mexico: ['méxico', 'mexico'],
  peru: ['peru', 'perú'],
};

const IMG_TAG_RE = /<img\b[^>]*>/gi;
const ATTR_RE = /([^\s=]+)(?:=(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/gi;

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function slugify(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parseAttributes(tag) {
  const attributes = {};
  for (const match of tag.matchAll(ATTR_RE)) {
    const [, name, doubleQuoted, singleQuoted, bare] = match;
    if (!name) continue;
    if (name.toLowerCase() === 'img') continue;
    const value = doubleQuoted ?? singleQuoted ?? bare ?? '';
    attributes[name.toLowerCase()] = value;
  }
  return attributes;
}

function decodeDataUri(uri) {
  const match = uri.match(/^data:([^;,]+)(;base64)?,(.*)$/s);
  if (!match) return null;
  const [, mimeType, base64Flag, rawData] = match;
  const buffer = base64Flag
    ? Buffer.from(rawData, 'base64')
    : Buffer.from(decodeURIComponent(rawData), 'utf8');
  return { mimeType, buffer };
}

function parsePngSize(buffer) {
  if (buffer.length < 24) return { width: 0, height: 0 };
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

function parseSvgSize(buffer) {
  const text = buffer.toString('utf8');
  const widthMatch = text.match(/\bwidth=["']?([\d.]+)(?:px)?["']?/i);
  const heightMatch = text.match(/\bheight=["']?([\d.]+)(?:px)?["']?/i);
  if (widthMatch && heightMatch) {
    return {
      width: Number.parseFloat(widthMatch[1]) || 0,
      height: Number.parseFloat(heightMatch[1]) || 0,
    };
  }

  const viewBoxMatch = text.match(/\bviewBox=["']?([\d.\s-]+)["']?/i);
  if (!viewBoxMatch) return { width: 0, height: 0 };
  const [, viewBox] = viewBoxMatch;
  const parts = viewBox.trim().split(/\s+/).map(Number);
  if (parts.length !== 4 || parts.some(Number.isNaN)) {
    return { width: 0, height: 0 };
  }

  return {
    width: parts[2],
    height: parts[3],
  };
}

function getDimensions(mimeType, buffer) {
  if (mimeType === 'image/png') return parsePngSize(buffer);
  if (mimeType === 'image/svg+xml') return parseSvgSize(buffer);
  return { width: 0, height: 0 };
}

function extensionForMime(mimeType) {
  if (mimeType === 'image/png') return 'png';
  if (mimeType === 'image/svg+xml') return 'svg';
  if (mimeType === 'image/jpeg') return 'jpg';
  if (mimeType === 'image/webp') return 'webp';
  return 'bin';
}

function writeAsset(targetPath, buffer) {
  if (!fs.existsSync(targetPath)) {
    fs.writeFileSync(targetPath, buffer);
  }
}

function saveFlagAsset({ slug, marketDir, alt, src, manifest }) {
  if (!src || !src.startsWith('data:image/')) return;
  const decoded = decodeDataUri(src);
  if (!decoded) return;

  const extension = extensionForMime(decoded.mimeType);
  const dimensions = getDimensions(decoded.mimeType, decoded.buffer);
  const filePath = path.join(marketDir, `flag.${extension}`);
  writeAsset(filePath, decoded.buffer);

  manifest.flag = {
    alt,
    file: `/payretailers/markets/${slug}/flag.${extension}`,
    width: dimensions.width,
    height: dimensions.height,
  };
}

function extractAssetsForMarket(slug, fileName) {
  const filePath = path.join(DOWNLOADS_DIR, fileName);
  const html = fs.readFileSync(filePath, 'utf8');
  const marketDir = path.join(OUTPUT_DIR, slug);
  const logosDir = path.join(marketDir, 'logos');
  ensureDir(logosDir);

  const manifest = {
    slug,
    fileName,
    flag: null,
    logos: [],
  };

  const countrySectionMatch = html.match(/PaymentMethodDetail-country[\s\S]{0,2000}?(<img\b[^>]*>)/i);
  if (countrySectionMatch) {
    const attributes = parseAttributes(countrySectionMatch[1]);
    saveFlagAsset({
      slug,
      marketDir,
      alt: attributes.alt || slug,
      src: attributes.src || attributes['data-src'] || attributes['data-lazy-src'],
      manifest,
    });
  }

  for (const match of html.matchAll(IMG_TAG_RE)) {
    const tag = match[0];
    const attributes = parseAttributes(tag);
    const src = attributes.src || attributes['data-src'] || attributes['data-lazy-src'];
    if (!src || !src.startsWith('data:image/')) {
      continue;
    }

    const alt = attributes.alt || 'asset';
    const isFlag =
      tag.includes('PaymentMethodDetail-country') ||
      flagAltBySlug[slug].includes((alt || '').toLowerCase());
    const isPaymentLogo = tag.includes('PaymentMethods-logo');
    if (!isFlag && !isPaymentLogo) {
      continue;
    }

    const decoded = decodeDataUri(src);
    if (!decoded) continue;

    const extension = extensionForMime(decoded.mimeType);
    const dimensions = getDimensions(decoded.mimeType, decoded.buffer);

    if (isFlag) {
      saveFlagAsset({ slug, marketDir, alt, src, manifest });
      continue;
    }

    const fileSlug = slugify(alt);
    const outputPath = path.join(logosDir, `${fileSlug}.${extension}`);
    writeAsset(outputPath, decoded.buffer);

    manifest.logos.push({
      alt,
      file: `/payretailers/markets/${slug}/logos/${fileSlug}.${extension}`,
      width: dimensions.width,
      height: dimensions.height,
    });
  }

  const dedupedLogos = [];
  const seen = new Set();
  for (const logo of manifest.logos) {
    const key = `${logo.alt}:${logo.file}`;
    if (seen.has(key)) continue;
    seen.add(key);
    dedupedLogos.push(logo);
  }
  manifest.logos = dedupedLogos;

  return manifest;
}

ensureDir(OUTPUT_DIR);

const manifests = Object.entries(pageFiles).map(([slug, fileName]) => extractAssetsForMarket(slug, fileName));
fs.writeFileSync(
  path.join(OUTPUT_DIR, 'manifest.json'),
  `${JSON.stringify(manifests, null, 2)}\n`,
  'utf8',
);
fs.writeFileSync(GENERATED_DATA_PATH, `${JSON.stringify(manifests, null, 2)}\n`, 'utf8');

console.log(`Extracted assets for ${manifests.length} market pages.`);
