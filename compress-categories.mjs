import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';

// الاستعمال: node compress-categories.mjs "C:\path\to\folder"
const INPUT = process.argv[2];
if (!INPUT) {
    console.error('اكتب مسار المجلد: node compress-categories.mjs "C:\\path\\to\\folder"');
    process.exit(1);
}

const CATEGORIES_OUT = 'public/images/categories';
const LOGO_OUT = 'public/images';
await mkdir(CATEGORIES_OUT, { recursive: true });

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const files = (await readdir(INPUT)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));

for (const file of files) {
    const name = slugify(path.parse(file).name);
    const src = path.join(INPUT, file);

    if (name === 'logo') {
        const info = await sharp(src)
            .resize({ width: 400, withoutEnlargement: true })
            .webp({ quality: 90 })
            .toFile(path.join(LOGO_OUT, 'logo.webp'));
        console.log(`✓ logo.webp  ${(info.size / 1024).toFixed(0)}KB`);
    } else {
        const info = await sharp(src)
            .rotate()
            .resize(900, 450, { fit: 'cover', position: 'attention' })
            .webp({ quality: 75 })
            .toFile(path.join(CATEGORIES_OUT, `${name}.webp`));
        console.log(`✓ categories/${name}.webp  ${(info.size / 1024).toFixed(0)}KB`);
    }
}