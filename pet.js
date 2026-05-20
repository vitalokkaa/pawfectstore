// FITUR TOMBOL TAMBAH
const semuaTombol = document.querySelectorAll(".btn-tambah");

semuaTombol.forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    tombol.textContent = "✅ Ditambahkan";
    tombol.style.backgroundColor = "#4caf50";

    setTimeout(function () {
      tombol.textContent = "+ Tambah";
      tombol.style.backgroundColor = "#ff8a65";
    }, 1500);
  });
});


// FITUR FORM KONTAK
const formKontak = document.getElementById("form-kontak");
const pesanSukses = document.getElementById("pesan-sukses");

// Sembunyikan pesan sukses saat awal
pesanSukses.style.display = "none";

formKontak.addEventListener("submit", function (event) {
  event.preventDefault();

  // Tampilkan pesan sukses
  pesanSukses.style.display = "block";

  // Reset isi form
  formKontak.reset();

  // Hilangkan pesan sukses setelah 2 detik
  setTimeout(function () {
    pesanSukses.style.display = "none";
  }, 2000);
});