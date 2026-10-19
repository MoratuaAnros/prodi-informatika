import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const formAwal = { nama: "", email: "", pesan: "" };

function validasi(data) {
  const error = {};

  if (data.nama.trim() === "") {
    error.nama = "Nama wajib diisi.";
  } else if (data.nama.trim().length < 3) {
    error.nama = "Nama minimal 3 karakter.";
  }

  if (data.email.trim() === "") {
    error.email = "Email wajib diisi.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    error.email = "Format email tidak valid (contoh: nama@email.com).";
  }

  if (data.pesan.trim() === "") {
    error.pesan = "Pesan wajib diisi.";
  } else if (data.pesan.trim().length < 10) {
    error.pesan = "Pesan minimal 10 karakter.";
  }

  return error;
}

function ContactForm() {
  const [form, setForm] = useState(formAwal);
  const [error, setError] = useState({});
  const [berhasil, setBerhasil] = useState(false);
  const [pesanTerkirim, setPesanTerkirim] = useLocalStorage("pesan-kontak", []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError({ ...error, [name]: "" });
    setBerhasil(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasilValidasi = validasi(form);
    setError(hasilValidasi);

    if (Object.keys(hasilValidasi).length === 0) {
      setPesanTerkirim([
        ...pesanTerkirim,
        { ...form, waktu: new Date().toLocaleString("id-ID") },
      ]);
      setForm(formAwal); // kosongkan form
      setBerhasil(true); // tampilkan pesan sukses
    }
  };

  return (
    <form className="card form" onSubmit={handleSubmit} noValidate>
      <h2>Kirim Pesan</h2>

      {}
      {berhasil && (
        <p className="alert-success" role="status">
          Pesan berhasil dikirim. Terima kasih!
        </p>
      )}

      <div className="form-group">
        <label htmlFor="nama">Nama</label>
        {}
        <input
          id="nama"
          name="nama"
          type="text"
          value={form.nama}
          onChange={handleChange}
          className={error.nama ? "input-error" : ""}
          placeholder="Nama lengkap"
        />
        {error.nama && <span className="error-text">{error.nama}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className={error.email ? "input-error" : ""}
          placeholder="nama@email.com"
        />
        {error.email && <span className="error-text">{error.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="pesan">Pesan</label>
        <textarea
          id="pesan"
          name="pesan"
          rows="5"
          value={form.pesan}
          onChange={handleChange}
          className={error.pesan ? "input-error" : ""}
          placeholder="Tulis pesan Anda (minimal 10 karakter)"
        />
        {error.pesan && <span className="error-text">{error.pesan}</span>}
      </div>

      <button type="submit" className="btn">
        Kirim
      </button>

      {}
      <p className="form-note">Pesan tersimpan di perangkat ini: {pesanTerkirim.length}</p>
    </form>
  );
}

export default ContactForm;
