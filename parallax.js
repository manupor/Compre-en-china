document.addEventListener('DOMContentLoaded', () => {
  const heroBg = document.querySelector('.hero-bg');
  const heroOverlay = document.querySelector('.hero-overlay');
  const heroContent = document.querySelector('.hero-content');
  const logoHero = document.querySelector('.logo-hero');
  const benefitCards = document.querySelectorAll('.benefit-card');

  function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
  }

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = heroBg.offsetHeight || 650;
    const progress = clamp(scrollY / heroHeight, 0, 1);

    // Parallax background con movimiento más grande
    if (heroBg) {
      heroBg.style.backgroundPosition = `center ${scrollY * 0.55}px`;
      heroBg.style.filter = `brightness(${1 - progress * 0.25}) blur(${progress * 2.5}px)`;
      heroBg.style.transform = `scale(${1 + progress * 0.08})`;
    }

    // Overlay: oscurece según scroll
    if (heroOverlay) {
      heroOverlay.style.background = 
        `linear-gradient(120deg, rgba(19,16,25,${0.14 + progress * 0.34}), rgba(22,30,58,${0.11 + progress * 0.41}) 80%)`;
    }

    // Logo parallax (sube y escala, se desvanece suave)
    if (logoHero) {
      logoHero.style.transform =
        `translateY(${scrollY * 0.22}px) scale(${1 - progress * 0.17})`;
      logoHero.style.opacity = `${1 - progress * 1.2}`;
    }

    // Hero content (texto): se mueve arriba y fade out más suave
    if (heroContent) {
      heroContent.style.transform = `translateY(${scrollY * 0.12}px)`;
      heroContent.style.opacity = `${1 - progress * 0.70}`;
    }

    // Fade in de los benefit-cards
    benefitCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 70) {
        card.classList.add('visible');
      }
    });
  });

  // Trigger la animación al cargar
  window.dispatchEvent(new Event('scroll'));
});
