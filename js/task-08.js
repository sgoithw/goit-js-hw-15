const form = document.querySelector('.login-form');
const submitForm = function (event) {
    event.preventDefault();
    const data = {
        email: this.elements.email.value,
        password: this.elements.password.value,
    }
    if(Object.values(data).some(value => value === '')) {
        return alert('Please fill in all the fields!');
    }
    console.log(data);
    this.reset();
};
form.addEventListener('submit', submitForm);