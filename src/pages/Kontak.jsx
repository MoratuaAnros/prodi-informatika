// src/pages/Kontak.jsx
// HALAMAN 5: KONTAK (rute "/kontak").
// Halaman ini hanya "merakit" komponen: ContactForm (formulir) di kiri
// dan informasi kontak di kanan. Logika formulir ada di ContactForm.jsx,
// sehingga halaman tetap singkat dan rapi.

import ContactForm from "../components/ContactForm";

function Kontak() {
  return (
    <section className="container section">
      <h1>Kontak</h1>
      <div className="grid grid-2">
        <ContactForm />

        <div className="card">
          <h2>Informasi Prodi</h2>
          <p><strong>Alamat:</strong> Jl. Pendidikan No. 1, Purwokerto, Jawa Tengah</p>
          <p><strong>Email:</strong> informatika@kampus.ac.id</p>
          <p><strong>Telepon:</strong> (0281) 123-456</p>
          <p><strong>Jam layanan:</strong> Senin–Jumat, 08.00–16.00 WIB</p>
        </div>
      </div>
    </section>
  );
}

export default Kontak;
