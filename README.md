# Situs Profil Program Studi Informatika

Tugas UTS Pemrograman Web — **Proyek 2: Situs Profil Program Studi**
(React.js + Vite + React Router, CSS buatan sendiri, tanpa backend).

## Cara menjalankan

Pastikan **Node.js** (versi 18 atau lebih baru) sudah terpasang.
 
```bash
# 1. Masuk ke folder proyek
cd prodi-informatika

# 2. Pasang dependensi (cukup sekali)
npm install

# 3. Jalankan server pengembangan
npm run dev
```

Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`).

Perintah lain:

```bash
npm run build     # membuat versi produksi di folder dist/
npm run preview   # mencoba hasil build secara lokal
```

## Halaman

| Halaman | Alamat | File |
|---|---|---|
| Beranda | `/#/` | `src/pages/Beranda.jsx` |
| Profil Prodi | `/#/profil` | `src/pages/ProfilProdi.jsx` |
| Mata Kuliah | `/#/mata-kuliah` | `src/pages/MataKuliah.jsx` |
| Profil Mata Kuliah | `/#/mata-kuliah/IF301` | `src/pages/DetailMataKuliah.jsx` |
| Kontak | `/#/kontak` | `src/pages/Kontak.jsx` |

## Struktur folder

```
prodi-informatika/
├── index.html                 # halaman HTML tunggal (wadah aplikasi React)
├── package.json               # daftar dependensi & perintah npm
├── vite.config.js             # konfigurasi Vite
└── src/
    ├── main.jsx               # titik masuk: menampilkan <App /> ke halaman
    ├── App.jsx                # kerangka situs, rute, & state favorit
    ├── index.css              # seluruh CSS (responsif)
    ├── data/courses.js        # data contoh 6 mata kuliah (kode, nama, SKS, ...)
    ├── hooks/useLocalStorage.js  # custom hook penyimpanan lokal
    ├── components/            # komponen reusable
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── CourseCard.jsx
    │   └── ContactForm.jsx
    └── pages/                 # satu file = satu halaman
```

## Fitur interaktif (ketentuan: minimal 3)

1. **Pencarian** mata kuliah berdasarkan nama atau kode (`useState`, `onChange`).
2. **Filter SKS** dan **filter "Hanya favorit"** (`useState`).
3. **Favorit** mata kuliah (bintang) yang tersimpan di `localStorage` (`useState` + `useEffect`).
4. **Menu hamburger** pada tampilan ponsel (`useState`, `onClick`).
5. **Formulir kontak** dengan validasi input; pesan terkirim disimpan di `localStorage`.

## Teknologi

React 18, React Router 6, Vite 5, CSS murni.
