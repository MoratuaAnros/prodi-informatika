import { useState } from "react";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

function MataKuliah({ favorit, onToggleFavorite }) {
  const [kataKunci, setKataKunci] = useState("");
  const [filterSks, setFilterSks] = useState("semua"); // "semua" atau "3", "4", dst.
  const [hanyaFavorit, setHanyaFavorit] = useState(false);

  const hasil = courses.filter((c) => {
    const kunci = kataKunci.trim().toLowerCase();

    const cocokKata =
      c.nama.toLowerCase().includes(kunci) || c.kode.toLowerCase().includes(kunci);

    const cocokSks = filterSks === "semua" || String(c.sks) === filterSks;

    const cocokFavorit = !hanyaFavorit || favorit.includes(c.kode);

    return cocokKata && cocokSks && cocokFavorit;
  });

  const daftarSks = [...new Set(courses.map((c) => c.sks))].sort((a, b) => a - b);

  return (
    <section className="container section">
      <h1>Daftar Mata Kuliah</h1>

      {}
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

      {}
      <p className="result-info">
        Menampilkan {hasil.length} dari {courses.length} mata kuliah
      </p>

      {}
      {}
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
