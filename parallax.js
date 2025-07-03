document.addEventListener('DOMContentLoaded', () => {
  const avion = document.getElementById('avion');
  const montacargas = document.getElementById('montacargas');
  const skyline = document.getElementById('skyline');
  const logo = document.getElementById('logo');
  const text = document.getElementById('text');
  const cloud1 = document.getElementById('clouds_1');
  const cloud2 = document.getElementById('clouds_2');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;

    // Avión baja y escala
    if(avion) avion.style.transform = `translate(-50%, ${10 + y * 0.19}px) scale(${1.1 - y/2600})`;

    // Montacargas se mueve hacia la derecha y sube
    if(montacargas) montacargas.style.transform = `translateY(-${y * 0.08}px) translateX(${y * 0.32}px)`;

    // Skyline sube (aparece)
    if(skyline) skyline.style.transform = `translateY(-${y * 0.23}px)`;

    // Logo aparece cuando skyline visible y escala
    if(logo) {
      if(y > 110) {
        logo.style.opacity = '1';
        logo.style.transform = `translateX(-50%) scale(${1.08 - y/2600})`;
      } else {
        logo.style.opacity = '0';
      }
    }

    // Texto aparece después de 120px de scroll
    if(text) {
      if(y > 120) {
        text.style.opacity = '1';
      } else {
        text.style.opacity = '0';
      }
    }

    // Nubes parallax horizontal
    cloud1 && (cloud1.style.transform = `translateX(${y * 0.3}px)`);
    cloud2 && (cloud2.style.transform = `translateX(-${y * 0.3}px)`);
  });

  // Trigger para aparecer logo/texto en reload
  window.dispatchEvent(new Event('scroll'));
});
