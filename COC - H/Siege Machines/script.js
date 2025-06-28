document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector('.hamburger-menu');
  const navLinksWrapper = document.querySelector('.nav-links-wrapper');

  hamburger.addEventListener('click', () => {
    navLinksWrapper.classList.toggle('active'); // Toggle the "active" class
  });
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
});
