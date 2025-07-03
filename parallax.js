// Parallax multilayer Compre en China IG hero
window.addEventListener('DOMContentLoaded', () => {
  const bg = document.getElementById('bg');
  const logo = document.getElementById('logo');
  const cloud1 = document.getElementById('clouds_1');
  const cloud2 = document.getElementById('clouds_2');
  const text = document.getElementById('text');
  const benefitCards = document.querySelectorAll('.benefit-card');

  window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Fondo principal parallax
    bg && (bg.style.transform = `translateY(${value * 0.25}px) scale(${1 + value/2600})`);

    // Logo: sube, escala y fade out
    if (logo) {
      logo.style.transform = `translate(-50%, ${value * 0.18}px) scale(${1 - value/2900})`;
      logo.style.opacity = `${1 - value/450}`;
    }

    // Texto hero: sube y fade
    if (text) {
      text.style.transform = `translateX(-50%) translateY(-${value * 0.22}px)`;
      text.style.opacity = `${1 - value/360}`;
    }

    // Nubes (si quieres más “ambiente”)
    cloud1 && (cloud1.style.transform = `translateX(${value * 0.6}px)`);
    cloud2
