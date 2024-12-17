// Carousel Configurations: Objects w/ parameters 
const carousels = [
  { id: 'sandwich', carousel: '#sandwichCarousel', prev: '#sandwichPrev', next: '#sandwichNext' },
  { id: 'snack', carousel: '#snackCarousel', prev: '#snackPrev', next: '#snackNext' },
  { id: 'fruit', carousel: '#fruitCarousel', prev: '#fruitPrev', next: '#fruitNext' },
  { id: 'drink', carousel: '#drinkCarousel', prev: '#drinkPrev', next: '#drinkNext' },
];

// Initialize Variables: forEach Loop iterates over carousel object; sends to DOM
const carouselElements = {};
carousels.forEach(({ id, carousel, prev, next }) => {
  carouselElements[id] = {
    carousel: document.querySelector(carousel),
    prev: document.querySelector(prev),
    next: document.querySelector(next),
    index: 0,
  };
});
  
// Lunch Button
const lunchBtn = document.getElementById('lunchBtn');
