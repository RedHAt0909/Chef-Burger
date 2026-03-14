document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const navbar = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    let isMenuOpen = false;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('glass', 'py-3');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.remove('glass', 'py-3');
            navbar.classList.add('py-4');
        }
    });

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
            gsap.to(mobileMenu, { opacity: 1, duration: 0.3, ease: 'power2.out' });
            gsap.fromTo(mobileLinks, 
                { y: 20, opacity: 0 }, 
                { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: 'power2.out', delay: 0.1 }
            );
            mobileBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
            document.body.style.overflow = 'hidden';
        } else {
            gsap.to(mobileMenu, { 
                opacity: 0, 
                duration: 0.3, 
                ease: 'power2.in',
                onComplete: () => {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('flex');
                }
            });
            mobileBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
            document.body.style.overflow = '';
        }
        lucide.createIcons();
    };

    mobileBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.parallax-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
            trigger: '.parallax-bg',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    gsap.from('.hero-content > *', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2
    });

    const fadeUpElements = document.querySelectorAll('.gsap-fade-up');
    fadeUpElements.forEach(el => {
        gsap.fromTo(el,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });
});
