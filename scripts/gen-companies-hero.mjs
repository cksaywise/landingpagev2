import sharp from "sharp";

// Logical grid (each cell = one "pixel" of the 8-bit art).
// Upscaled with nearest-neighbor to match the original 1920px-wide image.
const GW = 240;
const GH = 120;
const SCALE = 8;
const W = GW * SCALE;
const H = GH * SCALE;

const c = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255, 255];
};

const pal = {
  // warm dawn gradient (vs the original cool daytime sky)
  skyTop: c("#f9c8a8"),    // warm peach
  skyMid: c("#fbdcc0"),    // softer peach
  skyLow: c("#fdedd9"),    // pale cream
  skyHaze: c("#fef4e6"),   // near-white wash before fade
  // sun
  sunCore: c("#ffd486"),
  sunRim: c("#f5a566"),
  sunGlow: c("#f9c2a0"),
  // clouds — white with peach undershading
  cloud: c("#ffffff"),
  cloudShade: c("#f4cdaf"),
};

const buf = Buffer.alloc(GW * GH * 4);

const idx = (x, y) => (y * GW + x) * 4;
const setPx = (x, y, col) => {
  if (x < 0 || x >= GW || y < 0 || y >= GH) return;
  const i = idx(x, y);
  buf[i] = col[0]; buf[i + 1] = col[1]; buf[i + 2] = col[2]; buf[i + 3] = col[3];
};
const fillRect = (x, y, w, h, col) => {
  for (let dy = 0; dy < h; dy++) for (let dx = 0; dx < w; dx++) setPx(x + dx, y + dy, col);
};

// Banded sky gradient (warm dawn)
for (let y = 0; y < GH; y++) {
  let col;
  if (y < 25) col = pal.skyTop;
  else if (y < 55) col = pal.skyMid;
  else if (y < 90) col = pal.skyLow;
  else col = pal.skyHaze;
  for (let x = 0; x < GW; x++) setPx(x, y, col);
}

// Sun in the upper-LEFT (mirrors the original's upper-right sun for tab distinction)
const sunCx = 48, sunCy = 36, sunR = 16;
for (let dy = -sunR; dy <= sunR; dy++) {
  for (let dx = -sunR; dx <= sunR; dx++) {
    const d = Math.round(Math.sqrt(dx * dx + dy * dy));
    const x = sunCx + dx, y = sunCy + dy;
    if (d <= sunR - 5) setPx(x, y, pal.sunCore);
    else if (d <= sunR - 2) setPx(x, y, pal.sunRim);
    else if (d <= sunR) setPx(x, y, pal.sunGlow);
  }
}

// Pixel clouds — chunky 8-bit shapes. Each takes (cx, cy, scale).
function cloud(cx, cy, s = 1) {
  // body slabs
  fillRect(cx + 1 * s, cy + 0 * s, 10 * s, 2 * s, pal.cloud);
  fillRect(cx - 1 * s, cy + 2 * s, 14 * s, 2 * s, pal.cloud);
  fillRect(cx + 2 * s, cy + 4 * s, 9 * s, 1 * s, pal.cloud);
  // soft peach undershade
  fillRect(cx - 1 * s, cy + 4 * s, 14 * s, 1 * s, pal.cloudShade);
}

cloud(140, 14, 1);
cloud(190, 28, 1);
cloud(20, 70, 1);
cloud(100, 78, 1);
cloud(170, 86, 1);
cloud(60, 50, 1);

await sharp(buf, { raw: { width: GW, height: GH, channels: 4 } })
  .resize(W, H, { kernel: "nearest" })
  .png()
  .toFile("public/assets/hero-dawn-8bit.png");

console.log(`wrote public/assets/hero-dawn-8bit.png (${W}x${H})`);
