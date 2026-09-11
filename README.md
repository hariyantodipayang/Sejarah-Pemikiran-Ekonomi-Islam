# Garis Waktu Ekonomi Islam

Situs statis (HTML/CSS/JS murni, tanpa build tool) berisi garis waktu sejarah
dan pemikiran ekonomi Islam — dari ekonomi Jazirah Arab pra-Islam hingga era
kontemporer pasca krisis 2008. Dibuat untuk mata kuliah **Sejarah dan
Pemikiran Ekonomi Islam (ESY81301)**.

Situs ini kini terdiri atas **tiga bagian (tab)** pada halaman depan:

- **Bagian I — Garis Waktu.** Garis waktu utama, bisa disaring per zaman,
  setiap entri menaut ke halaman detailnya. Ini isi situs sejak awal dan tetap
  menjadi tab yang terbuka pertama kali.
- **Bagian II — Kajian Artikel.** Bedah mendalam atas tujuh artikel jurnal
  yang menjadi bahan diskusi kelas SPEI Pascasarjana IAIN Curup, satu halaman
  per artikel di dalam folder `kajian/`, didahului **Artikel 0** yang bukan
  bahan diskusi melainkan alat bedahnya: tulisan Adam Glapiński tentang
  metodologi sejarah pemikiran ekonomi, beserta **standar sembilan langkah**
  turunan PPT Dr. M. Sholihin yang dipakai membedah ketujuh artikel sisanya.
- **Bagian III — Dunia Sezaman.** Garis waktu paralel dalam delapan periode:
  kolom dunia Islam berhadapan dengan kolom peradaban lain (Bizantium, Eropa
  Barat, Tiongkok, India, Persia, Jepang, Afrika, dan Amerika pra-Kolumbus),
  dengan fokus pada apa yang terjadi secara **ekonomi** pada tahun-tahun yang
  sama. Isinya seluruhnya berada di dalam `index.html`.

Perpindahan tab ditangani `assets/script.js` dan mendukung tautan langsung
lewat tanda pagar: `index.html#timeline`, `index.html#kajian`, dan
`index.html#dunia`. Daftar nama tab dibaca langsung dari tombol yang ada,
sehingga menambah tab baru tidak menuntut perubahan pada fungsi JavaScript-nya.

Struktur berkasnya:

- `index.html` — halaman depan berisi ketiga tab: garis waktu (dengan saringan
  zaman), daftar halaman kajian (Artikel 0 sampai 7), dan seluruh isi tab Dunia
  Sezaman.
- `topics/` — 20 halaman detail (konteks historis, pokok pemikiran, karya
  utama, relevansi kontemporer, **perbandingan dengan peradaban lain**, dan
  rujukan jurnal), lengkap dengan navigasi sebelumnya/selanjutnya secara
  kronologis. Bagian **"Di Belahan Dunia Lain"** (`data-mark="5"`) pada tiap
  halaman memuat tiga sampai tujuh kartu `.world-card` berisi apa yang terjadi
  secara ekonomi di peradaban non-Islam pada tahun yang sama, ditutup satu
  kotak *Benang merah*.
- `topics/bedah-*.html` — halaman **bedah rujukan**: kajian mendalam yang
  membedah sumber-sumber sebuah topik satu per satu (identitas sumber, isi
  pokok, bacaan analitis, kekuatan &amp; keterbatasan), lalu menyintesiskannya.
  Halaman ini tidak muncul di garis waktu; ia ditaut dari halaman topik
  induknya lewat kartu `.deep-dive` dan tautan `.pagenav`. Yang sudah ada:
  `bedah-ekonomi-arab-pra-islam.html`, `bedah-rasulullah-saw.html`, dan
  `bedah-khulafaur-rasyidin.html` (Modul 2), serta
  `bedah-reformasi-fiskal-umayyah.html` (Modul 3) dan
  `bedah-abu-yusuf-kitab-al-kharaj.html` (Modul 4).
- `kajian/` — delapan halaman kajian artikel. **`0-glapinski-metodologi.html`**
  berdiri terpisah sebagai halaman rujukan: ia menerangkan gagasan Glapiński
  (2004) sekaligus memuat **standar sembilan langkah** lengkap dengan tabel
  pemetaannya ke format tujuh bagian sebuah *book chapter*. Tujuh halaman
  sisanya bersusunan seragam mengikuti standar itu: cara membaca halaman ·
  kartu identitas artikel · **sembilan langkah** (Historical Context ·
  Intellectual Context · Social-Political-Institutional Context · Economic
  Problem · Cognitive Perspective · Economic Concepts · Theoretical System ·
  Transmission &amp; Reception · Transformation) · sintesis · istilah kunci ·
  kekuatan &amp; keterbatasan · bahan keyspeaker dan book chapter · kaitan ke
  garis waktu. Tiap langkah diberi lencana `.isian` yang menyatakan apakah
  artikel itu mengisinya penuh, sebagian, atau tidak sama sekali — sehingga
  ruang kosong yang bisa digarap langsung kelihatan. Berkasnya:
  `0-glapinski-metodologi.html` (Glapiński 2004 + PPT Dr. M. Sholihin),
  `1-islahi-tiga-puluh-tahun.html` (Islahi 2007),
  `2-orman-sumber-sumber.html` (Orman 1997),
  `3-schumpeterian-gap.html` (Ali &amp; Thompson 1999),
  `4-cizakca-sistem-ekonomi.html` (Çizakça 2020),
  `5-handoko-analisis-isi.html` (Handoko 2020),
  `6-haidar-analisis-sentimen.html` (Haidar &amp; Rusadi 2022), dan
  `7-dundar-sosiologi-ekonomi.html` (Dündar 2022).
