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
  