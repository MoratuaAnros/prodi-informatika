// src/data/courses.js
// DATA CONTOH (dummy data). Sesuai ketentuan tugas, kita tidak memakai
// backend/database; data cukup berupa array of object di file JavaScript.
//
// Setiap mata kuliah punya atribut wajib: kode & sks (sesuai permintaan tugas),
// ditambah atribut lain untuk melengkapi halaman profil mata kuliah.
// Silakan ubah isinya sesuai kurikulum prodi Anda.

export const courses = [
  {
    kode: "IF301",
    nama: "Pemrograman Web",
    sks: 3,
    semester: 5,
    dosen: "Dr. Budi Santoso, M.Kom.",
    deskripsi:
      "Mempelajari pembuatan situs web modern menggunakan HTML, CSS, JavaScript, dan library React.js, mulai dari struktur halaman hingga interaksi pengguna.",
    capaian: [
      "Menyusun struktur halaman dengan HTML dan JSX",
      "Mengatur tampilan responsif dengan CSS",
      "Membangun interaksi dengan JavaScript, state, dan event",
      "Membuat formulir dengan validasi input",
    ],
  },
  {
    kode: "IF201",
    nama: "Algoritma dan Struktur Data",
    sks: 4,
    semester: 3,
    dosen: "Prof. Siti Rahmawati, Ph.D.",
    deskripsi:
      "Membahas cara merancang algoritma yang efisien serta struktur data dasar seperti array, stack, queue, linked list, tree, dan graph.",
    capaian: [
      "Menganalisis kompleksitas algoritma",
      "Menerapkan struktur data linier dan non-linier",
      "Mengimplementasikan algoritma pencarian dan pengurutan",
    ],
  },
  {
    kode: "IF202",
    nama: "Basis Data",
    sks: 3,
    semester: 3,
    dosen: "Ir. Andi Wijaya, M.T.",
    deskripsi:
      "Mempelajari perancangan basis data relasional, normalisasi, dan penggunaan bahasa SQL untuk mengelola data.",
    capaian: [
      "Merancang model data dengan ERD",
      "Menerapkan normalisasi hingga bentuk normal ketiga",
      "Menulis query SQL dasar hingga lanjutan",
    ],
  },
  {
    kode: "IF303",
    nama: "Jaringan Komputer",
    sks: 3,
    semester: 5,
    dosen: "Rina Kartika, M.Cs.",
    deskripsi:
      "Memperkenalkan konsep jaringan komputer, model OSI dan TCP/IP, pengalamatan IP, serta dasar keamanan jaringan.",
    capaian: [
      "Menjelaskan model OSI dan TCP/IP",
      "Melakukan pengalamatan IP dan subnetting",
      "Mengonfigurasi jaringan lokal sederhana",
    ],
  },
  {
    kode: "IF304",
    nama: "Rekayasa Perangkat Lunak",
    sks: 3,
    semester: 6,
    dosen: "Dr. Hendra Gunawan, M.Kom.",
    deskripsi:
      "Membahas siklus pengembangan perangkat lunak, analisis kebutuhan, pemodelan UML, pengujian, serta manajemen proyek.",
    capaian: [
      "Menyusun spesifikasi kebutuhan perangkat lunak",
      "Membuat model sistem dengan UML",
      "Merancang dan menjalankan skenario pengujian",
    ],
  },
  {
    kode: "IF401",
    nama: "Kecerdasan Buatan",
    sks: 3,
    semester: 7,
    dosen: "Prof. Dewi Lestari, Ph.D.",
    deskripsi:
      "Mempelajari konsep dasar kecerdasan buatan, pencarian, representasi pengetahuan, dan pengantar pembelajaran mesin.",
    capaian: [
      "Menjelaskan konsep agen cerdas",
      "Menerapkan algoritma pencarian",
      "Memahami dasar pembelajaran mesin",
    ],
  },
];
