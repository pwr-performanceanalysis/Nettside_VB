
// Logic for 
 - Navbar
document.addEventListener('DOMContentLoaded', () => {
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        if (mobileNavToggle) {
            mobileNavToggle.addEventListener('click', () => {
                document.body.classList.toggle('mobile-nav-open');
            });
        }
    });

// Logic for 
 - Hero
// JavaScript-funksjonalitet kan legges til her

// Logic for 
 - Features
document.addEventListener('DOMContentLoaded', () => {
            const swiper = new Swiper('.swiper', {
                loop: true,
                slidesPerView: 1.1,
                centeredSlides: true,
                spaceBetween: 20,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    769: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                        centeredSlides: false,
                    },
                    1100: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                        centeredSlides: false,
                    }
                }
            });
        });
