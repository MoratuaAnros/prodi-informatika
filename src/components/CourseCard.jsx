// src/components/CourseCard.jsx
// KOMPONEN KARTU MATA KULIAH: dapat dipakai ulang (reusable).
// Dipakai di halaman Beranda dan halaman Mata Kuliah, dengan tampilan yang sama
// tetapi data yang berbeda. Inilah gunanya komponen!
//
// Konsep yang dipelajari di sini:
//  - PROPS    : data yang dikirim dari komponen induk ke komponen anak
//  - event    : onClick pada tombol favorit
//  - Link     : berpindah halaman tanpa me-reload browser

import { Link } from "react-router-dom";

// Props diambil lewat destructuring { course, isFavorite, onToggleFavorite }
//   course           -> objek mata kuliah (kode, nama, sks, ...)
//   isFavorite       -> true/false: apakah mata kuliah ini sudah difavoritkan
//   onToggleFavorite -> FUNGSI dari induk, dipanggil saat tombol bintang diklik
function CourseCard({ course, isFavorite, onToggleFavorite }) {
  return (
    <article className="card course-card">
      <div className="course-card-top">
        {/* Badge kode mata kuliah */}
        <span className="badge">{course.kode}</span>

        {/* Tombol favorit. Data TIDAK diubah di sini; kita hanya memanggil
            fungsi dari induk dan memberi tahu kode mana yang diklik.
            Pola ini disebut "lifting state up" (state diangkat ke induk). */}
        <button
          className={isFavorite ? "fav-btn active" : "fav-btn"}
          onClick={() => onToggleFavorite(course.kode)}
          aria-label={
            isFavorite
              ? `Hapus ${course.nama} dari favorit`
              : `Tambahkan ${course.nama} ke favorit`
          }
          aria-pressed={isFavorite}
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </div>

      {/* Klik nama mata kuliah -> pindah ke halaman detail /mata-kuliah/IF301 */}
      <h3>
        <Link to={`/mata-kuliah/${course.kode}`}>{course.nama}</Link>
      </h3>

      <p className="course-meta">
        {course.sks} SKS • Semester {course.semester}
      </p>
    </article>
  );
}

export default CourseCard;
