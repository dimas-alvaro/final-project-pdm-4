document.addEventListener("DOMContentLoaded", () => {
    // Ambil semua elemen layanan untuk animasi
    const serviceItems = document.querySelectorAll('.service-item');
    
    // Efek fade-in untuk setiap layanan
    serviceItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }, index * 400); // Staggered fade-in effect for each service
    });

    // Tambahkan animasi hover untuk layanan
    serviceItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'translateY(-5px)'; // Angkat elemen sedikit
            item.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'translateY(0)'; // Kembalikan posisi elemen
            item.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
});
