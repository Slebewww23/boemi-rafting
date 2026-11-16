/* ===== SEMUA DATA (harga, paket, kontak) ADA DI SINI. Edit di file ini saja. ===== */
const BOEMI = {
  wa: "6285220717642",
  telp: "0852 2071 7642",
  email: "Kupaskentang664@gmail.com",
  lokasi: "Situ Cileunca, Pangalengan, Kabupaten Bandung, Jawa Barat",

  paket: [
    { id: "rafting-only", nama: "Paket Rafting Only", kategori: "Arung Jeram", harga: 175000, min: 5,
      gambar: "rafting-group.jpg", badge: "Paling simpel",
      isi: ["Rafting ±2 jam", "Instruktur", "P3K & safety equipment", "Rescue team", "Transport lokal finish ke start", "Tiket Situ Cileunca", "Makan 1x"] },
    { id: "paket-a", nama: "Paket A", kategori: "Rafting + Fun Game", harga: 210000, min: 20,
      gambar: "team-building.jpg", badge: "Kantor & sekolah",
      isi: ["Rafting", "Fun game", "Makan 1x"] },
    { id: "paket-g", nama: "Paket G", kategori: "Rafting + Offroad Jimny", harga: 410000, min: 5,
      gambar: "jimny-red.jpg", badge: "Sunrise trip",
      isi: ["Rafting (min. 5 orang)", "Jimny Off Road (min. 4 orang)", "Makan 1x", "Tour leader", "Asuransi", "Tiket masuk wisata", "Dokumentasi", "Gazebo & toilet"] },
    { id: "paket-b", nama: "Paket B", kategori: "Rafting + ATV + Flying Fox", harga: 375000, min: 10,
      gambar: "atv.jpg", badge: "Favorit keluarga",
      isi: ["Rafting", "Motor ATV", "Flying fox", "Makan 1x"] },
    { id: "paket-c", nama: "Paket C", kategori: "Rafting + Paintball", harga: 290000, min: 20,
      gambar: "paintball.jpg", badge: "Harga promo",
      isi: ["Rafting", "Paintball", "Fun game", "Makan 1x", "Gazebo", "Transportasi", "Tiket masuk", "P3K/safety", "Private toilet", "Dokumentasi"] },
    { id: "paket-e", nama: "Paket E", kategori: "Rafting + Team Building + Jimny", harga: 435000, min: 20,
      gambar: "offroad-jimny.jpg", badge: "Seru berombongan",
      isi: ["Rafting", "Team building", "Offroad Jimny", "Asuransi", "Pemandu wisata", "Tiket masuk", "Dokumentasi foto & video", "Titik kumpul: gazebo wisata Situ Cileunca"] },
    { id: "paket-d", nama: "Paket D", kategori: "Offroad Land Rover + Rafting", harga: 470000, min: 20,
      gambar: "offroad-landy.jpg", badge: "Offroad klasik",
      isi: ["Offroad Land Rover (min. 20 orang)", "Fun game (min. 20 orang)", "Rafting", "Makan 1x", "Gazebo", "Private toilet", "P3K/safety + asuransi", "Dokumentasi"] },
    { id: "paket-f", nama: "Paket F", kategori: "Rafting + Paintball + ATV", harga: 440000, min: null, mulai: true,
      gambar: "rafting-orange.jpg", badge: "Paling lengkap",
      isi: ["Rafting", "Paintball", "Motor ATV", "Makan 1x", "Gazebo", "Private toilet", "P3K/safety + asuransi", "Dokumentasi"] }
  ],

  /* satuan: unit = keterangan harga. Cek lagi satuan Jimny/Landy/Live/Kambing dengan owner */
  aktivitas: [
    { nama: "Rafting", harga: 150000, unit: "/orang", min: "Min. 5 orang", gambar: "rafting-pink.jpg", desc: "5 km Sungai Palayangan, jeram kelas II-III, 1,5-2 jam." },
    { nama: "Paintball", harga: 85000, unit: "/orang", min: "Min. 10 orang", gambar: "paintball.jpg", desc: "Arena terbuka dengan bunker dan rintangan alami." },
    { nama: "Flying Fox", harga: 35000, unit: "/orang", min: "", gambar: "flying-fox.jpg", desc: "Meluncur 250-300 m di atas Situ Cileunca." },
    { nama: "Fun Game", harga: 50000, unit: "/orang", min: "Min. 10 orang", gambar: "team-building.jpg", desc: "Estafet air, tarik tambang, balap karung, ice breaking." },
    { nama: "Team Building", harga: 100000, unit: "/orang", min: "Min. 20 orang", gambar: "team-building.jpg", desc: "Program kekompakan dengan fasilitator dan MC." },
    { nama: "ATV Motor", harga: 175000, unit: "", min: "", gambar: "atv.jpg", desc: "Jalur kebun teh, tersedia single dan tandem." },
    { nama: "Offroad Jimny", harga: 900000, unit: "", min: "Min. 4 orang", gambar: "offroad-jimny.jpg", desc: "Suzuki Jimny 4x4 lewat lumpur, tanjakan, dan kebun teh." },
    { nama: "Offroad Landy", harga: 1750000, unit: "", min: "", gambar: "offroad-landy.jpg", desc: "Land Rover Series klasik, konvoi sampai 10 mobil." },
    { nama: "Live Music", harga: 2700000, unit: "", min: "", gambar: "restaurant.jpg", desc: "Akustik atau band di tepi danau, sound system tersedia." },
  ],
  
  klien: [
    { nama: "KAI", logo: "kai.webp" },
    { nama: "Danantara Indonesia", logo: "danantara.webp" },
    { nama: "MedisKA", logo: "mediska.webp" },
    { nama: "Citar", logo: "citar.webp" }
  ],
  
  kenapa: [
    ["Lokasi terbaik", "Tepat di tepi Situ Cileunca, udara sejuk 16-22°C."],
    ["Semua dalam satu tempat", "Rafting, paintball, ATV, offroad, glamping, sampai kambing guling dalam satu paket."],
    ["Standar keselamatan", "Pemandu bersertifikat, briefing, pelampung, helm, P3K, dan jalur evakuasi."],
    ["Rombongan 10 sampai 1.000+", "Paket bisa disesuaikan untuk gathering, outing, wisuda, atau reuni."],
    ["Harga jujur", "Isi paket dijelaskan di awal. Konsultasi dan survei lokasi gratis."],
    ["Pemandu warga lokal", "Kru dan mitra kuliner berasal dari warga sekitar Pangalengan."]
  ]
};
