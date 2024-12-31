let selectedServices = [];

// Menambahkan service yang dipilih ke array
document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", function () {
    const serviceItem = this.closest(".service-item");
    const serviceName = serviceItem.querySelector("h3").textContent;
    const servicePrice = parseInt(this.getAttribute("data-price"));

    // Menampilkan input jumlah pakaian setelah memilih layanan
    const quantityInputContainer = document.getElementById(
      "quantity-input-container"
    );
    const quantityInputHTML = `
      <label for="${serviceName}-quantity">${serviceName}</label>
      <input type="number" id="${serviceName}-quantity" placeholder="Jumlah Pakaian" min="1" />
    `;
    quantityInputContainer.innerHTML = quantityInputHTML;
    document.getElementById("enter-quantity").style.display = "block";

    // Menyimpan nama dan harga layanan untuk langkah selanjutnya
    selectedServices.push({ name: serviceName, price: servicePrice });
    nextStep("enter-quantity");
  });
});

// Fungsi untuk berpindah antar step
function nextStep(stepId) {
  document.querySelectorAll(".container > div").forEach((div) => {
    div.style.display = "none";
  });
  document.getElementById(stepId).style.display = "block";

  // Optional: Load order history from localStorage (or another data source)
  if (stepId === "order-history") {
    loadOrderHistory();
  }
}

// Fungsi untuk memuat riwayat pesanan
function loadOrderHistory() {
  // Ambil riwayat pesanan dari localStorage (atau sumber data lain)
  const orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];

  // Menampilkan riwayat pesanan di halaman
  const orderHistoryList = document.getElementById("order-history-list");
  orderHistoryList.innerHTML = ""; // Bersihkan daftar sebelumnya

  if (orderHistory.length === 0) {
    orderHistoryList.innerHTML = "<li>No orders found.</li>";
  } else {
    orderHistory.forEach((order, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `Order #${index + 1}: ${order.serviceName} - ${
        order.quantity
      } items - Total: Rp ${order.totalPrice}`;
      orderHistoryList.appendChild(listItem);
    });
  }
}
// Fungsi untuk menutup halaman Order History dan kembali ke Customer Dashboard
function closeOrderHistory() {
  // Sembunyikan halaman Order History
  document.getElementById("order-history").style.display = "none";

  // Tampilkan halaman Customer Dashboard (layanan)
  document.getElementById("services").style.display = "block";
}

// Submit form customer details
document
  .getElementById("details-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const customerName = document.getElementById("customer-name").value;
    const customerAddress = document.getElementById("customer-address").value;
    const customerPhone = document.getElementById("customer-phone").value;

    // Ambil jumlah pakaian dari input yang telah dimasukkan oleh customer
    selectedServices.forEach((service) => {
      const quantityInput = document.getElementById(`${service.name}-quantity`);
      service.quantity = parseInt(quantityInput.value) || 1;
    });

    // Simpan detail pelanggan di localStorage
    localStorage.setItem(
      "customerDetails",
      JSON.stringify({
        name: customerName,
        address: customerAddress,
        phone: customerPhone,
      })
    );

    // Hitung total harga
    let totalHarga = selectedServices.reduce(
      (sum, service) => sum + service.price * service.quantity,
      0
    );
    let serviceSpeed = document.querySelector(
      'input[name="service-speed"]:checked'
    ).value;
    if (serviceSpeed === "Kilat") totalHarga += 5000;
    if (serviceSpeed === "Express") totalHarga += 8000;

    document.getElementById("receipt-total").innerText = `Rp ${totalHarga}`;
    document.getElementById("receipt-name").innerText = customerName;
    document.getElementById("receipt-address").innerText = customerAddress;
    document.getElementById("receipt-phone").innerText = customerPhone;

    // Tampilkan halaman pembayaran
    nextStep("payment");
  });

// Fungsi untuk menangani pembayaran
function makePayment() {
  const paymentMethod = document.querySelector(
    'input[name="payment-method"]:checked'
  ).value;
  const customerDetails = JSON.parse(localStorage.getItem("customerDetails"));

  alert(`Pembayaran berhasil menggunakan metode: ${paymentMethod}`);
  console.log(
    `Customer Details Sent to Owner - Name: ${customerDetails.name}, Address: ${customerDetails.address}, Phone: ${customerDetails.phone}`
  );

  // Simpan pesanan ke riwayat
  storeOrderHistory();

  // Tampilkan struk pemesanan
  document.getElementById("receipt-detail").innerText = selectedServices
    .map(
      (service) =>
        `${service.name} (${service.quantity} items): Rp ${
          service.price * service.quantity
        }`
    )
    .join(", ");
  nextStep("receipt");
}

// Fungsi untuk menyimpan riwayat pesanan
function storeOrderHistory() {
  const orderDetails = {
    serviceName: selectedServices.map((service) => service.name).join(", "),
    quantity: selectedServices.reduce(
      (sum, service) => sum + service.quantity,
      0
    ),
    totalPrice: selectedServices.reduce(
      (sum, service) => sum + service.price * service.quantity,
      0
    ),
  };

  // Ambil riwayat pesanan yang sudah ada
  const existingHistory =
    JSON.parse(localStorage.getItem("orderHistory")) || [];

  // Tambahkan pesanan baru ke riwayat
  existingHistory.push(orderDetails);

  // Simpan riwayat yang sudah diperbarui
  localStorage.setItem("orderHistory", JSON.stringify(existingHistory));
}

// Fungsi untuk menampilkan riwayat pesanan
function showOrderHistory() {
  const historySection = document.getElementById("order-history");
  const historyList = document.getElementById("history-list");

  // Ambil riwayat pesanan dari localStorage
  const orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];

  // Kosongkan daftar riwayat sebelum menambahkan data baru
  historyList.innerHTML = "";

  // Tambahkan pesanan ke daftar riwayat
  orderHistory.forEach((order, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Order #${index + 1} - ${order.serviceName} (${
      order.quantity
    } items) - Total: Rp ${order.totalPrice}`;
    historyList.appendChild(listItem);
  });

  // Tampilkan riwayat pesanan
  historySection.style.display = "block";
}

// Fungsi untuk menutup riwayat pesanan
function closeOrderHistory() {
  const historySection = document.getElementById("order-history");
  historySection.style.display = "none";
}

function confirmReceived() {
  alert("Thank you for confirming!");
  nextStep("review");
}

// Fungsi untuk mengirimkan ulasan dan otomatis logout
function submitReview() {
  const reviewText = document.getElementById("review-text").value;
  alert(
    `Ulasanmu: "${reviewText}" berhasil dikirim. Terima kasih telah menggunakan jasa kami, sampai bertemu lagi!`
  );

  // Menghapus detail customer dari localStorage untuk logout
  localStorage.removeItem("customerDetails");

  // Redirect ke halaman login (index.html)
  window.location.href = "index.html";
}
