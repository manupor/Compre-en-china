// Parallax real usando la capa .hero-bg
document.addEventListener('DOMContentLoaded', () => {
  const heroBg = document.querySelector('.hero-bg');
  const heroContent = document.querySelector('.hero-content');
  const logoHero = document.querySelector('.logo-hero');
  const benefitCards = document.querySelectorAll('.benefit-card');

  if (!heroBg) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    // Efecto parallax para la imagen de fondo real
    heroBg.style.backgroundPosition = `center ${scrollY * 0.32}px`;

    // Parallax suave para el contenido hero
    if (heroContent) {
      heroContent.style.transform = `translateY(${scrollY * 0.10}px)`;
      heroContent.style.opacity = `${1 - Math.min(scrollY / 650, 0.16)}`;
    }
    if (logoHero) {
      logoHero.style.transform = `translateY(${scrollY * 0.06}px) scale(${1 - scrollY / 6500})`;
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
