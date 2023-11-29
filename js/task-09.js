const colorSpan = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const changeColorAction = function () {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorSpan.textContent = color;
}

changeColorBtn.addEventListener('click', changeColorAction);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}