const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const elementOfMenu of toggle) {
    elementOfMenu.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
}

const links = document.querySelectorAll('nav ul li a');
for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show');
    });
}

const header = document.querySelector("#header");
const navHeader = header.offsetHeight;


window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeader) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll')
    }
});


const backToTop = document.querySelector(".back-to-top");

window.addEventListener('scroll', function () {
    if (window.scrollY >= 560) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show')
    }
});

/* usando a lib swiper */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true,
        }
    }
});

/* usando lib scrollreveal*/

const scrollEffect = ScrollReveal({
    distance: '30px',
    reset: true,
    origin: 'top',
    duration: 700,

});

scrollEffect.reveal(`
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#depoiments .testimonials, #depoiments .testimonials
#contact .text, #contact .links
`, { interval: 100 })

/* REALCE AO FAZER SCROLL */
const sections = document.querySelectorAll('section[id]');

function activeMenuAtCurrentSection() {

    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

    for (const section of sections) {
        const sectionId = section.getAttribute("id");
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + sectionHeight;

        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionBottom;

        const menuOption = document.querySelector('nav ul li a[href*=' + sectionId + ']');
        if (checkpointStart && checkpointEnd) {
            menuOption.classList.add('active');
        } else {
            menuOption.classList.remove('active');
        }

    }
}

window.addEventListener('scroll', function () {
    activeMenuAtCurrentSection();
});