// Animaciones de scroll para el contenido inicial y las secciones
document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.querySelector('.hero-content');
  const logoHero = document.querySelector('.logo-hero');
  const benefitCards = document.querySelectorAll('.benefit-item');
  const fadeEls = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  fadeEls.forEach(el => observer.observe(el));

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (heroContent) {
      heroContent.style.transform = `translateY(${scrollY * 0.10}px)`;
      heroContent.style.opacity = `${1 - Math.min(scrollY / 650, 0.16)}`;
    }
    if (logoHero) {
      logoHero.style.transform = `translateY(${scrollY * 0.06}px) scale(${1 - scrollY / 6500})`;
    }

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
