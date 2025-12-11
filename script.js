// script.js
document.addEventListener('DOMContentLoaded', () => {
  const ham = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  if (!ham || !nav) return;

  // Toggle nav open/close
  ham.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('open');
    ham.classList.toggle('is-open'); // optional for styling the burger
  });

  // Close when a nav link is clicked
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      ham.classList.remove('is-open');
    });
  });

  // Close if clicking/tapping outside the nav
  document.addEventListener('click', (ev) => {
    if (!nav.contains(ev.target) && !ham.contains(ev.target)) {
      nav.classList.remove('open');
      ham.classList.remove('is-open');
    }
  });

  // Optional: close on Escape key
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') {
      nav.classList.remove('open');
      ham.classList.remove('is-open');
    }
  });
});
