const form = document.querySelector('.login__form');

form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) return;
});