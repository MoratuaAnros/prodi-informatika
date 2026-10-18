// src/pages/ProfilProdi.jsx
// HALAMAN 2: PROFIL PRODI (rute "/profil").
// Halaman statis berisi informasi program studi. Datanya berupa array/objek
// biasa yang ditampilkan dengan .map(), supaya mudah diubah tanpa menyentuh JSX.

// Data statistik ditaruh di luar komponen karena tidak pernah berubah.
const statistik = [
  { angka: "25", label: "Dosen" },
  { angka: "480", label: "Mahasiswa aktif" },
  { angka: "1.200", label: "Lulusan" },
];

const misi = [
  "Menyelenggarakan pendidikan yang berkualitas dan relevan dengan industri.",
  "Melaksanakan penelitian terapan di bidang teknologi informasi.",
  "Melakukan pengabdian kepada masyarakat berbasis teknologi.",
  "Membangun kerja sama dengan industri dan perguruan tinggi lain.",
];

function ProfilProdi() {
  return (
    <section className="container section">
      <h1>Profil Program Studi</h1>

      <div className="card">
        <h2>Visi</h2>
        <p>Menjadi program studi unggul dalam pendidikan dan inovasi teknologi informasi.</p>
      </div>

      <div className="card">
        <h2>Misi</h2>
        <ul>
          {misi.map((item, index) => (
            // index dipakai sebagai key karena isi daftar tidak berubah urutan
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2>Akreditasi</h2>
        <p>Program Studi Informatika terakreditasi <strong>Baik Sekali</strong>.</p>
      </div>

      {/* Statistik ditampilkan dalam grid 3 kolom */}
      <div className="grid grid-3">
        {statistik.map((s) => (
          <div className="card stat" key={s.label}>
            <p className="stat-number">{s.angka}</p>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProfilProdi;
