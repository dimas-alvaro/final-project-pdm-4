document.addEventListener("DOMContentLoaded", function() {
    const ordersTable = document.getElementById("orders-tbody");
    const completedOrders = [];
    const modal = document.getElementById("confirmation-modal");
    const confirmBtn = document.getElementById("confirm-btn");
    const cancelBtn = document.getElementById("cancel-btn");
    let currentOrderId = null;

    // Function to move order to history and remove it from active orders
    function moveOrderToHistory(orderId) {
        const row = document.getElementById(`order${orderId}`);
        const cells = row.querySelectorAll("td");
        const orderDetails = {
            no: cells[0].textContent,
            customer: cells[1].textContent,
            detail: cells[2].textContent,
            note: cells[3].textContent,
            speed: cells[4].textContent,
            status: "Selesai"
        };

        completedOrders.push(orderDetails);
        row.remove();
        alert("Pesanan telah dipindahkan ke Riwayat Pemesanan");
        console.log("Riwayat Pesanan:", completedOrders);
    }

    // Function to show confirmation modal
    function showConfirmationModal(orderId) {
        currentOrderId = orderId;
        modal.style.display = "flex";
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = "none";
        currentOrderId = null;
    }

    // Function to update order status based on current state
    function updateOrderStatus(orderId) {
        const statusElement = document.getElementById(`status${orderId}`);
        const currentStatus = statusElement.textContent;

        if (currentStatus === "Menunggu") {
            statusElement.textContent = "Sedang Diproses";
            statusElement.className = "status Sedang-Diproses";
        } else if (currentStatus === "Sedang Diproses") {
            statusElement.textContent = "Selesai";
            statusElement.className = "status Selesai";
            showConfirmationModal(orderId);
        }
    }

    // Function to revert the order status to "Menunggu"
    function revertOrderStatus(orderId) {
        const statusElement = document.getElementById(`status${orderId}`);
        statusElement.textContent = "Menunggu";
        statusElement.className = "status Menunggu";
    }

    // Adding event listeners for update and revert buttons
    function addEventListenersToButtons() {
        document.querySelectorAll(".update-btn").forEach(button => {
            button.addEventListener("click", function() {
                const orderId = this.getAttribute("data-order-id");
                updateOrderStatus(orderId);
            });
        });

        document.querySelectorAll(".revert-btn").forEach(button => {
            button.addEventListener("click", function() {
                const orderId = this.getAttribute("data-order-id");
                revertOrderStatus(orderId);
            });
        });
    }

    // Function to confirm order move to history
    confirmBtn.addEventListener("click", function() {
        moveOrderToHistory(currentOrderId);
        closeModal();
    });

    // Function to cancel and close modal
    cancelBtn.addEventListener("click", closeModal);

    // Function to initialize the page with necessary event listeners
    function initializePage() {
        addEventListenersToButtons();
    }

    // Call initialize function to set up event listeners
    initializePage();

    // Utility function to animate modal entry
    function animateModalIn() {
        modal.style.transition = "opacity 0.5s ease-in-out, transform 0.3s ease-in-out";
        modal.style.opacity = 1;
        modal.style.transform = "translateY(0)";
    }

    // Utility function to animate modal exit
    function animateModalOut() {
        modal.style.transition = "opacity 0.5s ease-in-out, transform 0.3s ease-in-out";
        modal.style.opacity = 0;
        modal.style.transform = "translateY(-50%)";
    }

    // Enhanced Confirmation modal behavior
    function enhancedModalBehavior() {
        // Show modal with smooth animation
        modal.addEventListener('transitionend', function () {
            if (modal.style.opacity === '0') {
                modal.style.display = 'none';
            }
        });

        // Trigger show on modal
        function showModal() {
            modal.style.display = 'flex';
            animateModalIn();
        }

        // Trigger hide on modal
        function hideModal() {
            animateModalOut();
        }

        // Attach showModal function to confirm button
        confirmBtn.addEventListener("click", showModal);
        cancelBtn.addEventListener("click", hideModal);
    }

    // Dynamic Status Change Function
    function dynamicStatusChange(orderId) {
        const statusElement = document.getElementById(`status${orderId}`);
        const statusClasses = ["Menunggu", "Sedang-Diproses", "Selesai"];
        let nextStatusIndex = (statusClasses.indexOf(statusElement.className) + 1) % statusClasses.length;

        statusElement.className = `status ${statusClasses[nextStatusIndex]}`;
        statusElement.textContent = statusClasses[nextStatusIndex];

        // Trigger move to history if status is 'Selesai'
        if (statusClasses[nextStatusIndex] === "Selesai") {
            showConfirmationModal(orderId);
        }
    }

    // Function to initialize event listeners for table rows
    function initializeRowEvents() {
        const rows = ordersTable.querySelectorAll("tr");
        rows.forEach(row => {
            row.addEventListener("mouseenter", function () {
                row.style.backgroundColor = "#f1f1f1";
            });
            row.addEventListener("mouseleave", function () {
                row.style.backgroundColor = "";
            });
        });
    }

    // Additional animation for row hover
    function addRowHoverEffect() {
        const rows = document.querySelectorAll(".orders-table tr");
        rows.forEach(row => {
            row.addEventListener("mouseenter", function () {
                row.style.transition = "background-color 0.3s ease-in-out";
                row.style.backgroundColor = "#f1f1f1";
            });

            row.addEventListener("mouseleave", function () {
                row.style.backgroundColor = "";
            });
        });
    }

    // Update UI on first load
    function updateUIOnFirstLoad() {
        initializePage();
        addRowHoverEffect();
    }

    // Execute functions to update UI when the page loads
    updateUIOnFirstLoad();

    // Utility to animate button on hover
    function animateButtonOnHover() {
        document.querySelectorAll(".update-btn, .revert-btn").forEach(button => {
            button.addEventListener("mouseover", function() {
                this.style.transform = "scale(1.1)";
                this.style.transition = "transform 0.3s ease";
            });

            button.addEventListener("mouseout", function() {
                this.style.transform = "scale(1)";
            });
        });
    }

    // Call button hover animation
    animateButtonOnHover();
});
