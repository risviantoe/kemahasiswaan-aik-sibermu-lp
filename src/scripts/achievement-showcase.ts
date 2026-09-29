/** Progressive enhancement: the server renders every story before controls appear. */
export function initAchievementShowcase(root: HTMLElement) {
  if (root.dataset.ready) return;
  const panels = [
    ...root.querySelectorAll<HTMLElement>('[data-achievement-panel]'),
  ];
  const choices = [
    ...root.querySelectorAll<HTMLButtonElement>('[data-achievement-choice]'),
  ];
  const stage = root.querySelector<HTMLElement>('[data-achievement-stage]');
  const controls = root.querySelector<HTMLElement>(
    '[data-achievement-controls]',
  );
  const directory = root.querySelector<HTMLElement>(
    '[data-achievement-choices]',
  );
  const counter = root.querySelector<HTMLElement>('[data-achievement-counter]');
  const status = root.querySelector<HTMLElement>('[data-achievement-status]');
  if (
    !stage ||
    !controls ||
    !directory ||
    panels.length < 2 ||
    panels.length !== choices.length
  )
    return;

  let active = 0;
  function select(index: number, announce = true) {
    active = (index + panels.length) % panels.length;
    // Move focus only if it would otherwise be left inside an inert story.
    const focusWasInStory = panels.some((panel) =>
      panel.contains(document.activeElement),
    );
    panels.forEach((panel, i) => {
      const selected = i === active;
      panel.classList.toggle('is-active', selected);
      panel.inert = !selected;
      panel.setAttribute('aria-hidden', String(!selected));
      choices[i].setAttribute('aria-pressed', String(selected));
    });
    if (focusWasInStory)
      root
        .querySelector<HTMLButtonElement>('[data-achievement-next]')
        ?.focus({ preventScroll: true });
    if (counter) counter.textContent = `${active + 1} dari ${panels.length}`;
    if (announce && status)
      status.textContent = `Prestasi ${active + 1} dari ${panels.length}: ${panels[active].querySelector('h3')?.textContent}. ${panels[active].querySelector('.achievement-names')?.textContent}.`;
  }

  function navigate(direction: -1 | 1) {
    select(active + direction);
    // On phone and tablet the directory is hidden; bring the new story into view.
    if (!window.matchMedia('(max-width: 900px)').matches) return;
    const panel = panels[active];
    const panelTop = panel.getBoundingClientRect().top;
    const headerBottom =
      document.querySelector('.site-header')?.getBoundingClientRect().bottom ??
      0;
    const visibleTop = Math.max(0, headerBottom) + 16;
    if (panelTop >= visibleTop && panelTop < window.innerHeight) return;

    // Keep keyboard reading order with the new story, without a second scroll.
    panel.focus({ preventScroll: true });
    window.scrollTo({
      top: Math.max(0, window.scrollY + panelTop - visibleTop),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    });
  }

  choices.forEach((choice, index) => {
    choice.addEventListener('click', () => select(index));
    choice.addEventListener('keydown', (event) => {
      let next: number;
      switch (event.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          next = index + 1;
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          next = index - 1;
          break;
        case 'Home':
          next = 0;
          break;
        case 'End':
          next = panels.length - 1;
          break;
        default:
          return;
      }
      event.preventDefault();
      select(next);
      choices[active].focus({ preventScroll: true });
    });
  });
  root
    .querySelector('[data-achievement-previous]')
    ?.addEventListener('click', () => navigate(-1));
  root
    .querySelector('[data-achievement-next]')
    ?.addEventListener('click', () => navigate(1));

  let touch: { id: number; x: number; y: number; time: number } | null = null;
  let suppressClickUntil = 0;
  stage.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'touch') return;
    if (!event.isPrimary) {
      touch = null;
      return;
    }
    if ((event.target as Element).closest('button')) return;
    touch = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      time: event.timeStamp,
    };
  });
  stage.addEventListener('pointerup', (event) => {
    if (!touch || event.pointerId !== touch.id) return;
    const dx = event.clientX - touch.x;
    const dy = event.clientY - touch.y;
    const duration = event.timeStamp - touch.time;
    touch = null;
    if (
      Math.abs(dx) < 60 ||
      Math.abs(dx) < Math.abs(dy) * 1.5 ||
      duration > 800
    )
      return;
    suppressClickUntil = Date.now() + 400;
    select(active + (dx < 0 ? 1 : -1));
  });
  stage.addEventListener('pointercancel', () => {
    touch = null;
  });
  stage.addEventListener(
    'click',
    (event) => {
      if (Date.now() < suppressClickUntil) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    true,
  );

  select(0, false);
  root.dataset.ready = 'true';
  controls.hidden = false;
  directory.hidden = false;
}
