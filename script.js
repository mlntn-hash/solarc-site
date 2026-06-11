/* CTA form */
document.getElementById('ctaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const inp = document.getElementById('phoneInput');
    const msg = document.getElementById('successMsg');
    const digits = inp.value.replace(/\D/g, '');
    if (digits.length < 10) {
        inp.style.borderColor = '#e84040';
        setTimeout(() => { inp.style.borderColor = ''; }, 1500);
        return;
    }
    inp.classList.add('ok');
    msg.style.display = 'block';
    setTimeout(() => {
        inp.classList.remove('ok');
        inp.value = '';
        msg.style.display = 'none';
    }, 3000);
});

/* Smooth scroll with nav offset */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
    });
});

/* Nav opacity on scroll */
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 60) {
        nav.style.background = 'rgba(255, 255, 255, 0.96)';
        nav.style.borderBottom = '1px solid #E2DDD5';
        nav.style.boxShadow = '0 2px 16px rgba(13, 31, 45, 0.08)';
        nav.style.backdropFilter = 'blur(18px)';
        nav.style.webkitBackdropFilter = 'blur(18px)';
    } else {
        nav.style.background = 'rgba(247, 243, 235, 0)';
        nav.style.borderBottom = '1px solid transparent';
        nav.style.boxShadow = 'none';
        nav.style.backdropFilter = 'blur(0px)';
        nav.style.webkitBackdropFilter = 'blur(0px)';
    }
}, { passive: true });

/* Trigger on load to set initial state */
window.dispatchEvent(new Event('scroll'));
