// Parallax HERO - versión rápida y fluida
document.addEventListener('DOMContentLoaded', function() {
  const bg = document.querySelector('.heroEffects .bg');
  const shade = document.querySelector('.heroEffects .shade');
  const text = document.querySelector('.heroEffects .text');
  const arrow = document.querySelector('.heroEffects .arrow');

  // Opcional: auto scroll con flecha
  if (arrow) {
    arrow.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;

    // Parallax ultra rápido:
    const zoom = 1 + scrollY * 0.0015;           // Sube para más "zoom"
    const opacity = Math.min(scrollY / 280, 0.65); // Sombra aparece más rápido
    const marginTop = -scrollY * 0.56;           // Texto sube más con el scroll

    if (bg) bg.style.transform = `scale(${zoom})`;
    if (shade) shade.style.opacity = opacity;
    if (text) text.style.marginTop = `${marginTop}px`;
  });
});
