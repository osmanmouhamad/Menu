import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';

// الاستعمال: node compress-images.mjs "C:\path\to\folder"
// أو بدون شي وبياخد مجلد raw-images تلقائياً
const INPUT = process.argv[2] || 'raw-images';
const OUTPUT = 'public/images/menu';

await mkdir(OUTPUT, { recursive: true });

const files = (await readdir(INPUT)).filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f));

for (const file of files) {
    // اسم الملف بيتحول لـ slug: "Spanish Latte.jpg" → spanish-latte.webp
    const name = path
        .parse(file)
        .name.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

    const info = await sharp(path.join(INPUT, file))
        .rotate() // بيصلّح اتجاه صور الموبايل
        .resize(800, 600, { fit: 'cover' })
        .webp({ quality: 78 })
        .toFile(path.join(OUTPUT, `${name}.webp`));

    console.log(`✓ ${name}.webp  ${(info.size / 1024).toFixed(0)}KB`);
}

console.log(`\nخلصت: ${files.length} صورة.`);