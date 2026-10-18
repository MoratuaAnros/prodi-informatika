// src/pages/DetailMataKuliah.jsx
// HALAMAN 4: PROFIL / DETAIL MATA KULIAH (rute "/mata-kuliah/:kode").
// Satu komponen ini dipakai untuk SEMUA mata kuliah. Mata kuliah yang tampil
// ditentukan oleh bagian :kode pada URL (contoh /mata-kuliah/IF301).
//
// Konsep yang dipelajari: useParams (membaca parameter URL) dan .find().

import { Link, useParams } from "react-router-dom";
import { courses } from "../data/courses";

function DetailMataKuliah({ favorit, onToggleFavorite }) {
  // useParams mengembalikan objek berisi parameter dari URL.
  // Nama "kode" harus sama dengan yang ditulis di path rute: ":kode".
  const { kode } = useParams();

  // find() mengambil SATU elemen pertama yang cocok (atau undefined jika tidak ada)
  const course = courses.find((c) => c.kode === kode);

  // Penanganan error: URL dengan kode yang tidak ada (misal /mata-kuliah/XYZ)
  if (!course) {
    return (
      <section className="container section">
        <h1>Mata kuliah tidak ditemukan</h1>
        <p>Kode "{kode}" tidak terdaftar.</p>
        <Link to="/mata-kuliah" className="btn">
          Kembali ke Daftar
        </Link>
      </section>
    );
  }

  const isFavorite = favorit.includes(course.kode);

  return (
    <section className="container section">
      {/* Breadcrumb: petunjuk posisi halaman */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Beranda</Link> &gt; <Link to="/mata-kuliah">Mata Kuliah</Link> &gt;{" "}
        <span>{course.nama}</span>
      </nav>

      <div className="card">
        <h1>{course.nama}</h1>

        {/* Atribut wajib: kode mata kuliah dan jumlah SKS */}
        <div className="badges">
          <span className="badge">Kode {course.kode}</span>
          <span className="badge badge-accent">{course.sks} SKS</span>
          <span className="badge">Semester {course.semester}</span>
        </div>

        <h2>Deskripsi</h2>
        <p>{course.deskripsi}</p>

        <h2>Capaian Pembelajaran</h2>
        <ul>
          {course.capaian.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>Dosen Pengampu</h2>
        <p>{course.dosen}</p>

        <div className="actions">
          <Link to="/mata-kuliah" className="btn">
            Kembali ke Daftar
          </Link>
          <button className="btn btn-outline" onClick={() => onToggleFavorite(course.kode)}>
            {isFavorite ? "★ Hapus dari favorit" : "☆ Tambah ke favorit"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default DetailMataKuliah;
