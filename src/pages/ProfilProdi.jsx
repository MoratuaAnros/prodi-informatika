const statistik = [
  { angka: "21", label: "Dosen" },
  { angka: "700", label: "Mahasiswa aktif" },
  { angka: "1.500", label: "Lulusan" },
];

const misi = [
  "Melalui pendekatan outward looking, rumusan singkat misi Prodi TI-USD dapat dinyatakan sebagai berikut:",
  "1. Informatika Universitas Sanata Dharma mengembangkan sistem pendidikan holistik di bidang sains dan teknologi yang merupakan perpaduan keunggulan akademik dan nilai-nilai kemanusiaan melalui pendekatan yang berciri cura personalis, dialogis, pluralistik dan transformatif.",
  "2. Menciptakan komunitas akademik di Program Studi Informatika yang mampu menghargai kebebasan akademik serta otonomi keilmuan, mampu bekerjasama lintas ilmu, dan lebih mengedepankan kedalaman daripada keluasan wawasan keilmuan dalam usaha menggali kebenaran lewat kegiatan pengajaran, penelitian, dan pengabdian kepada masyarakat.",
  "3. Menghadirkan pencerahan yang mencerdaskan di bidang teknologi informasi bagi masyarakat melalui publikasi hasil kegiatan pengajaran, penelitian, dan pengabdian.",
];

function ProfilProdi() {
  return (
    <section className="container section">
      <h1>Profil Program Studi</h1>

      <div className="card">
        <h2>Visi</h2>
        <p>Menjadi penggali kebenaran yang unggul dan humanis dalam bidang teknologi informasi demi terwujudnya masyarakat yang semakin bermartabat.</p>
      </div>

      <div className="card">
        <h2>Misi</h2>
        <ul>
          {misi.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2>Akreditasi</h2>
        <p>Program Studi Informatika terakreditasi <strong>Unggul</strong>.</p>
      </div>

      {}
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
