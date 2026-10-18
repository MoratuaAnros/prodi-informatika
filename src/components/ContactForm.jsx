// src/components/ContactForm.jsx
// KOMPONEN FORMULIR KONTAK dengan VALIDASI INPUT.
//
// Konsep yang dipelajari di sini:
//  - Controlled component : nilai input dikendalikan oleh state React
//  - Validasi             : memeriksa isi form sebelum dikirim
//  - Event onChange / onSubmit
//  - Custom hook useLocalStorage untuk menyimpan pesan yang dikirim

import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// Nilai awal form (semua kosong). Dipisah agar mudah dipakai untuk "reset".
const formAwal = { nama: "", email: "", pesan: "" };

// FUNGSI VALIDASI (murni JavaScript, di luar komponen).
// Menerima isi form, mengembalikan objek berisi pesan error.
// Objek kosong {} artinya semua input valid.
function validasi(data) {
  const error = {};

  // trim() menghapus spasi di awal/akhir, sehingga "   " dianggap kosong
  if (data.nama.trim() === "") {
    error.nama = "Nama wajib diisi.";
  } else if (data.nama.trim().length < 3) {
    error.nama = "Nama minimal 3 karakter.";
  }

  if (data.email.trim() === "") {
    error.email = "Email wajib diisi.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    // Regex sederhana: ada teks, tanda @, teks, titik, teks
    error.email = "Format email tidak valid (contoh: nama@email.com).";
  }

  if (data.pesan.trim() === "") {
    error.pesan = "Pesan wajib diisi.";
  } else if (data.pesan.trim().length < 10) {
    error.pesan = "Pesan minimal 10 karakter.";
  }

  return error;
}

function ContactForm() {
  // STATE 1: isi form saat ini
  const [form, setForm] = useState(formAwal);
  // STATE 2: pesan error untuk tiap input
  const [error, setError] = useState({});
  // STATE 3: apakah pesan sukses perlu ditampilkan
  const [berhasil, setBerhasil] = useState(false);
  // STATE 4: daftar pesan terkirim, disimpan permanen di localStorage
  const [pesanTerkirim, setPesanTerkirim] = useLocalStorage("pesan-kontak", []);

  // Dipanggil setiap kali pengguna mengetik di input mana pun.
  // e.target.name  = atribut name pada input ("nama" / "email" / "pesan")
  // e.target.value = teks yang sedang diketik
  const handleChange = (e) => {
    const { name, value } = e.target;
    // [name]: value  -> "computed property": mengubah hanya field yang sedang diketik
    // ...form        -> salin isi lama agar field lain tidak hilang
    setForm({ ...form, [name]: value });
    // Hapus error field tersebut agar pengguna langsung tahu sudah diperbaiki
    setError({ ...error, [name]: "" });
    setBerhasil(false);
  };

  // Dipanggil saat tombol Kirim ditekan
  const handleSubmit = (e) => {
    // Mencegah perilaku bawaan form HTML (reload halaman)
    e.preventDefault();

    const hasilValidasi = validasi(form);
    setError(hasilValidasi);

    // Object.keys(...).length === 0 berarti tidak ada error -> boleh dikirim
    if (Object.keys(hasilValidasi).length === 0) {
      // Simpan pesan ke daftar (disimpan otomatis ke localStorage oleh hook)
      setPesanTerkirim([
        ...pesanTerkirim,
        { ...form, waktu: new Date().toLocaleString("id-ID") },
      ]);
      setForm(formAwal); // kosongkan form
      setBerhasil(true); // tampilkan pesan sukses
    }
  };

  return (
    // noValidate: matikan validasi bawaan browser agar pesan error kita yang tampil
    <form className="card form" onSubmit={handleSubmit} noValidate>
      <h2>Kirim Pesan</h2>

      {/* Pesan sukses (conditional rendering dengan &&) */}
      {berhasil && (
        <p className="alert-success" role="status">
          Pesan berhasil dikirim. Terima kasih!
        </p>
      )}

      <div className="form-group">
        <label htmlFor="nama">Nama</label>
        {/* value + onChange = controlled component */}
        <input
          id="nama"
          name="nama"
          type="text"
          value={form.nama}
          onChange={handleChange}
          className={error.nama ? "input-error" : ""}
          placeholder="Nama lengkap"
        />
        {error.nama && <span className="error-text">{error.nama}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className={error.email ? "input-error" : ""}
          placeholder="nama@email.com"
        />
        {error.email && <span className="error-text">{error.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="pesan">Pesan</label>
        <textarea
          id="pesan"
          name="pesan"
          rows="5"
          value={form.pesan}
          onChange={handleChange}
          className={error.pesan ? "input-error" : ""}
          placeholder="Tulis pesan Anda (minimal 10 karakter)"
        />
        {error.pesan && <span className="error-text">{error.pesan}</span>}
      </div>

      <button type="submit" className="btn">
        Kirim
      </button>

      {/* Menunjukkan bahwa data di localStorage benar-benar tersimpan */}
      <p className="form-note">Pesan tersimpan di perangkat ini: {pesanTerkirim.length}</p>
    </form>
  );
}

export default ContactForm;
