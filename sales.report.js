// Contoh data laporan penjualan (nanti bisa diganti dengan data dari server/backend)
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

// Fungsi untuk menampilkan data laporan penjualan
function displaySalesReport() {
  const salesReportList = document.getElementById("sales-report-list");
  salesReportList.innerHTML = "";

  salesReport.forEach((report, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${index + 1}</td>
            <td>${report.customerName}</td>
            <td>Rp ${report.totalHarga}</td>
            <td>${report.date}</td>
        `;

    salesReportList.appendChild(row);
  });
}

// Tampilkan laporan penjualan saat halaman dimuat
document.addEventListener("DOMContentLoaded", displaySalesReport);
