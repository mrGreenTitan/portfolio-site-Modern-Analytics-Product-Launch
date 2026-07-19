const navHamburgerMenu = document.getElementById('navHamburgerMenu');
const navMenu = document.getElementById('navMenu');
const navLink = document.getElementById('navLink');
const lineElement = document.getElementById('lineElement');
const footerYear = document.getElementById('footerYear');

const setMenuOpen = (isOpen) => {
    navMenu?.classList.toggle('open', isOpen);
    navLink?.classList.toggle('open', isOpen);
    lineElement?.classList.toggle('open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    navHamburgerMenu?.setAttribute('aria-expanded', String(isOpen));
    navHamburgerMenu?.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
};

navHamburgerMenu?.addEventListener('click', () => {
    const isOpen = navHamburgerMenu.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
});

navMenu?.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
        setMenuOpen(false);
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        setMenuOpen(false);
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
        setMenuOpen(false);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    if (footerYear) {
        footerYear.textContent = String(new Date().getFullYear());
    }

    const sectionsFadeIn = document.querySelectorAll('.fade-in');

    if (!('IntersectionObserver' in window)) {
        sectionsFadeIn.forEach((section) => section.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                currentObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
    });

    sectionsFadeIn.forEach((section) => observer.observe(section));
});
