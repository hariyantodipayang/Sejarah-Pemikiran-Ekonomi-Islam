// ---------------------------------------------------------------------------
// Interaksi situs Sejarah & Pemikiran Ekonomi Islam.
// Semua fungsi di bawah aman dipanggil pada halaman mana pun; jika elemennya
// tidak ada, fungsinya berhenti tanpa efek samping (no-op).
// ---------------------------------------------------------------------------

// 1) Tab utama: "Garis Waktu", "Kajian 7 Artikel", dan "Dunia Sezaman"
//    (hanya ada di index.html).
(function () {
  var tabs = document.querySelectorAll('.maintab');
  var panels = document.querySelectorAll('.panel');
  if (!tabs.length || !panels.length) return;

  function activate(name, pushHash) {
    tabs.forEach(function (t) {
      var on = t.getAttribute('data-tab') === name;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    panels.forEach(function (p) {
      p.hidden = p.getAttribute('data-panel') !== name;
    });
    if (pushHash && history.replaceState) {
      history.replaceState(null, '', '#' + name);
    }
  }

  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      activate(t.getAttribute('data-tab'), true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Buka tab sesuai tautan (#kajian, #dunia, atau #timeline) bila ada; selain
  // itu tab pertama yang terbuka. Daftar nama diambil langsung dari tombol
  // yang ada, sehingga penambahan tab baru tidak perlu mengubah fungsi ini.
  var NAMA = [];
  tabs.forEach(function (t) { NAMA.push(t.getAttribute('data-tab')); });
  function fromHash() {
    var h = (location.hash || '').replace('#', '');
    return NAMA.indexOf(h) !== -1 ? h : null;
  }
  var awal = fromHash();
  if (awal) activate(awal, false);

  // Tautan dalam halaman yang sama (misalnya #timeline dari panel kajian)
  // hanya mengubah tanda pagar tanpa memuat ulang halaman, sehingga perlu
  // ditangani tersendiri.
  window.addEventListener('hashchange', function () {
    var h = fromHash();
    if (h) {
      activate(h, false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
})();

// 2) Saringan zaman pada garis waktu. Dibatasi ke dalam #timeline saja supaya
//    tidak ikut menyembunyikan bagian kajian artikel.
(function () {
  var buttons = document.querySelectorAll('.filter-btn');
  var eras = document.querySelectorAll('#timeline .era');
  if (!buttons.length || !eras.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var f = btn.getAttribute('data-filter');
      eras.forEach(function (era) {
        era.style.display = (f === 'all' || era.getAttribute('data-era') === f) ? '' : 'none';
      });
    });
  });
})();
