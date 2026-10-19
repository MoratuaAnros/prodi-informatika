function Footer() {

  const tahun = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>© {tahun} Program Studi Informatika.</p>
      </div>
    </footer>
  );
}

export default Footer;
