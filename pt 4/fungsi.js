let dataBarang = [];

function showBarang() {
  let listBarang = document.getElementById("list-barang");
  listBarang.innerHTML = "";

  for (let i = 0; i < dataBarang.length; i++) {
    listBarang.innerHTML += `
      <li>
        ${dataBarang[i]}
        <div>
          <button onclick="editBarang(${i})">Edit</button>
          <button onclick="deleteBarang(${i})">Hapus</button>
        </div>
      </li>
    `;
  }
}

function addBarang() {
  let input = document.getElementById("input-barang");
  let barang = input.value.trim();

  if (barang === "") {
    alert("Nama barang tidak boleh kosong!");
    return;
  }

  dataBarang.push(barang);
  input.value = "";
  showBarang();
}

function editBarang(index) {
  let barangBaru = prompt("Edit nama barang:", dataBarang[index]);
  if (barangBaru !== null && barangBaru.trim() !== "") {
    dataBarang[index] = barangBaru.trim();
    showBarang();
  }
}

function deleteBarang(index) {
  if (confirm("Yakin ingin menghapus barang ini?")) {
    dataBarang.splice(index, 1);
    showBarang();
  }
}

// tampilkan daftar awal
showBarang();
