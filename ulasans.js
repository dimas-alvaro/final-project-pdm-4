<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ulasan Pelanggan</title>
    <style>
        /* General Styles */
        body {
            font-family: "P", sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: #f9f9f9;
        }

        /* Container */
        .container {
            width: 90%;
            max-width: 900px;
            margin: 0 auto;
            padding: 30px;
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            animation: fadeIn 0.8s ease-in-out;
        }

        /* Back Button */
        .back-btn {
            display: inline-block;
            margin-bottom: 30px;
            padding: 12px 25px;
            background-color: #f96e2a;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-size: 18px;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .back-btn:hover {
            background-color: #e65d1a;
            transform: translateY(-2px);
        }

        /* Title */
        h3 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
            animation: slideIn 0.8s ease;
        }

        /* Review Container */
        .reviews {
            animation: fadeInUp 1s ease forwards;
            opacity: 0;
            transform: translateY(30px);
        }

        /* Review Item */
        .review-item {
            background-color: #f2f2f2;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 25px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .review-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .review-title {
            font-size: 20px;
            font-weight: bold;
            color: #333;
        }

        .review-rating {
            font-size: 18px;
            color: #ff9900;
            margin-top: 5px;
        }

        .review-content {
            font-size: 16px;
            color: #666;
            margin-top: 10px;
        }

        .review-author {
            font-size: 14px;
            color: #777;
            font-style: italic;
            margin-top: 8px;
        }

        /* Additional Elements */
        .review-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 15px;
        }

        .review-date {
            font-size: 12px;
            color: #aaa;
        }

        .report-btn {
            padding: 8px 15px;
            background-color: #f96e2a;
            color: white;
            border-radius: 5px;
            font-size: 14px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .report-btn:hover {
            background-color: #e65d1a;
        }

        /* Animations */
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideIn {
            from {
                transform: translateY(-20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        /* Media Queries for Responsiveness */
        @media (max-width: 768px) {
            .container {
                padding: 20px;
            }

            .back-btn {
                font-size: 16px;
            }

            h3 {
                font-size: 24px;
            }

            .review-item {
                padding: 15px;
            }

            .review-title {
                font-size: 18px;
            }

            .review-rating {
                font-size: 16px;
            }

            .review-content {
                font-size: 14px;
            }
        }

        @media (max-width: 480px) {
            .container {
                padding: 15px;
            }

            .back-btn {
                padding: 10px 20px;
                font-size: 14px;
            }

            h3 {
                font-size: 22px;
            }

            .review-item {
                padding: 12px;
            }

            .review-title {
                font-size: 16px;
            }

            .review-rating {
                font-size: 14px;
            }

            .review-content {
                font-size: 12px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Back Button -->
        <a href="owner-dashboard.html" class="back-btn">← Kembali ke Dashboard Owner</a>

        <h3>Ulasan Pelanggan</h3>
        <div class="reviews" id="reviews-container">
            <!-- Dynamic reviews will be inserted here -->
        </div>
    </div>

    <script>
        // JavaScript for dynamic loading of reviews and interactivity
        document.addEventListener("DOMContentLoaded", function() {
            const reviews = [
                {
                    customer: "Customer 1",
                    rating: 5,
                    content: "Great service! The laundry was done on time and smelled fresh. Highly recommended!",
                    date: "2024-12-20",
                    reportId: "report-1"
                },
                {
                    customer: "Customer 2",
                    rating: 4,
                    content: "Very satisfied with the laundry! It was perfectly cleaned and folded. A bit expensive though.",
                    date: "2024-12-18",
                    reportId: "report-2"
                },
                {
                    customer: "Customer 3",
                    rating: 5,
                    content: "Fast and efficient service. My clothes were treated with care and returned promptly. Will use again!",
                    date: "2024-12-15",
                    reportId: "report-3"
                }
            ];

            const reviewsContainer = document.getElementById("reviews-container");

            // Function to generate review items dynamically
            reviews.forEach(review => {
                const reviewItem = document.createElement("div");
                reviewItem.classList.add("review-item");

                reviewItem.innerHTML = `
                    <div class="review-title"><strong>${review.customer}:</strong></div>
                    <div class="review-rating">${"⭐".repeat(review.rating)}</div>
                    <div class="review-content">${review.content}</div>
                    <div class="review-footer">
                        <div class="review-date">Posted on: ${review.date}</div>
                        <button class="report-btn" id="${review.reportId}">Report</button>
                    </div>
                `;

                reviewsContainer.appendChild(reviewItem);

                // Add event listener for the report button
                document.getElementById(review.reportId).addEventListener("click", function() {
                    alert(`${review.customer}'s review has been reported.`);
                });
            });
        });
    </script>
</body>
</html>
