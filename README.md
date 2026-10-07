# Portfolio — Andika Tri Handoyo

Portofolio personal developer yang di-deploy ke **GitHub Pages** (`andikatri2710.github.io`).

Bahasa konten: **Indonesia & English** — bisa ditukar lewat toggle ID/EN di navbar (tersimpan di `localStorage`). Target: HRD, klien freelance, dan kolaborator.

## Tech Stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) (build tool)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev) + icon brand custom (GitHub/LinkedIn)
- GitHub API publik untuk section GitHub (tanpa token)
- Deploy: GitHub Actions → GitHub Pages

## Features

- Single-page, scroll-spy navigation + menu mobile
- Dark / light / system mode (tersimpan di `localStorage`, tanpa flash putih)
- Bilingual **ID / EN** — toggle di navbar, pilihan tersimpan, `<html lang>` ikut berubah
- Section: Hero, Tentang, Keahlian, Proyek (bisa difilter), Pengalaman, Layanan, GitHub, Kontak
- Data-driven: semua konten dikelola di `src/data/` — tanpa mengubah komponen
- Section GitHub punya state loading / error / fallback (aman saat rate limit)
- SEO: title, description, Open Graph, Twitter card, canonical, `robots.txt`, `sitemap.xml`, JSON-LD
- A11y: skip link, semantic HTML, heading berurutan, focus-visible, `prefers-reduced-motion`
- CV PDF bisa diunduh langsung dari halaman

## Development

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # typecheck (tsc) + bundle ke dist/
npm run preview    # cek hasil build di http://localhost:4173
```

## Deployment (GitHub Pages)

Workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) build dan deploy otomatis setiap push ke `main`.

1. Buat repository GitHub (mis. `andikatri2710.github.io` untuk URL root).
2. Push repo ini ke branch `main`.
3. **Settings → Pages → Source: GitHub Actions**.
4. Selesai — situs tampil di `https://andikatri2710.github.io/`.

Build memakai `base: './'` (path relatif), jadi situs tetap benar baik di URL root
maupun di subpath (`username.github.io/nama-repo/`) tanpa konfigurasi tambahan.

> Teks dengan format `{ id: '…', en: '…' }` adalah konten per-bahasa; string biasa
> dipakai apa adanya untuk kedua bahasa (nama, tech, nama perusahaan).
>
> Jika nama repo **bukan** `andikatri2710.github.io`, perbarui URL absolut di
> `index.html` (canonical, og:url, og:image), `public/robots.txt`, dan `public/sitemap.xml`.

## Mengubah Konten

Semua data pribadi ada di satu tempat — cukup edit file ini:

| File | Isi |
| --- | --- |
| `src/i18n/ui.ts` | Semua label UI (ID + EN) — nav, tombol, judul section |
| `src/data/profile.ts` | Nama, tagline, bio, statistik, URL CV |
| `src/data/skills.ts` | Keahlian per kategori |
| `src/data/projects.ts` | Daftar proyek (deskripsi, fitur, tech, link) |
| `src/data/experience.ts` | Pengalaman kerja & pendidikan |
| `src/data/services.ts` | Layanan freelance |
| `src/data/socials.ts` | Tautan sosial + username GitHub |

Screenshot project: taruh file di `public/images/projects/` lalu isi `image` pada entri
project (kosong = placeholder otomatis).

### og-image.png

Digenerate dari [tools/og-source.html](tools/og-source.html):

```bash
chrome --headless=new --disable-gpu --hide-scrollbars --window-size=1200,630 \
  --virtual-time-budget=8000 --screenshot=public/og-image.png tools/og-source.html
```

## Struktur

```text
portofolio/
├── public/            # favicon, robots, sitemap, og-image, cv/
├── src/
│   ├── components/    # Navbar, Hero, About, Skills, Projects, ...
│   ├── data/          # seluruh konten (edit di sini)
│   ├── hooks/         # useTheme, useActiveSection
│   ├── types/         # tipe data bersama
│   └── styles/        # design token + base CSS
├── tools/             # sumber og-image
└── .github/workflows/ # deploy otomatis
```

## License

MIT — silakan pakai sebagai template portofolio pribadi.
