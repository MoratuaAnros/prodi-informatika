
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

function Beranda({ favorit, onToggleFavorite }) {
  const unggulan = courses.slice(0, 4);

  return (
    <>
      {}
      <section className="beranda-hero">
        <div className="beranda-hero-overlay">
          <div className="container beranda-hero-content">
            <span className="beranda-label">
              FAKULTAS SAINS DAN TEKNOLOGI
            </span>

            <h1>
              Program Studi
              <br />
              <span>Informatika</span>
            </h1>

            <p>
              Universitas Sanata Dharma
            </p>

            <p className="hero-description">
              Mengembangkan ilmu teknologi informasi dengan
              keunggulan akademik dan nilai-nilai kemanusiaan
              untuk menciptakan masa depan yang lebih baik.
            </p>

          </div>
        </div>
      </section>

      {/* Pengenalan */}
      <section className="container section">
        <div className="beranda-intro">
          <div>
            <span className="section-label">
              TENTANG INFORMATIKA USD
            </span>

            <h2>
              Belajar Teknologi, Mengembangkan Kemanusiaan
            </h2>
          </div>

          <div>
            <p>
              Program Studi Informatika Universitas Sanata Dharma
              berada di bawah Fakultas Sains dan Teknologi.
              Program studi ini mengembangkan pendidikan di bidang
              informatika dengan memadukan kemampuan akademik,
              inovasi teknologi, dan nilai-nilai kemanusiaan.
            </p>

            <Link to="/profil" className="text-link">
              Pelajari profil program studi →
            </Link>
          </div>
        </div>
      </section>

      {}
      <section className="beranda-courses">
        <div className="container section">
          <div className="courses-heading">
            <div>
              <span className="section-label">
                KEGIATAN AKADEMIK
              </span>
              <h2>Jelajahi Mata Kuliah</h2>
              <p>
                Lihat beberapa mata kuliah yang tersedia
                dalam katalog pembelajaran.
              </p>
            </div>

            <Link to="/mata-kuliah" className="text-link">
              Lihat Semua Mata Kuliah →
            </Link>
          </div>

          <div className="grid grid-3">
            {unggulan.map((course) => (
              <CourseCard
                key={course.kode}
                course={course}
                isFavorite={favorit.includes(course.kode)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="container section">
        <div className="beranda-contact">
          <div>
            <span className="section-label">
              UNIVERSITAS SANATA DHARMA
            </span>
            <h2>Kenali lebih dekat Informatika USD</h2>
            <p>
              Kunjungi halaman profil untuk mengetahui informasi
              program studi, kurikulum, dan kontak.
            </p>
          </div>

          <Link to="/kontak" className="btn btn-accent">
            Informasi Kontak
          </Link>
        </div>
      </section>
    </>
  );
}

export default Beranda;
