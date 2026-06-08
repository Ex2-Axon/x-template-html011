function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth' });
}

function setActiveNavigation() {
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    const offset = window.scrollY + 120;
    document.querySelectorAll('section[id]').forEach(section => {
      const rect = section.getBoundingClientRect();
      const top = section.offsetTop;
      const link = document.querySelector(`.nav-links a[href="#${section.id}"]`);
      if (!link) return;
      if (offset >= top && offset < top + section.offsetHeight) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setActiveNavigation();
});
