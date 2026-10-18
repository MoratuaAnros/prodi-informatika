// src/hooks/useLocalStorage.js
// CUSTOM HOOK: fungsi buatan sendiri yang memakai hook bawaan React.
// Nama hook WAJIB diawali "use".
//
// Fungsinya mirip useState, tetapi nilainya otomatis disimpan di
// localStorage browser, sehingga TIDAK HILANG saat halaman di-refresh.
// Ini memenuhi ketentuan tugas: "penyimpanan perubahan dapat memakai localStorage".

import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  // 1) useState dengan "lazy initializer" (fungsi): dijalankan SEKALI
  //    saat komponen pertama kali tampil. Kita coba baca data lama.
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      // localStorage hanya menyimpan teks, jadi kita ubah balik dari JSON
      return saved !== null ? JSON.parse(saved) : initialValue;
    } catch {
      // Jika localStorage diblokir / datanya rusak, pakai nilai awal
      return initialValue;
    }
  });

  // 2) useEffect: dijalankan SETIAP kali `key` atau `value` berubah.
  //    Di sinilah nilai terbaru disimpan ke localStorage.
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Abaikan error (misalnya penyimpanan penuh)
    }
  }, [key, value]);

  // Mengembalikan pasangan [nilai, fungsiUbah] persis seperti useState
  return [value, setValue];
}
