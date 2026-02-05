const menuButton = document.createElement('button');
menuButton.classList.add('mobile-menu-toggle');
menuButton.setAttribute('aria-label', 'Toggle menu');
document.querySelector('.header > .container').prepend(menuButton);

const nav = document.querySelector('.nav');
const backdrop = document.createElement('div');
backdrop.classList.add('mobile-menu-backdrop');
document.body.appendChild(backdrop);

menuButton.addEventListener('click', () => {
    nav.classList.toggle('active');
    backdrop.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

backdrop.addEventListener('click', () => {
    nav.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.classList.remove('no-scroll');
});
