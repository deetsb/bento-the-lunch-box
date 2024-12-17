// Display Bento Box on Lunch Button Click
lunchButton.addEventListener('click', () => {
  localStorage.setItem('currentBentoBox', JSON.stringify(currentBentoBox));  // Stores currentBentoBox object in localStorage
  packedLunchBox();
});
    
// Function to Display Packed Lunch Box
const packedLunchBox = () => {  // Appends data & changes values "-" into spaces for display w/ modal
  const packedLunchWrapper = document.getElementById('packedLunch');
  const packedLunchSandwich = document.createElement('li');
  const packedLunchSnack = document.createElement('li');
  const packedLunchDrink = document.createElement('li');
  const packedLunchFruit = document.createElement('li');
    
  const bentoBoxItems = JSON.parse(localStorage.getItem('currentBentoBox'));
    
  packedLunchSandwich.innerText = bentoBoxItems.sandwich.replaceAll('-', ' ');
  packedLunchSnack.innerText = bentoBoxItems.snack.replaceAll('-', ' ');
  packedLunchDrink.innerText = bentoBoxItems.drink.replaceAll('-', ' ');
  packedLunchFruit.innerText = bentoBoxItems.fruit.replaceAll('-', ' ');
    
  packedLunchWrapper.innerHTML = "";
  packedLunchWrapper.append(packedLunchSandwich, packedLunchSnack, packedLunchDrink, packedLunchFruit);
};