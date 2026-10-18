// src/pages/Beranda.jsx
// HALAMAN 1: BERANDA (rute "/").
// "Halaman" (page) pada dasarnya juga komponen React; bedanya ia mewakili
// satu URL penuh dan tersusun dari komponen-komponen yang lebih kecil.

import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

// Props diterima dari App.jsx (induk). Beranda tidak menyimpan state favorit
// sendiri, melainkan memakai milik App agar konsisten di semua halaman.
function Beranda({ favorit, onToggleFavorite }) {
  // slice(0, 3) = ambil 3 mata kuliah pertama untuk ditampilkan di beranda
  const unggulan = courses.slice(0, 3);

  return (
    <>
      {/* ===== HERO: bagian pembuka halaman ===== */}
      <section className="hero">
        <div className="container">
          <h1>Selamat Datang di Program Studi Informatika</h1>
          <p>
            Belajar membangun perangkat lunak, jaringan, dan kecerdasan buatan
            bersama dosen berpengalaman.
          </p>
          <Link to="/mata-kuliah" className="btn btn-accent">
            Lihat Mata Kuliah
          </Link>
        </div>
      </section>

      {/* ===== KARTU VISI, MISI, PROSPEK KARIER ===== */}
      <section className="container section">
        <div className="grid grid-3">
          <div className="card">
            <h3>Visi</h3>
            <p>Menjadi program studi unggul dalam pendidikan dan inovasi teknologi informasi.</p>
          </div>
          <div className="card">
            <h3>Misi</h3>
            <p>Menyelenggarakan pembelajaran berkualitas, riset terapan, dan pengabdian kepada masyarakat.</p>
          </div>
          <div className="card">
            <h3>Prospek Karier</h3>
            <p>Pengembang web, analis sistem, administrator jaringan, dan peneliti data.</p>
          </div>
        </div>
      </section>

      {/* ===== CONTOH MATA KULIAH: memakai ulang komponen CourseCard ===== */}
      <section className="container section">
        <h2>Mata Kuliah Pilihan</h2>
        <div className="grid grid-3">
          {/* .map() mengubah array data menjadi array elemen JSX */}
          {unggulan.map((course) => (
            <CourseCard
              key={course.kode}
              course={course}
              isFavorite={favorit.includes(course.kode)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Beranda;
