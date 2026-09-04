# Garis Waktu Ekonomi Islam

Situs statis (HTML/CSS/JS murni, tanpa build tool) berisi garis waktu sejarah
dan pemikiran ekonomi Islam — dari ekonomi Jazirah Arab pra-Islam hingga era
kontemporer pasca krisis 2008. Dibuat untuk mata kuliah **Sejarah dan
Pemikiran Ekonomi Islam (ESY81301)**.

- `index.html` — garis waktu utama, bisa disaring per zaman, setiap entri
  menaut ke halaman detailnya.
- `topics/` — 20 halaman detail (konteks historis, pokok pemikiran, karya
  utama, relevansi kontemporer, rujukan jurnal), lengkap dengan navigasi
  sebelumnya/selanjutnya secara kronologis.
- `topics/bedah-*.html` — halaman **bedah rujukan**: kajian mendalam yang
  membedah sumber-sumber sebuah topik satu per satu (identitas sumber, isi
  pokok, bacaan analitis, kekuatan &amp; keterbatasan), lalu menyintesiskannya.
  Halaman ini tidak muncul di garis waktu; ia ditaut dari halaman topik
  induknya lewat kartu `.deep-dive` dan tautan `.pagenav`. Yang sudah ada:
  `bedah-ekonomi-arab-pra-islam.html`, `bedah-rasulullah-saw.html`, dan
  `bedah-khulafaur-rasyidin.html` (Modul 2).
- `assets/style.css`, `assets/script.js` — gaya dan interaksi (filter zaman)
  yang dipakai bersama seluruh halaman.

Tidak ada dependensi build (tidak perlu `npm install`) — situs ini murni
HTML statis, siap diterbitkan langsung sebagai GitHub Pages.

## Cara menerbitkan ke GitHub Pages

**Opsi A — repo baru, file di root (paling sederhana)**

1. Buat repository baru di GitHub, misalnya `sejarah-ekonomi-islam`.
2. Unggah seluruh isi folder ini (`index.html`, `assets/`, `topics/`,
   `README.md`) ke root repository tersebut — lewat web GitHub ("Add file →
   Upload files") atau lewat `git`:
   ```bash
   git init
   git add .
   git commit -m "Publish garis waktu ekonomi Islam"
   git branch -M main
   git remote add origin https://github.com/<username>/sejarah-ekonomi-islam.git
   git push -u origin main
   ```
3. Di repo tersebut buka **Settings → Pages**.
4. Pada **Build and deployment → Source**, pilih **Deploy from a branch**.
5. Pada **Branch**, pilih `main` dan folder `/ (root)`, lalu **Save**.
6. Tunggu 1-2 menit — GitHub akan menampilkan URL live, biasanya:
   `https://<username>.github.io/sejarah-ekonomi-islam/`

**Opsi B — menambahkan ke repo yang sudah ada (folder `/docs`)**

Jika sudah punya repository lain dan ingin menambahkan situs ini sebagai
bagian dari repo tersebut tanpa mengganggu isi root:

1. Salin seluruh isi folder ini ke dalam folder `docs/` di repo tersebut.
2. Commit & push seperti biasa.
3. Di **Settings → Pages → Branch**, pilih branch yang sesuai dan folder
   `/docs`, lalu **Save**.

## Menambah atau mengubah entri

Karena situs ini statis, cara paling gampang menambah entri baru adalah
menduplikasi salah satu file di `topics/`, mengganti isinya, lalu menambahkan
kartu tautan baru ke `index.html` pada bagian `<section class="era" ...>`
yang sesuai (ikuti pola `<a class="entry-link" href="topics/nama-file.html"
data-era="...">...</a>` yang sudah ada). Jangan lupa memperbarui tautan
"Sebelumnya / Selanjutnya" (`.pagenav`) pada halaman sebelum dan sesudahnya
agar urutan kronologis tetap tersambung.

## Berkas pendamping

File `Rincian_Materi_Sejarah_Pemikiran_Ekonomi_Islam.xlsx` (di folder mata
kuliah yang sama, di luar situs ini) memuat rincian materi per modul, kata
kunci riset, dan daftar lengkap jurnal pendukung dengan tautannya.

Dibuat oleh Hariyanto Mahasiswa Magister Ekonomi Syariah IAIN Curup 2026
