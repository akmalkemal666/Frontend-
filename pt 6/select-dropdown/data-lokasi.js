// 1. Data Struktur (Objek JavaScript)
const datalokasi = {
  asia: ["Jepang", "Indonesia", "Korea Selatan", "India"],
  eropa: ["Jerman", "Prancis", "Italia", "Spanyol"],
  amerika: ["Amerika Serikat", "Kanada", "Brasil", "Meksiko"]
};

// 2. Fungsi untuk menginisialisasi Dropdown Benua saat halaman dimuat
function inisialisasiBenua() {
  const selectBenua = document.getElementById('benua');

  // Tambahkan opsi default
  let defaultOption = document.createElement('option');
  defaultOption.value = "";
  defaultOption.textContent = "-- Pilih Benua --";
  selectBenua.appendChild(defaultOption);

  // Iterasi melalui dataLokasi dan tambahkan opsi Benua
  for (const benuaKey in datalokasi) {
    let option = document.createElement('option');
    option.value = benuaKey;
    option.textContent = benuaKey.charAt(0).toUpperCase() + benuaKey.slice(1);
    selectBenua.appendChild(option);
  }
}

// 3. Fungsi untuk memperbarui daftar Negara berdasarkan Benua yang dipilih
function updateNegara() {
  const selectBenua = document.getElementById('benua');
  const selectNegara = document.getElementById('negara');
  const hasil = document.getElementById('hasil');
  const pilihan = selectBenua.value;

  // Hapus isi dropdown negara lama
  selectNegara.innerHTML = "";

  if (pilihan && datalokasi[pilihan]) {
    datalokasi[pilihan].forEach(function(negara) {
      let option = document.createElement('option');
      option.value = negara;
      option.textContent = negara;
      selectNegara.appendChild(option);
    });
    hasil.textContent = "Benua yang dipilih: " + pilihan.charAt(0).toUpperCase() + pilihan.slice(1);
  } else {
    let option = document.createElement('option');
    option.textContent = "-- Pilih Benua Dahulu --";
    selectNegara.appendChild(option);
    hasil.textContent = "";
  }
}

// 4. Jalankan fungsi inisialisasi setelah halaman dimuat
window.onload = inisialisasiBenua;
