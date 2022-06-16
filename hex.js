const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
// #f15025
const btn = document.getElementById('btn');
const color = document.querySelector('.color'); //selection

btn.addEventListener('click', function () {
  let hexColor = '#'; //call back function for button response.
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber]; //+ to add random number at each iteration
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor; //generate simple hex color on click each time.
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
