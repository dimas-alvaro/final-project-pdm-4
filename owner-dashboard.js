// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  
  // Smooth Scroll for Navigation Links
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Change Navbar Color on Scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#00796b'; // Darker teal
    } else {
      navbar.style.backgroundColor = '#009688'; // Original teal
    }
  });

  // Add hover effect to buttons with animations
  const buttons = document.querySelectorAll('.option-btn, .order-btn');
  buttons.forEach(button => {
    button.addEventListener('mouseover', function () {
      this.style.transition = 'transform 0.3s ease, background 0.3s ease';
      this.style.transform = 'scale(1.05)';
      this.style.backgroundColor = '#004d40'; // Darker shade of teal
    });

    button.addEventListener('mouseout', function () {
      this.style.transform = 'scale(1)';
      this.style.backgroundColor = ''; // Reset to default
    });
  });

  // Dynamic button animation effect for clicks
  const animateButtons = document.querySelectorAll('.option-btn, .order-btn');
  animateButtons.forEach(button => {
    button.addEventListener('mousedown', function () {
      this.style.transform = 'scale(0.98)';
      this.style.transition = 'transform 0.1s ease';
    });

    button.addEventListener('mouseup', function () {
      this.style.transform = 'scale(1)';
    });
  });

  // Set up Image Gallery Hover Effect
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('mouseover', function () {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseout', function () {
      this.style.transform = 'scale(1)';
    });
  });

  // Add a gentle fade-in effect for the page content
  const container = document.querySelector('.container');
  container.style.opacity = 0;
  container.style.transition = 'opacity 1s ease-in-out';
  setTimeout(function () {
    container.style.opacity = 1;
  }, 300);

  // Interactive Scroll Animation for Service Boxes
  const serviceBoxes = document.querySelectorAll('.service-box');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, options);

  serviceBoxes.forEach(box => {
    box.style.opacity = 0;
    box.style.transform = 'translateY(30px)';
    observer.observe(box);
  });

  // Trigger a background color change for the footer when scrolled to the bottom
  const footer = document.querySelector('.footer');
  window.addEventListener('scroll', function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      footer.style.backgroundColor = '#1d2d3f'; // Deep blue
    } else {
      footer.style.backgroundColor = '#34495e'; // Original footer color
    }
  });

  // Adding a smooth fade transition for the order button appearance
  const orderButton = document.querySelector('.order-btn');
  setTimeout(function () {
    orderButton.style.opacity = 1;
    orderButton.style.transition = 'opacity 1s ease-in-out';
  }, 2000);

  // Slide-in animation for the feature buttons
  const optionButtons = document.querySelectorAll('.option-btn');
  optionButtons.forEach(button => {
    button.style.transform = 'translateX(-100px)';
    button.style.opacity = 0;
    setTimeout(() => {
      button.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      button.style.transform = 'translateX(0)';
      button.style.opacity = 1;
    }, 500);
  });

  // Add a background pulse effect to the navbar when hovered
  navbar.addEventListener('mouseover', function () {
    navbar.style.animation = 'pulse 1.5s infinite';
  });
  navbar.addEventListener('mouseout', function () {
    navbar.style.animation = 'none';
  });

  // Add an interactive animation to the logo when clicked
  const logo = document.querySelector('.owner-info h2');
  logo.addEventListener('click', function () {
    this.style.transition = 'transform 0.3s ease';
    this.style.transform = 'rotate(360deg)';
    setTimeout(() => {
      this.style.transform = 'rotate(0deg)';
    }, 300);
  });

  // Animation for the gallery items on hover
  galleryItems.forEach(item => {
    item.addEventListener('mouseover', function () {
      item.querySelector('img').style.transform = 'scale(1.1)';
      item.querySelector('img').style.transition = 'transform 0.3s ease';
      item.querySelector('.item-info').style.opacity = 1;
      item.querySelector('.item-info').style.transition = 'opacity 0.3s ease';
    });
    item.addEventListener('mouseout', function () {
      item.querySelector('img').style.transform = 'scale(1)';
      item.querySelector('.item-info').style.opacity = 0;
    });
  });

  // Create an animated progress bar for sales report
  const salesReport = document.querySelector('.sales-report');
  const progressBar = document.createElement('div');
  progressBar.style.height = '10px';
  progressBar.style.backgroundColor = '#00796b';
  progressBar.style.width = '0';
  salesReport.appendChild(progressBar);
  setTimeout(() => {
    progressBar.style.transition = 'width 2s ease';
    progressBar.style.width = '100%';
  }, 500);

  // Contact form popup animation
  const contactButton = document.querySelector('.contact-btn');
  contactButton.addEventListener('click', function () {
    const contactForm = document.querySelector('.contact-form');
    contactForm.style.display = 'block';
    contactForm.style.transform = 'scale(0)';
    contactForm.style.transition = 'transform 0.5s ease';
    setTimeout(() => {
      contactForm.style.transform = 'scale(1)';
    }, 100);
  });

  // Smooth fading effect for the footer
  const footerContainer = document.querySelector('.footer');
  footerContainer.style.opacity = 0;
  footerContainer.style.transition = 'opacity 1s ease-in-out';
  setTimeout(() => {
    footerContainer.style.opacity = 1;
  }, 2000);

  // Scroll reveal for each section
  const sections = document.querySelectorAll('.container section');
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
    setTimeout(() => {
      section.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }, 300);
  });

  // Dropdown effect for services list
  const servicesList = document.querySelector('.services-list');
  const servicesToggle = document.querySelector('.services-toggle');
  servicesToggle.addEventListener('click', function () {
    if (servicesList.style.display === 'none' || servicesList.style.display === '') {
      servicesList.style.display = 'block';
      servicesList.style.animation = 'fadeIn 0.5s forwards';
    } else {
      servicesList.style.display = 'none';
    }
    
  });

  // Parallax effect for background
  window.addEventListener('scroll', function () {
    const background = document.querySelector('.container');
    const offset = window.scrollY * 0.5;
    background.style.backgroundPositionY = `${offset}px`;
  });


  // Animation for service box text when hovered
  const serviceBoxText = document.querySelectorAll('.service-box p');
  serviceBoxText.forEach(text => {
    text.addEventListener('mouseover', function () {
      text.style.transform = 'translateY(-5px)';
      text.style.transition = 'transform 0.3s ease';
    });

    text.addEventListener('mouseout', function () {
      text.style.transform = 'translateY(0)';
    });

  });

  // Add a hover effect for footer links
  const footerLinks = document.querySelectorAll('.footer a');
  footerLinks.forEach(link => {
    link.addEventListener('mouseover', function () {
      link.style.color = '#1e88e5';
      link.style.transition = 'color 0.3s ease';
    });

    link.addEventListener('mouseout', function () {
      link.style.color = '';
    });

  });

  // Scroll effect for the order button
  const orderBtn = document.querySelector('.order-btn');
  orderBtn.addEventListener('mouseover', function () {
    orderBtn.style.backgroundColor = '#0288d1';
    orderBtn.style.transition = 'background-color 0.3s ease';
  });
  orderBtn.addEventListener('mouseout', function () {
    orderBtn.style.backgroundColor = '';
  });

  // Input field focus effect
  const inputFields = document.querySelectorAll('input, textarea');
  inputFields.forEach(input => {
    input.addEventListener('focus', function () {
      this.style.borderColor = '#00796b';
      this.style.transition = 'border-color 0.3s ease';
    });

    input.addEventListener('blur', function () {
      this.style.borderColor = '';
    });
  });

});
