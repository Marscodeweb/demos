// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('header nav.links');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.textContent = open ? 'Close' : 'Menu';
  });
}
// Contact form (preview only: nothing is sent)
const form = document.getElementById('quote');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('sent').hidden = false;
});
// Copy buttons
document.querySelectorAll('.copy').forEach(b => b.addEventListener('click', () => {
  const t = b.dataset.copy;
  const p = navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject();
  p.then(() => { b.textContent = 'Copied'; }, () => { b.textContent = t; })
   .finally(() => setTimeout(() => { b.textContent = 'Copy'; }, 1800));
}));
// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
