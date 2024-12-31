// Contoh data riwayat pemesanan (nanti bisa diganti dengan data dari server/backend)
const customerHistory = [
  {
    id: 1,
    detailPakaian: "2 baju, 1 celana",
    notes: "Harap hati-hati dengan pakaian putih",
    speed: "Express",
    status: "Selesai",
    date: "2024-12-01",
  },
  {
    id: 2,
    detailPakaian: "3 baju, 2 celana",
    notes: "",
    speed: "Reguler",
    status: "Diantar",
    date: "2024-12-02",
  },
];

// Fungsi untuk menampilkan data riwayat pemesanan
function displayCustomerHistory() {
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = "";

  customerHistory.forEach((order, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${index + 1}</td>
            <td>${order.detailPakaian}</td>
            <td>${order.notes}</td>
            <td>${order.speed}</td>
            <td>${order.status}</td>
            <td>${order.date}</td>
        `;

    historyList.appendChild(row);
  });
}

// Tampilkan riwayat pemesanan saat halaman dimuat
document.addEventListener("DOMContentLoaded", displayCustomerHistory);
