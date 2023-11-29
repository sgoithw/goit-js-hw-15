const input = document.querySelector('#validation-input');
const validate = function () { 
    if(this.value.length === Number(input.dataset.length)) {
        this.classList.add('valid');
        this.classList.remove('invalid');
    } else {
        this.classList.add('invalid');
        this.classList.remove('valid');
    }
}

input.addEventListener('blur', validate);