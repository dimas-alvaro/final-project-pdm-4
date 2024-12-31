document.addEventListener("DOMContentLoaded", function () {
    const reportElements = document.querySelectorAll('.report p');
    const backButton = document.querySelector('.back-btn');
    const statsContainers = document.querySelectorAll('.statistics');
    const fadeInDuration = 500; // Duration for fade-in effect
    const dataElements = document.querySelectorAll('.data-item');
    
    // Function to simulate loading of financial data with a timeout
    setTimeout(() => {
        reportElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = 1; // Fade-in effect
                element.classList.add('fade-in'); // Add fade-in class for smoother transition
            }, index * fadeInDuration); // Staggered effect
        });
    }, 500); // Delay before showing data

    // Hover effect for statistics containers
    statsContainers.forEach(container => {
        container.addEventListener('mouseenter', () => {
            container.style.transform = 'scale(1.05)';
            container.style.transition = 'transform 0.3s ease';
        });

        container.addEventListener('mouseleave', () => {
            container.style.transform = 'scale(1)';
        });
    });

    // Smooth scroll to top for back button
    backButton.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToTop();
    });

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Animate numbers dynamically
    function animateNumber(element, start, end, duration) {
        let range = end - start;
        let stepTime = Math.abs(Math.floor(duration / range));
        let current = start;
        let increment = end > start ? 1 : -1;

        let timer = setInterval(() => {
            current += increment;
            element.innerHTML = current;
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    // Animate financial data
    const totalPendapatan = document.querySelector('.highlight');
    const pengeluaran = totalPendapatan.nextElementSibling;

    setTimeout(() => {
        animateNumber(totalPendapatan, 0, 5000000, 2000);  // Total Pendapatan animation
        animateNumber(pengeluaran, 0, 2000000, 2000);  // Pengeluaran animation
    }, 1000);

    // Apply fade-in effect to financial report elements
    function fadeInElements(elements) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = 1;
            }, index * fadeInDuration);
        });
    }

    fadeInElements(reportElements);

    // Scroll-based effect for report container
    const reportContainer = document.querySelector('.report');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        let currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            reportContainer.style.opacity = 1;
            reportContainer.style.transform = 'translateY(0)';
        } else {
            reportContainer.style.opacity = 0;
            reportContainer.style.transform = 'translateY(20px)';
        }
        lastScrollY = currentScrollY;
    });

    // Show loader animation before content is revealed
    function showLoader() {
        const loader = document.createElement('div');
        loader.className = 'loader';
        loader.innerHTML = '<span>Loading...</span>';
        document.body.appendChild(loader);
        setTimeout(() => {
            loader.style.opacity = 0;
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 2000);
    }

    showLoader();

    // Fade-in effects for all the statistic-related items
    const statisticItems = document.querySelectorAll('.statistic-item');

    statisticItems.forEach((item, index) => {
        item.style.opacity = 0;
        setTimeout(() => {
            item.style.opacity = 1;
        }, 500 + index * 300);
    });

    // Apply animation to the statistics boxes
    function animateStatsBox(statsBox, scaleFrom, scaleTo) {
        statsBox.style.transform = `scale(${scaleFrom})`;
        setTimeout(() => {
            statsBox.style.transform = `scale(${scaleTo})`;
            statsBox.style.transition = 'transform 0.3s ease-in-out';
        }, 100);
    }

    const statBoxes = document.querySelectorAll('.stat-box');
    statBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => animateStatsBox(box, 1, 1.05));
        box.addEventListener('mouseleave', () => animateStatsBox(box, 1.05, 1));
    });

    // Dynamic change of content and data display with a timeline for transactions
    function displayTransactionData() {
        const transactionData = document.querySelector('.transaction-data');
        const transactions = [
            { label: 'Total Orders', value: 200 },
            { label: 'Pending Orders', value: 5 },
            { label: 'Completed Orders', value: 195 },
            { label: 'Refunded Orders', value: 3 }
        ];

        transactions.forEach((data, index) => {
            let paragraph = document.createElement('p');
            paragraph.textContent = `${data.label}: ${data.value}`;
            paragraph.classList.add('dynamic-stat');
            setTimeout(() => {
                transactionData.appendChild(paragraph);
            }, index * 1000);
        });
    }

    displayTransactionData();

    // Scroll effect on financial report container
    const financialReport = document.querySelector('.financial-report');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            financialReport.style.opacity = 1;
            financialReport.style.transform = 'translateY(0)';
        } else {
            financialReport.style.opacity = 0;
            financialReport.style.transform = 'translateY(50px)';
        }
    });

    // Show dynamic statistics in the dashboard
    function updateStatistics() {
        const stats = document.querySelectorAll('.stats-number');
        const statsData = [150, 80, 70, 300, 500];
        
        stats.forEach((stat, index) => {
            setTimeout(() => {
                animateNumber(stat, 0, statsData[index], 2500);
            }, index * 500);
        });
    }

    updateStatistics();

    // Initialize interactive animations
    const interactiveItems = document.querySelectorAll('.interactive-item');

    interactiveItems.forEach((item, index) => {
        item.style.opacity = 0;
        setTimeout(() => {
            item.style.opacity = 1;
            item.classList.add('fade-in');
        }, index * 700);
    });

    // Initialize tooltips for hover effects on stats
    function initializeTooltips() {
        const tooltipItems = document.querySelectorAll('.tooltip-item');
        
        tooltipItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const tooltip = item.querySelector('.tooltip');
                tooltip.style.visibility = 'visible';
            });

            item.addEventListener('mouseleave', () => {
                const tooltip = item.querySelector('.tooltip');
                tooltip.style.visibility = 'hidden';
            });
        });
    }

    initializeTooltips();
});
