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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null; // tidak menampilkan apa pun
}

function App() {
  const [favorit, setFavorit] = useLocalStorage("favorit-matkul", []);

  const toggleFavorite = (kode) => {
    if (favorit.includes(kode)) {
      setFavorit(favorit.filter((k) => k !== kode));
    } else {
      setFavorit([...favorit, kode]);
    }
  };

  const favoritProps = { favorit, onToggleFavorite: toggleFavorite };

  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />

      {}
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
