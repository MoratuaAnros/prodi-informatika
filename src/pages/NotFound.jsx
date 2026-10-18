// src/pages/NotFound.jsx
// HALAMAN 404: tampil jika pengguna membuka alamat yang tidak ada,
// misalnya /#/halaman-ngawur. Dipasang pada rute path="*" (cocok dengan apa saja).

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="container section">
      <h1>Halaman tidak ditemukan</h1>
      <p>Alamat yang Anda buka tidak tersedia.</p>
      <Link to="/" className="btn">
        Kembali ke Beranda
      </Link>
    </section>
  );
}

export default NotFound;
