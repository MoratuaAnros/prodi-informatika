// src/main.jsx
// TITIK MASUK (entry point) aplikasi. Dieksekusi pertama kali oleh browser.
// Tugasnya: mengambil komponen <App /> lalu menampilkannya di div#root.

import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css"; // CSS global buatan sendiri

// HashRouter = router yang memakai tanda # pada URL (contoh: /#/mata-kuliah).
// Kelebihannya: tidak butuh konfigurasi server, jadi aman dibuka lokal
// maupun di hosting statis (GitHub Pages, Netlify, dll).
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
