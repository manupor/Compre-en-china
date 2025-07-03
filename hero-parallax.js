document.addEventListener('DOMContentLoaded', function () {
  const shade = document.querySelector('.heroEffects .shade');
  const bg = document.querySelector('.heroEffects .bg');
  const text = document.querySelector('.heroEffects .text');

  window.addEventListener('scroll', function () {
    const scrolled = window.scrollY;
    // Opacidad de la sombra: desde 0 hasta máx 0.8 (cuando scroll=500px)
    let shadeOpacity = Math.min(scrolled / 500, 0.8);
    shade.style.opacity = shadeOpacity;

    // Zoom suave del fondo (por cada 1000px de scroll sube un 0.4x)
    let scale = 1 + scrolled * 0.0004;
    bg.style.transform = `scale(${scale})`;

    // Margen superior del texto: sube lento con scroll
    let mt = scrolled * 0.2;
    text.style.marginTop = `-${mt + 1}px`;
  });
});
