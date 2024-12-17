// Bento Box Object w/ properties; Empty strings to be filled later
let currentBentoBox = {
  sandwich: "",
  drink: "",
  snack: "",
  fruit: ""
};

// Update Bento Box
function updateBentoBox(category, index) {
  currentBentoBox[category] = food[category].values[index];  // Pairs w/ lines 47-53; category = equivalent id value; ie. sandwich, fruit, drink, snack; Collects data f/ images.js
  console.log(currentBentoBox);
}

// Generic Nav Logic
function navigateCarousel(carouselElement, imagesArray, currentIndex, direction) {  // Parameters apply values f/ variables.js objects & arrays; Same logic applies to all unique carousels
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = imagesArray.length - 1;
  } else if (currentIndex >= imagesArray.length) {
    currentIndex = 0;
  }
  carouselElement.style.backgroundImage = `url('${imagesArray[currentIndex]}')`;
  return currentIndex;
}

// Helper function to add event listeners
function addNavListeners(prevButton, nextButton, carouselElement, imagesArray, currentIndex, category) {  // Adds prevButton & nextButton logic to already existing parameters
  prevButton.addEventListener('click', () => {
    currentIndex = navigateCarousel(carouselElement, imagesArray, currentIndex, -1);
    updateBentoBox(category, currentIndex);
  });
  nextButton.addEventListener('click', () => {
    currentIndex = navigateCarousel(carouselElement, imagesArray, currentIndex, 1);
    updateBentoBox(category, currentIndex);
  });
  return currentIndex;
}

// Initial Setup
function setInitialBackgroundImage(carouselElement, imagesArray, category) {
  carouselElement.style.backgroundImage = `url('${imagesArray[0]}')`;
  updateBentoBox(category, 0); // Set initial value for currentBentoBox
}

// Set initial background images and add event listeners for all carousels
Object.keys(carouselElements).forEach(id => {  // Object.keys + forEach; converts values of carouselElements id into keys & iterates over each value; ie. sandwich, snack, fruit, drink
  const { carousel, prev, next, index } = carouselElements[id];
  const imagesArray = food[id].images;

  setInitialBackgroundImage(carousel, imagesArray, id); // Pass category to setInitialBackgroundImage
  carouselElements[id].index = addNavListeners(prev, next, carousel, imagesArray, index, id);
});