// Placeholder for dynamic interactions (optional)
document.addEventListener('DOMContentLoaded', () => {
    console.log('Character cards loaded successfully!');
});
document.addEventListener("DOMContentLoaded", () => {
    const divs = document.querySelectorAll(".character-animation"); // Select all centered-divs
  
    divs.forEach((div) => {
      const video = div.querySelector(".hover-video");
  
      let isPlaying = false; // Track the playing state for each video
  
      div.addEventListener("click", () => {
        if (isPlaying) {
          video.pause();
          video.currentTime = 0; // Reset video to the start
          isPlaying = false;
        } else {
          video.play();
          isPlaying = true;
        }
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinksWrapper = document.querySelector('.nav-links-wrapper');
  
    hamburger.addEventListener('click', () => {
      navLinksWrapper.classList.toggle('active'); // Toggle the "active" class
    });
  });
  