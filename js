// Parallax elegante para el hero
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-section');
  const heroContent = document.querySelector('.hero-content');
  const logoHero = document.querySelector('.logo-hero');

  // Para performance, solo escucha el scroll si hay .hero-section
  if (!hero) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    // Parallax fondo: mueve el background-position-y en función del scroll
    // Se puede ajustar el factor (0.4) para hacerlo más/menos pronunciado
    hero.style.backgroundPosition = `center ${scrollY * 0.4}px`;

    // Parallax suave en contenido (texto/logo): baja ligeramente al hacer scroll
    if (heroContent) {
      heroContent.style.transform = `translateY(${scrollY * 0.15}px)`;
      heroContent.style.opacity = `${1 - Math.min(scrollY / 650, 0.25)}`;
    }
    // Parallax suave solo en logo (más sutil)
    if (logoHero) {
      logoHero.style.transform = `translateY(${scrollY * 0.09}px) scale(${1 - scrollY / 6000})`;
      logoHero.style.boxShadow = `0 ${6 + scrollY * 0.03}px ${24 + scrollY * 0.04}px rgba(231,30,38,0.09)`;
    }
  });
});
