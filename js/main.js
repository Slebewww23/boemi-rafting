const rp = n => "Rp " + n.toLocaleString("id-ID");
const wa = msg => `https://wa.me/${BOEMI.wa}?text=${encodeURIComponent(msg)}`;
const img = f => `assets/images/${f}`;

// Paket (carousel)
document.getElementById("paket-track").innerHTML = BOEMI.paket.map(p => `
  <article class="card">
    <div class="card-img"><img src="${img(p.gambar)}" alt="${p.nama}: ${p.kategori}" loading="lazy"><span class="badge">${p.badge}</span></div>
    <div class="card-body">
      <p class="cat">${p.kategori}</p>
      <h3>${p.nama}</h3>
      <p class="meta">${p.min ? `Minimal ${p.min} orang` : "Hubungi kami untuk jumlah peserta"}</p>
      <ul class="chips">${p.isi.slice(0, 5).map(i => `<li>${i}</li>`).join("")}${p.isi.length > 5 ? `<li class="more">+${p.isi.length - 5} lainnya</li>` : ""}</ul>
      <details><summary>Lihat semua isi paket</summary><ul>${p.isi.map(i => `<li>${i}</li>`).join("")}</ul></details>
      <div class="card-foot">
        <p class="price"><small>${p.mulai ? "Mulai" : "Harga"}</small> ${rp(p.harga)} <small>/orang</small></p>
      </div>
    </div>
  </article>`).join("");

// Aktivitas
document.getElementById("aktivitas-grid").innerHTML = BOEMI.aktivitas.map(a => `
  <article class="act">
    <img src="${img(a.gambar)}" alt="${a.nama}" loading="lazy">
    <div><h3>${a.nama}</h3><p>${a.desc}</p>
    <p class="act-price">${rp(a.harga)} <small>${a.unit} ${a.min ? "· " + a.min : ""}</small></p></div>
  </article>`).join("");

// Kenapa Boemi
document.getElementById("kenapa-list").innerHTML = BOEMI.kenapa.map(([t, d]) => `<li><h3>${t}</h3><p>${d}</p></li>`).join("");

// Klien
document.getElementById("klien-grid").innerHTML = BOEMI.klien.map(k => `
  <li><img src="assets/images/klien/${k.logo}" alt="${k.nama}" loading="lazy"></li>`).join("");

// Google Maps
document.querySelectorAll("[data-maps]").forEach(a => { a.href = BOEMI.maps.link; a.target = "_blank"; a.rel = "noopener"; });
document.getElementById("peta").src = BOEMI.maps.embed;

// Link WhatsApp & kontak
document.querySelectorAll("[data-wa]").forEach(a => { a.href = wa(a.dataset.wa || "Halo Boemi Rafting, saya mau tanya paket."); a.target = "_blank"; a.rel = "noopener"; });
document.querySelectorAll("[data-telp]").forEach(e => e.textContent = BOEMI.telp);
document.querySelectorAll("[data-email]").forEach(e => { e.textContent = BOEMI.email; e.href = "mailto:" + BOEMI.email; });

// Menu mobile
const nav = document.getElementById("nav"), tg = document.getElementById("menu-toggle");
tg.addEventListener("click", () => tg.setAttribute("aria-expanded", nav.classList.toggle("open")));
nav.addEventListener("click", e => { if (e.target.tagName === "A") { nav.classList.remove("open"); tg.setAttribute("aria-expanded", "false"); } });

// Form pemesanan: isi pilihan paket
const sel = document.getElementById("f-paket");
const opt = (v, t) => `<option value="${v}">${t}</option>`;
sel.innerHTML =
  opt("", "Pilih paket atau aktivitas") +
  `<optgroup label="Paket">${BOEMI.paket.map(p => opt(`${p.nama} (${p.kategori})`, `${p.nama} - ${p.kategori}`)).join("")}</optgroup>` +
  `<optgroup label="Aktivitas satuan">${BOEMI.aktivitas.map(a => opt(a.nama, a.nama)).join("")}</optgroup>` +
  `<optgroup label="Menginap">${opt("Glamping", "Glamping river side")}</optgroup>` +
  `<optgroup label="Lainnya">${opt("Belum tahu, mau konsultasi", "Belum tahu, mau konsultasi dulu")}</optgroup>`;

// Form pemesanan: kirim ke WhatsApp
document.getElementById("form-pesan").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target;
  const tgl = f.tanggal.value ? new Date(f.tanggal.value).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }) : "-";
  const pesan = [
    "Halo Boemi Rafting, saya mau pesan.",
    `Nama: ${f.nama.value}`,
    `Paket: ${f.paket.value}`,
    `Jumlah peserta: ${f.peserta.value}`,
    `Tanggal kegiatan: ${tgl}`,
    `Catatan: ${f.catatan.value || "-"}`
  ].join("\n");
  window.open(wa(pesan), "_blank", "noopener");
});
