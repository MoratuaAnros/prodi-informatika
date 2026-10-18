// src/components/Navbar.jsx
// KOMPONEN NAVBAR: menu navigasi di bagian atas, dipakai di SEMUA halaman.
// Karena ditaruh di App.jsx di luar <Routes>, ia tampil terus meski halaman berganti.
//
// Konsep yang dipelajari di sini:
//  - useState  : menyimpan status menu ponsel (terbuka / tertutup)
//  - event     : onClick pada tombol hamburger
//  - NavLink   : link React Router yang otomatis tahu mana halaman aktif

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

// Daftar menu dibuat sebagai array agar mudah ditambah/diubah,
// lalu ditampilkan memakai .map() (lihat bagian JSX di bawah).
const menuItems = [
  { label: "Beranda", path: "/" },
  { label: "Profil Prodi", path: "/profil" },
  { label: "Mata Kuliah", path: "/mata-kuliah" },
  { label: "Kontak", path: "/kontak" },
];

function Navbar() {
  // STATE: menuTerbuka bernilai true/false.
  // Saat berubah, React otomatis menggambar ulang (re-render) komponen ini.
  const [menuTerbuka, setMenuTerbuka] = useState(false);

  // Fungsi untuk membalik nilai: true -> false, false -> true
  const toggleMenu = () => setMenuTerbuka(!menuTerbuka);

  // Dipanggil saat salah satu menu diklik, agar menu ponsel menutup sendiri
  const tutupMenu = () => setMenuTerbuka(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Link logo: kembali ke Beranda */}
        <Link to="/" className="logo" onClick={tutupMenu}>
          Prodi Informatika
        </Link>

        {/* Tombol hamburger: hanya terlihat di layar kecil (diatur CSS).
            aria-expanded membantu pembaca layar mengetahui status menu. */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Buka atau tutup menu"
          aria-expanded={menuTerbuka}
        >
          {/* Tanda ✕ saat terbuka, ☰ saat tertutup (conditional rendering) */}
          {menuTerbuka ? "✕" : "☰"}
        </button>

        {/* className dibuat dinamis: kalau menuTerbuka true, tambahkan kelas "open".
            CSS yang mengatur agar menu muncul saat kelas "open" ada. */}
        <nav className={menuTerbuka ? "nav-links open" : "nav-links"}>
          {menuItems.map((item) => (
            // key wajib unik pada setiap elemen hasil .map()
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"} // "end": Beranda hanya aktif jika URL persis "/"
              onClick={tutupMenu}
              // NavLink memberi tahu apakah link sedang aktif lewat isActive
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
