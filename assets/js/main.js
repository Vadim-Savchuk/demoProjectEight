const body = document.querySelector('body');

// Slider 
const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 40,
    slidesPerGroup: 2,

    keyboard: {
        enable: true,
    },

    pagination: {
        el: '.slider__people',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                '/' +
                '<span class="' + totalClass + '"></span>' +
                ' People'
        }
    },

    navigation: {
        nextEl: '.slider__button-next',
        prevEl: '.slider__button-prev ',
    },

    scrollbar: {
        el: '.slider__row',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
        }
    }
});

// Nav
function handlerMenu() {
    const burgerButton = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav__link');

    burgerButton.addEventListener('click', () => {
        burgerButton.classList.toggle('active');

        if (burgerButton.classList.contains('active')) {
            nav.classList.add('active');
            body.classList.add('hiden');
        } else {
            nav.classList.remove('active');
            body.classList.remove('hiden');
        }

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove('active');
                body.classList.remove('hiden');
                burgerButton.classList.remove('active');
            })
        });
    });
}
handlerMenu();

//Active menu
function activeMenu() {
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('.nav__link');

    for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            const sectionId = section.getAttribute('id');
            const matchingLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

            if (matchingLink) {
                menuLinks.forEach((link) => {
                    link.classList.remove('nav__link--active');
                });
                matchingLink.classList.add('nav__link--active');
            }

        } else {
            break;
        }
    }
}
window.addEventListener('scroll', activeMenu);

// Header fixed
function headerFixed() {
    const header = document.querySelector('.header');

    window.onscroll = () => {
        if (window.scrollY > 200) {
            header.classList.add('sticky')
        } else {
            header.classList.remove('sticky')
        }
    }
}
headerFixed();