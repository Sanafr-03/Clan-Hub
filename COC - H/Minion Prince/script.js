// Placeholder for dynamic interactions (optional)
document.addEventListener('DOMContentLoaded', () => {
    console.log('Character cards loaded successfully!');
});
  
  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinksWrapper = document.querySelector('.nav-links-wrapper');
  
    hamburger.addEventListener('click', () => {
      navLinksWrapper.classList.toggle('active'); // Toggle the "active" class
    });
  });
  

// Initialize Swiper for Section 1
// Swiper initialization
// Initialize Swiper with stacked effect
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.mySwiper', {
    loop: true, // Infinite loop
    autoplay: {
      delay: 5000, // Change every 5 seconds
      disableOnInteraction: false, // Continue autoplay even after interaction
    },
    effect: 'cards', // Enable cards effect
    grabCursor: true, // Enable grab cursor
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

// Slider Functionality for Section 2
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slider-item');
  const nextButton = document.querySelector('.slider-button-next');
  const prevButton = document.querySelector('.slider-button-prev');

  let currentIndex = 0;

  // Function to update the slider's position
  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Function to go to the next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
    updateSlider();
  }

  // Function to go to the previous slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop back to the last slide
    updateSlider();
  }

  // Add event listeners for navigation buttons
  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);

  // Autoplay functionality
  setInterval(nextSlide, 5000); // Change slide every 5 seconds
});
