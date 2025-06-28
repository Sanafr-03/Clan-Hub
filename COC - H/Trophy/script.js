const slider = document.querySelector('.slider');
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');
const cards = document.querySelectorAll('.card');

let index = 0;
const cardWidth = cards[0].offsetWidth + 8; // Card width + margin
const totalCards = cards.length;

// Function to update slider position
const updateSlider = () => {
  slider.style.transform = `translateX(-${index * cardWidth}px)`;
};

// Handle right button click
rightButton.addEventListener('click', () => {
  moveToNextSlide();
});

// Handle left button click
leftButton.addEventListener('click', () => {
  moveToPreviousSlide();
});

// Function to move to the next slide
const moveToNextSlide = () => {
  index++;
  if (index >= totalCards) {
    index = 0; // Loop back to the start
  }
  updateSlider();
};

// Function to move to the previous slide
const moveToPreviousSlide = () => {
  index--;
  if (index < 0) {
    index = totalCards - 1; // Loop back to the end
  }
  updateSlider();
};


// Auto-slide every 5 seconds
let autoSlideInterval = setInterval(() => {
  moveToNextSlide();
}, 5000);

// Pause auto-slide on button click or touch interaction
const resetAutoSlide = () => {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    moveToNextSlide();
  }, 8000);
};

leftButton.addEventListener('click', resetAutoSlide);
rightButton.addEventListener('click', resetAutoSlide);
slider.addEventListener('touchstart', resetAutoSlide);


document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const carouselItems = document.querySelectorAll(".carousel-item");

  // Ensure the script only applies to mobile devices
  if (window.innerWidth <= 768) {
    let currentIndex = 0;

    // Disable auto-slide by overriding any timers or intervals
    let interval = window.setInterval(() => {}, 0); // Clear all existing intervals
    while (interval--) {
      clearInterval(interval);
    }

    // Function to set the active item
    function setActiveItem(index) {
      carouselItems.forEach((item, i) => {
        if (i === index) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }

    // Set the initial active item
    setActiveItem(currentIndex);

    // Prevent sliding on swipe or touch
    carousel.addEventListener("touchstart", (event) => {
      event.preventDefault();
    });

    carousel.addEventListener("touchmove", (event) => {
      event.preventDefault();
    });

    carousel.addEventListener("touchend", (event) => {
      event.preventDefault();
    });

    // Optional: Add a message or log for confirmation
    console.log("Mobile carousel is now static with no buttons or auto-slide.");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Check if the device is mobile (screen width <= 480px)
  if (window.innerWidth <= 480) {
    // Remove left and right buttons if they exist
    const leftButton = document.querySelector(".left-btn");
    const rightButton = document.querySelector(".right-btn");
    if (leftButton) leftButton.remove();
    if (rightButton) rightButton.remove();

    // Disable auto-slide by clearing any existing intervals
    let interval = window.setInterval(() => {}, 0); // Get all intervals
    while (interval--) {
      clearInterval(interval);
    }

    console.log("Mobile-only: Left and right buttons removed, auto-slide disabled.");
  }
});