- `assets/style.css`, `assets/script.js` — gaya dan interaksi (tab utama serta
  saringan zaman) yang dipakai bersama seluruh halaman. Komponen yang perlu
  diketahui saat menambah isi: `.world-grid`/`.world-card` untuk kartu
  perbandingan pada halaman topik; `.cmp`/`.cmp-cols`/`.cmp-benang` untuk blok
  garis waktu paralel pada tab Dunia Sezaman; serta tiga komponen halaman
  kajian — `.rantai` (rantai tujuh mata metodologi, tiap mata diberi kelas `on`
  atau `off`), `.isian` dengan varian `penuh`/`sebagian`/`kosong` (lencana
  keterisian tiap langkah), dan `.peta-tabel` di dalam `.tabel-scroll` (tabel
  pemetaan sembilan langkah ke tujuh bagian book chapter).

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

## Menambah halaman kajian artikel

Duplikasi salah satu berkas Artikel 1–7 di `kajian/` (jangan Artikel 0 — ia
halaman rujukan dengan susunan sendiri), lalu ganti isinya **tanpa mengubah
kerangkanya**: `A` cara membaca · `B` kartu identitas · `1`–`9` sembilan
langkah · `C` sintesis · `D` istilah kunci · `E` kekuatan &amp; keterbatasan ·
`F` bahan keyspeaker &amp; book chapter · `G` kaitan garis waktu. Penanda
bagiannya memakai atribut `data-mark` (menerima huruf maupun angka dua digit).
Tiap langkah wajib diberi satu lencana `.isian penuh|sebagian|kosong`, dan
bagian sintesis memuat `.rantai` yang mata-matanya disesuaikan dengan lencana
itu. Setelah itu tambahkan kartu tautannya pada panel `data-panel="kajian"` di
`index.html`, dan perbarui tautan "Sebelumnya / Selanjutnya" (`.pagenav`) pada
halaman sebelum dan sesudahnya.

Tiga kebiasaan yang dipakai konsisten di seluruh halaman kajian dan sebaiknya
dipertahankan: (1) memisahkan dengan jelas mana yang merupakan isi artikel dan
mana yang merupakan pengembangan penyusun halaman — termasuk menyatakan bahwa
standar sembilan langkah itu operasionalisasi Dr. M. Sholihin, **bukan** isi
tulisan Glapiński; (2) menyatakan terbuka bila berkas sumbernya tidak lengkap —
seperti pada halaman Artikel 2, yang berkas PDF-nya hanya memuat dua halaman
pertama; (3) tidak menaikkan lencana `.isian` melebihi apa yang benar-benar
dikerjakan artikelnya — langkah yang kosong justru bagian paling berguna,
karena di situlah ruang tulisan baru.

## Menambah periode pada tab Dunia Sezaman

Duplikasi salah satu blok `<div class="cmp">` di dalam panel
`data-panel="dunia"` pada `index.html`, lalu isi dua kolomnya: `.cmp-col.islam`
untuk dunia Islam dan `.cmp-col.lain` untuk peradaban lain. Tiap butir berupa
`.cmp-item` dengan `.ci-label` sebagai penanda wilayah dan tahun. Tutup dengan
`.cmp-benang` yang menyatakan pelajaran perbandingannya.

Dua kaidah dipegang konsisten di seluruh bagian perbandingan dan sebaiknya
dipertahankan: (1) **kesamaan tahun bukan bukti saling memengaruhi** — klaim
peminjaman gagasan menuntut bukti dokumenter; (2) **mengemukakan gagasan lebih
dulu tidaklah cukup** — yang menentukan dalam sejarah adalah apakah gagasan itu
berhasil dilembagakan dan dibesarkan.

## Berkas pendamping

File `Rincian_Materi_Sejarah_Pemikiran_Ekonomi_Islam.xlsx` (di folder mata
kuliah yang sama, di luar situs ini) memuat rincian materi per modul, kata
kunci riset, dan daftar lengkap jurnal pendukung dengan tautannya.

Dibuat oleh Hariyanto Mahasiswa Magister Ekonomi Syariah IAIN Curup 2026
