// Sandwich Next & Prev + Start
sandwichNext.addEventListener(`click`, function (event) {
    event.stopPropagation();
    sandwichNav(1);
});

sandwichPrev.addEventListener(`click`, function (event) {
    event.stopPropagation();
    sandwichNav(-1);
});

sandwichNav(0);

// Snack Next & Prev + Start
snackNext.addEventListener(`click`, function (event) {
    event.stopPropagation();
    snackNav(1);
});

snackPrev.addEventListener(`click`, function (event) {
    event.stopPropagation();
    snackNav(-1);
});

snackNav(0);
// Fruit Next & Prev + Start
fruitNext.addEventListener(`click`, function (event) {
    event.stopPropagation();
    fruitNav(1);
});

fruitPrev.addEventListener(`click`, function (event) {
    event.stopPropagation();
    fruitNav(-1);
});

fruitNav(0);
// Drink Next & Prev + Start
drinkNext.addEventListener(`click`, function (event) {
    event.stopPropagation();
    drinkNav(1);
});

drinkPrev.addEventListener(`click`, function (event) {
    event.stopPropagation();
    drinkNav(-1);
});

drinkNav(0);

lunchBtn.addEventListener(`click`, function (event) {
    event.stopPropagation();
    localStorage.setItem('currentBentoBox', JSON.stringify(currentBentoBox));
    packedLunchBox()
});

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
}