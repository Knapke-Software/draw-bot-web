// Regenerates every logo/icon/social asset. Run: npm run brand
// Text is converted to outlines (Space Grotesk), so outputs need no fonts.
import opentype from 'opentype.js'
import sharp from 'sharp'
import pngToIco from 'png-to-ico'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const M = p => path.join(ROOT, 'marketing', p)
const PUB = p => path.join(ROOT, 'public', p)
for (const d of ['logo', 'icon', 'social']) fs.mkdirSync(M(d), { recursive: true })

const ORANGE = '#e85d04', DARK = '#0a0a10', WHITE = '#ffffff'
const loadFont = w => {
  const b = fs.readFileSync(path.join(ROOT, `node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-${w}-normal.woff`))
  return opentype.parse(b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength))
}
const f400 = loadFont(400), f500 = loadFont(500), f700 = loadFont(700)

function outline(font, text, size, track, x0, base) {
  let x = x0, d = ''
  for (const ch of text) {
    const g = font.charToGlyph(ch)
    d += g.getPath(x, base, size).toPathData(2)
    x += g.advanceWidth * size / font.unitsPerEm + track
  }
  return { d, end: x - track }
}
const r2 = n => +n.toFixed(2)

// ---------- wordmark + ramp ----------
function logo(summitColor, accent) {
  const size = 48, track = size * .3, base = 40
  const a = outline(f500, 'SUMMIT', size, track, 0, base)
  const space = f500.charToGlyph(' ').advanceWidth * size / 1000
  const b = outline(f700, 'ROBOTICS', size, track, a.end + track + space, base)
  const W = Math.ceil(b.end)
  const SEG = [[3,9],[3,8],[4,7],[6,7],[8,6],[11,6],[15,5],[20,5],[28,4],[40,3]]
  const s = 2, y = base + 30, h = 6, R = 12
  let x = 0, rp = ''
  for (const [l, g] of SEG) { rp += `<rect x="${r2(x)}" y="${y - h/2}" width="${l*s}" height="${h}" rx="3"/>`; x += (l + g) * s }
  rp += `<rect x="${r2(x)}" y="${y - h/2}" width="${r2(W - R - x)}" height="${h}" rx="3"/><circle cx="${W - R}" cy="${y}" r="${R}"/>`
  const H = y + R
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Summit Robotics"><title>Summit Robotics</title><path fill="${summitColor}" d="${a.d}"/><g fill="${accent}"><path d="${b.d}"/>${rp}</g></svg>`
  return { svg, W, H }
}

// ---------- SR icon (48 box) ----------
function icon({ shape = 'tile', bg = DARK, fg = WHITE, accent = ORANGE }) {
  const w = outline(f700, 'SR', 21, -.5, 0, 0).end
  const t = outline(f700, 'SR', 21, -.5, 24 - w / 2, 28)
  const base = shape === 'circle' ? `<circle cx="24" cy="24" r="24" fill="${bg}"/>`
    : `<rect width="48" height="48" rx="${shape === 'square' ? 0 : 11}" fill="${bg}"/>`
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>Summit Robotics</title>${base}<path fill="${fg}" d="${t.d}"/><g fill="${accent}"><circle cx="9" cy="39" r="1.7"/><rect x="14" y="37.6" width="4" height="2.8" rx="1.4"/><rect x="21" y="37.6" width="7" height="2.8" rx="1.4"/><circle cx="37" cy="39" r="3.2"/></g></svg>`
}

const write = (file, data) => fs.writeFileSync(file, data)
const png = (svg, width, file, opts = {}) =>
  sharp(Buffer.from(svg), { density: Math.max(72, Math.ceil(72 * width / (opts.vbW || 48) * 2)) }).resize({ width }).png().toFile(file)
const dataUri = svg => 'data:image/svg+xml;base64,' + Buffer.from(svg).toString('base64')

// ---------- logos ----------
const L = {
  'logo-on-dark':   logo(WHITE, ORANGE),
  'logo-on-light':  logo(DARK, ORANGE),
  'logo-mono-white': logo(WHITE, WHITE),
  'logo-mono-black': logo(DARK, DARK),
}
for (const [name, { svg, W }] of Object.entries(L)) {
  write(M(`logo/${name}.svg`), svg)
  await png(svg, 2400, M(`logo/${name}.png`), { vbW: W })
}

// ---------- icons ----------
const I = {
  'icon-tile':        icon({}),
  'icon-square':      icon({ shape: 'square' }),
  'icon-round':       icon({ shape: 'circle' }),
  'icon-orange-tile': icon({ bg: ORANGE, accent: DARK }),
}
for (const [name, svg] of Object.entries(I)) {
  write(M(`icon/${name}.svg`), svg)
  await png(svg, 1024, M(`icon/${name}.png`))
}

// ---------- social ----------
const wrap = (w, h, inner) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" fill="${DARK}"/>${inner}</svg>`
const onDark = L['logo-on-dark']
function banner(w, h, logoW, tagline, tagSize, gap) {
  const lh = logoW * onDark.H / onDark.W
  const tg = outline(f400, tagline, tagSize, tagSize * .02, 0, 0)
  const total = lh + gap + tagSize
  const top = (h - total) / 2
  const tgl = outline(f400, tagline, tagSize, tagSize * .02, (w - tg.end) / 2, top + lh + gap + tagSize * .75)
  return wrap(w, h, `<image href="${dataUri(onDark.svg)}" x="${(w - logoW) / 2}" y="${top}" width="${logoW}" height="${lh}"/><path fill="#a1a1aa" d="${tgl.d}"/>`)
}
const og = banner(1200, 630, 820, 'Autonomous construction layout. Launching 2027.', 34, 44)
write(M('social/og-image.svg'), og)
await sharp(Buffer.from(og), { density: 144 }).resize(1200, 630).png().toFile(M('social/og-image.png'))
const li = banner(1584, 396, 760, 'Autonomous construction layout. Launching 2027.', 30, 34)
write(M('social/linkedin-banner.svg'), li)
await sharp(Buffer.from(li), { density: 144 }).resize(1584, 396).png().toFile(M('social/linkedin-banner.png'))
await png(I['icon-round'], 800, M('social/avatar-round-800.png'))
await png(I['icon-square'], 800, M('social/avatar-square-800.png'))
await png(L['logo-on-light'].svg, 600, M('social/email-signature-600w.png'), { vbW: L['logo-on-light'].W })

// ---------- site assets (public/) ----------
write(PUB('logo.svg'), L['logo-on-dark'].svg)
write(PUB('logo-light.svg'), L['logo-on-light'].svg)
write(PUB('favicon.svg'), I['icon-tile'])
await png(I['icon-square'], 180, PUB('apple-touch-icon.png'))
await png(I['icon-tile'], 512, PUB('logo-512.png'))
const ico = []
for (const n of [16, 32, 48]) ico.push(await sharp(Buffer.from(I['icon-tile']), { density: 600 }).resize(n, n).png().toBuffer())
write(PUB('favicon.ico'), await pngToIco(ico))
console.log('brand assets generated')
