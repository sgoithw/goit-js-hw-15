const fontSizeInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
const changeFontSize = function () {
    text.style.fontSize = `${fontSizeInput.value}px`;
}

fontSizeInput.addEventListener('input', changeFontSize);