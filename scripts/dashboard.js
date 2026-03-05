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
    const isHidden = $mainNav.hidden;

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

// Modal management
const $modal = document.querySelector('.nav__dialog');
const $form = document.querySelector('.dialog__form');

const $easterEgg = document.querySelector('.easter-egg');

$form.addEventListener('submit', () => {
    if ($easterEgg && $easterEgg.hasAttribute('hidden')) {
        $easterEgg.removeAttribute('hidden');
    }

    const formData = new FormData($form);
    const data = Object.fromEntries(formData.entries());

    const title = data.title;
    const category = data.category;
    const price = Number(data.price).toLocaleString('es-ES');
    const period = data.period;

    const $app = document.querySelector('.app');
    const $newCard = document.createElement('article');
    $newCard.classList.add('card');

    console.log(typeof price,)

    $newCard.innerHTML = `
        <a class="card-link" href="/subscription.html?title=${title}&category=${category}&price=${price}&period=${period}">
            <img class="card-image" src="assets/${title}.webp" alt="Suscripción a ${title}" />
            
            <div class="card-content">
                <div class="card-info">
                    <h2 class="card-title">${title}</h2>
                    <p class="card-category">${category}</p>
                </div>
                <div class="card-pricing">
                    <p class="card-price">${price}€</p>
                    <p class="card-period">${period}</p>
                </div>
            </div>
        </div>
    `;

    $app.append($newCard);
    $form.reset();
});