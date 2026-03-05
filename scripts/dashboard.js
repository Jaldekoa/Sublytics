// Username management
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const user = params.get('user');

    const $username = document.querySelector(".username")
    $username.textContent = user ? `Bienvenido, ${user}` : `Bienvenido`;
});

// Menu management
const $menuBtn = document.querySelector('.btn-menu');
const $mainNav = document.getElementById('main-navigation');

$menuBtn.addEventListener('click', () => {
    const isHidden = mainNav.hidden;

    if (isHidden) {
        $mainNav.hidden = false;
        $menuBtn.textContent = "close";
        $menuBtn.setAttribute('aria-expanded', 'true');
    } else {
        $mainNav.hidden = true;
        $menuBtn.textContent = "menu";
        $menuBtn.setAttribute('aria-expanded', 'false');
    }
});