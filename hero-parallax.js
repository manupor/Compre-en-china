document.addEventListener('DOMContentLoaded', function() {
  const bg = document.querySelector('.heroEffects .bg');
  const shade = document.querySelector('.heroEffects .shade');
  const text = document.querySelector('.heroEffects .text');
  const arrow = document.querySelector('.heroEffects .arrow');

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

    // Valores súper altos para reacción inmediata
    const zoom = 1 + scrollY * 0.004;           // Antes 0.0012-0.0015, ahora 0.004
    const opacity = Math.min(scrollY / 80, 0.82); // Antes /320 o /280, ahora /80
    const marginTop = -scrollY * 1.1;           // Antes 0.44-0.56, ahora 1.1

    if (bg) bg.style.transform = `scale(${zoom})`;
    if (shade) shade.style.opacity = opacity;
    if (text) text.style.marginTop = `${marginTop}px`;
  });
});
