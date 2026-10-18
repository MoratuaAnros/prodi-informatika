// src/components/Footer.jsx
// KOMPONEN FOOTER: bagian bawah halaman, dipakai di semua halaman.
// Komponen paling sederhana: tidak punya state maupun props,
// hanya menampilkan JSX.

function Footer() {
  // Tahun diambil otomatis dari JavaScript, jadi tidak perlu diubah manual tiap tahun.
  // Tanda { } di JSX dipakai untuk menyisipkan ekspresi JavaScript.
  const tahun = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>© {tahun} Program Studi Informatika. Dibuat untuk tugas UTS Pemrograman Web.</p>
      </div>
    </footer>
  );
}

export default Footer;
