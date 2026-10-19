import ContactForm from "../components/ContactForm";

function Kontak() {
  return (
    <section className="container section">
      <h1>Kontak</h1>
      <div className="grid grid-2">
        <ContactForm />

        <div className="card">
          <h2>Informasi Prodi</h2>
          <p><strong>Alamat:</strong> Kampus III,
          Universitas Sanata Dharma,
          Jl. Paingan, Krodan, Maguwoharjo, Depok, Sleman, DIY</p>
          <p><strong>Email:</strong> fst@usd.ac.id</p>
          <p><strong>Telepon:</strong> 0274-883037, 883968 ext : 2340, 2320</p>
          <p><strong>Jam layanan:</strong> Senin–Jumat, 08.00–15.00 WIB</p>
        </div>
      </div>
    </section>
  );
}

export default Kontak;
