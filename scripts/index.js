const form = document.querySelector('.login__form');

form.addEventListener('submit', () => {
    if (!form.checkValidity()) return;
});