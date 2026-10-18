// src/pages/MataKuliah.jsx
// HALAMAN 3: DAFTAR MATA KULIAH (rute "/mata-kuliah").
// Halaman paling interaktif. Ada 3 fitur interaktif di sini:
//   1. Pencarian berdasarkan nama atau kode   (useState + onChange)
//   2. Filter berdasarkan jumlah SKS          (useState + onChange)
//   3. Tampilkan hanya favorit                (useState + onChange)
// Ditambah fitur favorit yang tersimpan di localStorage (dikelola di App.jsx).

import { useState } from "react";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

function MataKuliah({ favorit, onToggleFavorite }) {
  // Tiga state untuk menyimpan kondisi pencarian & filter
  const [kataKunci, setKataKunci] = useState("");
  const [filterSks, setFilterSks] = useState("semua"); // "semua" atau "3", "4", dst.
  const [hanyaFavorit, setHanyaFavorit] = useState(false);

  // DATA TURUNAN (derived data): daftar yang ditampilkan dihitung dari state.
  // Tidak perlu disimpan di state sendiri; setiap render dihitung ulang.
  const hasil = courses.filter((c) => {
    const kunci = kataKunci.trim().toLowerCase();

    // Cocok jika nama ATAU kode mengandung kata kunci (huruf besar/kecil diabaikan)
    const cocokKata =
      c.nama.toLowerCase().includes(kunci) || c.kode.toLowerCase().includes(kunci);

    // Nilai <select> berupa teks, maka SKS diubah ke teks dengan String()
    const cocokSks = filterSks === "semua" || String(c.sks) === filterSks;

    // Jika "hanya favorit" mati, semua lolos; jika hidup, harus ada di daftar favorit
    const cocokFavorit = !hanyaFavorit || favorit.includes(c.kode);

    // Mata kuliah tampil hanya jika LOLOS ketiga syarat
    return cocokKata && cocokSks && cocokFavorit;
  });

  // Ambil daftar SKS unik untuk pilihan dropdown, urut naik.
  // Set menghilangkan nilai kembar; [...set] mengubahnya kembali jadi array.
  const daftarSks = [...new Set(courses.map((c) => c.sks))].sort((a, b) => a - b);

  return (
    <section className="container section">
      <h1>Daftar Mata Kuliah</h1>

      {/* ===== BAGIAN KONTROL: pencarian & filter ===== */}
      <div className="toolbar">
        <input
          type="search"
          placeholder="Cari nama atau kode mata kuliah..."
          value={kataKunci}
          onChange={(e) => setKataKunci(e.target.value)}
          aria-label="Cari mata kuliah"
        />

        <select
          value={filterSks}
          onChange={(e) => setFilterSks(e.target.value)}
          aria-label="Filter jumlah SKS"
        >
          <option value="semua">Semua SKS</option>
          {daftarSks.map((sks) => (
            <option key={sks} value={String(sks)}>
              {sks} SKS
            </option>
          ))}
        </select>

        <label className="checkbox">
          <input
            type="checkbox"
            checked={hanyaFavorit}
            onChange={(e) => setHanyaFavorit(e.target.checked)}
          />
          Hanya favorit
        </label>
      </div>

      {/* Ringkasan jumlah hasil */}
      <p className="result-info">
        Menampilkan {hasil.length} dari {courses.length} mata kuliah
      </p>

      {/* ===== DAFTAR KARTU ===== */}
      {/* Conditional rendering: jika hasil kosong tampilkan pesan, jika ada tampilkan kartu */}
      {hasil.length === 0 ? (
        <p className="empty">
          Tidak ada mata kuliah yang cocok. Ubah kata kunci atau filter Anda.
        </p>
      ) : (
        <div className="grid grid-3">
          {hasil.map((course) => (
            <CourseCard
              key={course.kode}
              course={course}
              isFavorite={favorit.includes(course.kode)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default MataKuliah;
