const output = document.querySelector('span#name-output');

document.querySelector('input#name-input').addEventListener('input', function(){
    output.textContent = this.value || 'Anonymous';
});