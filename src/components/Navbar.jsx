import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const menuItems = [
  { label: "Beranda", path: "/" },
  { label: "Profil Prodi", path: "/profil" },
  { label: "Mata Kuliah", path: "/mata-kuliah" },
  { label: "Kontak", path: "/kontak" },
];

function Navbar() {
  const [menuTerbuka, setMenuTerbuka] = useState(false);

  const toggleMenu = () => setMenuTerbuka(!menuTerbuka);

  const tutupMenu = () => setMenuTerbuka(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {}
        <Link to="/" className="logo" onClick={tutupMenu}>
          Prodi Informatika
        </Link>

        {}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Buka atau tutup menu"
          aria-expanded={menuTerbuka}
        >
          {}
          {menuTerbuka ? "✕" : "☰"}
        </button>

        {}
        <nav className={menuTerbuka ? "nav-links open" : "nav-links"}>
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"} 
              onClick={tutupMenu}
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
