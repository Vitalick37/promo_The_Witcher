let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.arrow',
    },
    loop: true,
    breakpoints: {
        540: {
            slidesPerView: 2, 
        }
    },
});

let menuButton = document.querySelector('.menu-button'),
    menu = document.querySelector('.header');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('menu-button-active')
    menu.classList.toggle('header-active');
});
