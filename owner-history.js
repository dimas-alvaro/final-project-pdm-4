// Contoh data riwayat pesanan dan laporan penjualan (nanti bisa diganti dengan data dari server/backend)
const orderHistory = [
  {
    id: 1,
    customerName: "John Doe",
    detailPakaian: "2 baju, 1 celana",
    notes: "Harap hati-hati dengan pakaian putih",
    speed: "Express",
    status: "Selesai",
    date: "2024-12-01",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    detailPakaian: "3 baju, 2 celana",
    notes: "",
    speed: "Reguler",
    status: "Diantar",
    date: "2024-12-02",
  },
];

const salesReport = [
  {
    id: 1,
    customerName: "John Doe",
    totalHarga: 12000,
    date: "2024-12-01",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    totalHarga: 9000,
    date: "2024-12-02",
  },
];

// Fungsi untuk menampilkan data riwayat pesanan
function displayOrderHistory() {
  const orderList = document.getElementById("order-list");
  orderList.innerHTML = "";

  orderHistory.forEach((order, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${index + 1}</td>
            <td>${order.customerName}</td>
            <td>${order.detailPakaian}</td>
            <td>${order.notes}</td>
            <td>${order.speed}</td>
            <td>${order.status}</td>
            <td>${order.date}</td>
        `;

    orderList.appendChild(row);
  });
}

// Tampilkan riwayat pesanan dan laporan penjualan saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  displayOrderHistory();
});
