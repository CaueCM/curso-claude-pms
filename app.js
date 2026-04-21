(() => {
  // Agenda items: pular para o bloco correspondente
  document.querySelectorAll('.agenda-item[data-target]').forEach(item => {
    item.addEventListener('click', () => {
      const target = document.getElementById(item.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Sidebar: highlight do bloco visível
  const sideLinks = document.querySelectorAll('.side-list a');
  const blocks = Array.from(document.querySelectorAll('.block, .sub-block'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        sideLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  blocks.forEach(b => b.id && observer.observe(b));

  // Scroll to top
  const topBtn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    topBtn.classList.toggle('visible', window.scrollY > 600);
  });
  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Abrir todos os exercises com keyboard shortcut "e"
  let allOpen = false;
  document.addEventListener('keydown', (e) => {
    if (e.key === 'e' && !e.ctrlKey && !e.metaKey && !e.altKey &&
        document.activeElement.tagName !== 'INPUT' &&
        document.activeElement.tagName !== 'TEXTAREA') {
      allOpen = !allOpen;
      document.querySelectorAll('.exercise').forEach(ex => {
        if (allOpen) ex.setAttribute('open', '');
        else ex.removeAttribute('open');
      });
    }
  });
})();
