const counter = document.querySelector('#value');
const actions = document.querySelectorAll('button[data-action]');
let counterValue = counter.textContent;

actions.forEach(action => {
    action.addEventListener('click', () => {
        if (action.dataset.action === 'increment') {
            counterValue++;
        } else if (action.dataset.action === 'decrement') {
            counterValue--;
        }
        counter.textContent = counterValue;
    });
});