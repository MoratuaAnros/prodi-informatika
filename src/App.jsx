// src/App.jsx
// KOMPONEN UTAMA (root component). Ia menyusun kerangka seluruh situs:
//
//   Navbar          <- tampil di semua halaman
//   <Routes>        <- bagian yang BERGANTI sesuai URL
//   Footer          <- tampil di semua halaman
//
// Di sini juga tempat menyimpan STATE FAVORIT. State ditaruh di App (induk
// bersama) karena dibutuhkan oleh banyak halaman: Beranda, Mata Kuliah, dan Detail.
// Data mengalir ke bawah lewat PROPS; perubahan dikirim ke atas lewat FUNGSI.

import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Beranda from "./pages/Beranda";
import ProfilProdi from "./pages/ProfilProdi";
import MataKuliah from "./pages/MataKuliah";
import DetailMataKuliah from "./pages/DetailMataKuliah";
import Kontak from "./pages/Kontak";
import NotFound from "./pages/NotFound";
import useLocalStorage from "./hooks/useLocalStorage";

// Komponen kecil: setiap pindah halaman, gulirkan layar kembali ke atas.
// useLocation memberi tahu alamat saat ini; useEffect jalan setiap alamat berubah.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null; // tidak menampilkan apa pun
}

function App() {
  // STATE favorit: array berisi kode mata kuliah, misal ["IF301", "IF202"].
  // Memakai useLocalStorage agar pilihan favorit tetap ada setelah refresh.
  const [favorit, setFavorit] = useLocalStorage("favorit-matkul", []);

  // Fungsi menambah/menghapus favorit. Dikirim ke anak lewat props.
  const toggleFavorite = (kode) => {
    if (favorit.includes(kode)) {
      // Sudah ada -> hapus (filter menyisakan semua kode selain yang diklik)
      setFavorit(favorit.filter((k) => k !== kode));
    } else {
      // Belum ada -> tambahkan di akhir (jangan ubah array lama langsung!)
      setFavorit([...favorit, kode]);
    }
  };

  // Props yang sama dipakai oleh 3 halaman, jadi dikumpulkan dalam satu objek
  const favoritProps = { favorit, onToggleFavorite: toggleFavorite };

  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />

      {/* <main> berisi isi halaman. Hanya SATU <Route> yang tampil sesuai URL. */}
      <main>
        <Routes>
          <Route path="/" element={<Beranda {...favoritProps} />} />
          <Route path="/profil" element={<ProfilProdi />} />
          <Route path="/mata-kuliah" element={<MataKuliah {...favoritProps} />} />
          {/* ":kode" adalah parameter dinamis, dibaca dengan useParams() */}
          <Route path="/mata-kuliah/:kode" element={<DetailMataKuliah {...favoritProps} />} />
          <Route path="/kontak" element={<Kontak />} />
          {/* "*" = tangkap semua alamat lain -> halaman 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
