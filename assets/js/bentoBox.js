// Display Bento Box on Lunch Button Click
lunchBtn.addEventListener('click', () => {
  localStorage.setItem('currentBentoBox', JSON.stringify(currentBentoBox));
  packedLunchBox();
});
    
// Function to Display Packed Lunch Box
const packedLunchBox = () => {
  const packedLunchWrapper = document.getElementById('packedLunch');
  const packedLunchSandwich = document.createElement('p');
  const packedLunchSnack = document.createElement('p');
  const packedLunchDrink = document.createElement('p');
  const packedLunchFruit = document.createElement('p');
    
  const bentoBoxItems = JSON.parse(localStorage.getItem('currentBentoBox'));
    
  packedLunchSandwich.innerText = bentoBoxItems.sandwich.replaceAll('-', ' ');
  packedLunchSnack.innerText = bentoBoxItems.snack.replaceAll('-', ' ');
  packedLunchDrink.innerText = bentoBoxItems.drink.replaceAll('-', ' ');
  packedLunchFruit.innerText = bentoBoxItems.fruit.replaceAll('-', ' ');
    
  packedLunchWrapper.innerHTML = "";
  packedLunchWrapper.append(packedLunchSandwich, packedLunchSnack, packedLunchDrink, packedLunchFruit);
};