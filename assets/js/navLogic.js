// Sandwich Main Nav Logic
function sandwichNav(direction) {
  sandwichIndex = sandwichIndex + direction;
  if (sandwichIndex < 0) {
    sandwichIndex = sandwichImages.length - 1;
  } else if (sandwichIndex > sandwichImages.length - 1) {
    sandwichIndex = 0;
  }
    sandwichCurrentImage = sandwichImages[sandwichIndex];
    sandwichCarousel.style.backgroundImage = `url('${sandwichCurrentImage}')`;
};

// Snack Main Nav Logic
function snackNav(direction) {
  snackIndex = snackIndex + direction;
  if (snackIndex < 0) {
    snackIndex = snackImages.length -1;
  } else if (snackIndex > snackImages.length -1) {
    snackIndex = 0;
  }
  snackCurrentImage = snackImages[snackIndex]
  snackCarousel.style.backgroundImage = `url('${snackCurrentImage}')`;
};

// Fruit Main Nav Logic
function fruitNav(direction) {
  fruitIndex = fruitIndex + direction;
  if (fruitIndex < 0) {
    fruitIndex = fruitImages.length -1;
  } else if (fruitIndex > fruitImages.length -1) {
    fruitIndex = 0;
  }
  fruitCurrentImage = fruitImages[fruitIndex]
  fruitCarousel.style.backgroundImage = `url('${fruitCurrentImage}')`;
};

// Drink Main Nav Logic
function drinkNav(direction) {
  drinkIndex = drinkIndex + direction;
  if (drinkIndex < 0) {
    drinkIndex = drinkImages.length -1;
  } else if (drinkIndex > drinkImages.length -1) {
    drinkIndex = 0;
  }
  drinkCurrentImage = drinkImages[drinkIndex]
  drinkCarousel.style.backgroundImage = `url('${drinkCurrentImage}')`;
};
