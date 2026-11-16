# Boemi Rafting Pangalengan - Website
## Struktur
```
boemi-rafting/
├── index.html          # halaman utama
├── vercel.json         # config hosting Vercel
├── css/style.css       # semua styling
├── js/
│   ├── data.js         # EDIT DI SINI: harga, paket, kontak
│   └── main.js         # render kartu paket & aktivitas
└── assets/
    ├── logo.png
    └── images/         # foto (ganti dengan foto asli resolusi tinggi)
```

## Edit konten
- Ubah harga/paket/nomor WA di `js/data.js`.
- Ganti foto: timpa file di `assets/images/` dengan nama sama.

## Jalankan lokal
`python3 -m http.server 8000` lalu buka http://localhost:8000
