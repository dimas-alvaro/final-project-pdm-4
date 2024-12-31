const orderForm = document.getElementById('orderForm');
const orderHistory = document.getElementById('orderHistory');

// Event Listener for Form Submission
orderForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form data
  const customerName = document.getElementById('customerName').value;
  const customerPhone = document.getElementById('customerPhone').value;
  const customerAddress = document.getElementById('customerAddress').value;
  const serviceType = document.getElementById('serviceType').value;
  const speed = document.getElementById('speed').value;

  // Save to localStorage
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push({ customerName, customerPhone, customerAddress, serviceType, speed });
  localStorage.setItem('orders', JSON.stringify(orders));

  // Update order history
  updateOrderHistory();
  orderForm.reset(); // Clear form
});

// Function to Update Order History
function updateOrderHistory() {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orderHistory.innerHTML = '';
  orders.forEach((order) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${order.customerName}</td>
      <td>${order.customerPhone}</td>
      <td>${order.customerAddress}</td>
      <td>${order.serviceType}</td>
      <td>${order.speed}</td>
    `;
    orderHistory.appendChild(row);
  });
}

// Initialize Order History
document.addEventListener('DOMContentLoaded', updateOrderHistory);
