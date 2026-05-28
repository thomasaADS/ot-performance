// O.T Performance — interactions

// 1. Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// 2. Contact form -> success state
const form = document.getElementById('lead-form');
const success = document.getElementById('form-success');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    success.classList.add('show');
    success.scrollIntoView ? null : null; // avoid scrollIntoView per guidelines
  });
}

// 3. Year stamp
const y = document.getElementById('doc-year');
if (y) y.textContent = new Date().getFullYear();
