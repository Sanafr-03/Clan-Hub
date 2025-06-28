document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinksWrapper = document.querySelector(".nav-links-wrapper");

  hamburgerMenu.addEventListener("click", () => {
    navLinksWrapper.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
	const timelineItems = document.querySelectorAll(".timeline-item");
  
	const handleScroll = () => {
	  const triggerBottom = window.innerHeight * 0.8;
  
	  timelineItems.forEach((item) => {
		const boxTop = item.getBoundingClientRect().top;
  
		if (boxTop < triggerBottom) {
		  item.classList.add("active");
		} else {
		  item.classList.remove("active");
		}
	  });
};
  
	window.addEventListener("scroll", handleScroll);
  
	// Trigger scroll handler on page load
	handleScroll();
});
document.addEventListener("DOMContentLoaded", () => {
  const gameFeaturesSection = document.querySelector('.game-feature-section');
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.btn-left');
  const btnRight = document.querySelector('.btn-right');
  let currentIndex = 0;
  let sliderStarted = false; // Track if the slider has started

  // Function to check if the section is in the viewport
  function isSectionInView(section) {
    const rect = section.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }

  // Function to update slide classes
  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.remove('active', 'left-1', 'left-2', 'left-3', 'right-1', 'right-2', 'right-3');

      if (index === currentIndex) {
        slide.classList.add('active');
      } else if ((index - currentIndex + slides.length) % slides.length === 1) {
        slide.classList.add('left-1');
      } else if ((index - currentIndex + slides.length) % slides.length === 2) {
        slide.classList.add('left-2');
      } else if ((index - currentIndex + slides.length) % slides.length === 3) {
        slide.classList.add('left-3');
      } else if ((currentIndex - index + slides.length) % slides.length === 1) {
        slide.classList.add('right-1');
      } else if ((currentIndex - index + slides.length) % slides.length === 2) {
        slide.classList.add('right-2');
      } else if ((currentIndex - index + slides.length) % slides.length === 3) {
        slide.classList.add('right-3');
      }
    });
  }

  // Slide navigation functions
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
  }

  // Event listeners for buttons
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  // Scroll handler to check section visibility
  function checkSectionInView() {
    if (!sliderStarted && isSectionInView(gameFeaturesSection)) {
      sliderStarted = true;
      updateSlides(); // Initialize the slider
      setInterval(nextSlide, 4000); // Start automatic sliding
    }
  }

  // Trigger the checkSectionInView handler on page load and scroll
  window.addEventListener('scroll', checkSectionInView);
  checkSectionInView(); // Ensure it runs on load
});

document.addEventListener('DOMContentLoaded', () => {
  const textItems = document.querySelectorAll('.slider-text li');
  const imageContainers = document.querySelectorAll('.slider-images2 .image-container');
  const line = document.querySelector('.connecting-line');

  // Show the first container by default
  imageContainers[0].classList.add('active-container');

  textItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      // Hide all containers
      imageContainers.forEach(container => container.classList.remove('active-container'));

      // Show the corresponding container
      const targetContainer = imageContainers[index];
      targetContainer.classList.add('active-container');

      // Add glow effect
      const hoverBorder = targetContainer.querySelector('.hover-border');
      hoverBorder.classList.add('glow');

      // Position and animate the connecting line
      const textRect = item.getBoundingClientRect();
      const containerRect = targetContainer.getBoundingClientRect();
      const lineTop = textRect.top + textRect.height / 2;
      const lineLeft = textRect.right;
      const lineWidth = containerRect.left - textRect.right;

      line.style.top = `${lineTop}px`;
      line.style.left = `${lineLeft}px`;
      line.style.width = `${lineWidth}px`;
      line.style.transform = 'scaleX(1)';
    });

    item.addEventListener('mouseleave', () => {
      // Hide the connecting line
      line.style.transform = 'scaleX(0)';

      // Remove glow effect
      imageContainers.forEach(container => {
        const hoverBorder = container.querySelector('.hover-border');
        hoverBorder.classList.remove('glow');
      });
    });
  });
});

// Troop and Defense stats
const troops = {
  barbarian: { attack: 8, health: 45, image: 'images/barbarian.png' },
  archer: { attack: 7, health: 20, image: 'images/Archercopy.png' },
  giant: { attack: 22, health: 300, image: 'images/Giant.png' },
  wizard: { attack: 75, health: 75, image: 'images/wizard.png' },
  hogrider: { attack: 60, health: 270, image: 'images/Hogrider.png' },
  valkyrie: { attack: 69.2, health: 750, image: 'images/Valkyrie.png' },
  golem: { attack: 84, health: 5100, image: 'images/Golem.png' },
  witch: { attack: 70, health: 300, image: 'images/Witch.png' },
};

const defenses = {
  cannon: { attack: 7.2, health: 420, image: 'images/Cannon.png' },
  archerTower: { attack: 11, health:380 , image: 'images/Archertower.png' },
  mortar: { attack: 20, health: 400, image: 'images/Mortar.png' },
  wizardtower: { attack: 14.3, health: 620, image: 'images/Wizardtower.png' },
  hiddentesla: { attack: 20.4, health: 600, image: 'images/Hiddentesla.png' },
  bombtower: { attack: 26.4, health: 650, image: 'images/Bombtower.png' },
  xbow: { attack: 7.68, health: 1500, image: 'images/Xbow.png' },
  
};

// Battle Simulation
function simulateBattle() {
  const troopSelect = document.getElementById("troop").value;
  const defenseSelect = document.getElementById("defense").value;

  const troop = troops[troopSelect];
  const defense = defenses[defenseSelect];

  // Damage calculations
  const troopHitsToDestroy = Math.ceil(defense.health / troop.attack);
  const defenseHitsToDestroy = Math.ceil(troop.health / defense.attack);

  let resultMessage = "";
  let winnerImage = "";

  if (troopHitsToDestroy < defenseHitsToDestroy) {
    resultMessage = `Victory! ${troopSelect.charAt(0).toUpperCase() + troopSelect.slice(1)} wins in ${troopHitsToDestroy} hits.`;
    winnerImage = troop.image;
  } else if (troopHitsToDestroy > defenseHitsToDestroy) {
    resultMessage = `Defeat! ${defenseSelect.charAt(0).toUpperCase() + defenseSelect.slice(1)} wins in ${defenseHitsToDestroy} hits.`;
    winnerImage = defense.image;
  } else {
    resultMessage = "It's a tie! Both troop and defense are equally matched.";
  }

  // Update result
  document.getElementById("battleResult").textContent = resultMessage;

  // Display winner image
  const winnerImageDiv = document.getElementById("winnerImage");
  if (winnerImage) {
    winnerImageDiv.style.backgroundImage = `url(${winnerImage})`;
    winnerImageDiv.style.display = "block";

    // Remove glow effect after 5 seconds
    setTimeout(() => {
      winnerImageDiv.classList.add("stop-effect");
    }, 5000);
  } else {
    winnerImageDiv.style.display = "none";
  }
}

// Event Listener
document.getElementById("simulateBtn").addEventListener("click", simulateBattle);