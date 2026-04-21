(() => {
  // =========================================================
  // Navegação / Scroll / Atalhos
  // =========================================================

  // Se o alvo de um link âncora for um <details class="section-collapse">
  // fechado, abra-o antes de rolar
  function openDetailsIfTarget(id) {
    const target = document.getElementById(id);
    if (!target) return null;
    // Se for details colapsável ou estiver dentro de um, abre
    let el = target;
    while (el) {
      if (el.tagName === 'DETAILS' && !el.open) {
        el.open = true;
      }
      el = el.parentElement;
    }
    return target;
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length <= 1) return;
      const id = href.slice(1);
      const target = openDetailsIfTarget(id);
      if (target) {
        e.preventDefault();
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      }
    });
  });

  // Também verificar anchor no load inicial (ex: abrir link com #bloco-3)
  if (location.hash.length > 1) {
    setTimeout(() => openDetailsIfTarget(location.hash.slice(1)), 0);
  }

  // Agenda items: pular para o bloco correspondente
  document.querySelectorAll('.agenda-item[data-target]').forEach(item => {
    item.addEventListener('click', () => {
      const target = openDetailsIfTarget(item.dataset.target);
      if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
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
  if (topBtn) {
    window.addEventListener('scroll', () => {
      topBtn.classList.toggle('visible', window.scrollY > 600);
    });
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

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

  // =========================================================
  // Tracking de progresso — checkbox em cada passo + barra por exercício
  // =========================================================

  const STATE_KEY = 'curso-claude-pms/progress/v1';
  const state = loadState();

  function loadState() {
    try { return JSON.parse(localStorage.getItem(STATE_KEY) || '{}'); }
    catch { return {}; }
  }
  function saveState() {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
  }

  const exercises = document.querySelectorAll('.exercise');
  exercises.forEach(ex => {
    const numEl = ex.querySelector('.ex-num');
    if (!numEl) return;
    const exNum = numEl.textContent.trim();

    // Injetar checkbox em cada step-block
    const steps = ex.querySelectorAll('.step-block');
    steps.forEach((step, i) => {
      const head = step.querySelector('.step-block-head');
      if (!head) return;
      const stepId = `ex-${exNum}/step-${i + 1}`;
      const label = document.createElement('label');
      label.className = 'step-check';
      label.setAttribute('title', 'Marcar passo como concluído');
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.dataset.stepId = stepId;
      input.checked = !!state[stepId];
      const tick = document.createElement('span');
      tick.className = 'step-check-tick';
      tick.setAttribute('aria-hidden', 'true');
      label.appendChild(input);
      label.appendChild(tick);
      // Inserir como primeiro filho do head
      head.insertBefore(label, head.firstChild);

      // Stop propagation pra não abrir/fechar o accordion ao clicar
      label.addEventListener('click', e => e.stopPropagation());

      input.addEventListener('change', () => {
        if (input.checked) state[stepId] = true;
        else delete state[stepId];
        saveState();
        step.classList.toggle('step-done', input.checked);
        updateExerciseProgress(ex);
      });

      // Estado inicial visual
      step.classList.toggle('step-done', input.checked);
    });

    // Se o exercício tem steps, injetar barra de progresso na summary
    if (steps.length > 0) {
      const summary = ex.querySelector('summary');
      const time = summary.querySelector('.ex-time');
      const progress = document.createElement('span');
      progress.className = 'ex-progress';
      progress.innerHTML = `
        <span class="progress-bar"><span class="progress-fill"></span></span>
        <span class="progress-text">0/${steps.length}</span>
      `;
      // Inserir antes do ex-time
      summary.insertBefore(progress, time);
      updateExerciseProgress(ex);
    }
  });

  function updateExerciseProgress(ex) {
    const checks = ex.querySelectorAll('.step-check input[type="checkbox"]');
    if (!checks.length) return;
    const done = Array.from(checks).filter(c => c.checked).length;
    const total = checks.length;
    const pct = Math.round((done / total) * 100);
    const fill = ex.querySelector('.progress-fill');
    const text = ex.querySelector('.progress-text');
    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = `${done}/${total}`;
    ex.classList.toggle('ex-complete', done === total && total > 0);
    updateDayProgress();
  }

  // Progresso global do dia — exibido no topbar
  function updateDayProgress() {
    const allChecks = document.querySelectorAll('.exercise .step-check input[type="checkbox"]');
    if (!allChecks.length) return;
    const done = Array.from(allChecks).filter(c => c.checked).length;
    const total = allChecks.length;
    const pct = Math.round((done / total) * 100);
    const dayBar = document.getElementById('day-progress');
    if (dayBar) {
      dayBar.querySelector('.day-fill').style.width = pct + '%';
      dayBar.querySelector('.day-text').textContent = `${done}/${total} passos · ${pct}%`;
    }
  }

  // Injetar barra global no topbar (se tiver slot)
  const topbar = document.querySelector('.topbar-inner');
  if (topbar) {
    const dayEl = document.createElement('div');
    dayEl.id = 'day-progress';
    dayEl.setAttribute('title', 'Progresso do dia · clique duplo pra resetar');
    dayEl.innerHTML = `
      <span class="day-label">P R O G R E S S O</span>
      <span class="day-bar"><span class="day-fill"></span></span>
      <span class="day-text">0/0 passos · 0%</span>
    `;
    // Inserir antes da nav
    const nav = topbar.querySelector('.top-nav');
    if (nav) topbar.insertBefore(dayEl, nav);
    else topbar.appendChild(dayEl);

    // Duplo clique pra resetar
    dayEl.addEventListener('dblclick', () => {
      if (confirm('Resetar todo o progresso dos exercícios?')) {
        for (const k in state) delete state[k];
        saveState();
        document.querySelectorAll('.step-check input[type="checkbox"]').forEach(c => c.checked = false);
        document.querySelectorAll('.step-block').forEach(s => s.classList.remove('step-done'));
        document.querySelectorAll('.exercise').forEach(ex => {
          ex.classList.remove('ex-complete');
          updateExerciseProgress(ex);
        });
      }
    });
  }

  updateDayProgress();
})();
