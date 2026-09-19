'use strict';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('is-pending');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => {
    element.classList.add('is-pending');
    observer.observe(element);
  });
}
const projects = {
  lisn: { title: 'Lisn', image: 'images/Lisn.png', description: 'A radio system controller built around the moments when communication matters most. Lisn helps teams stay connected using wireless communications, even in challenging environments.', url: 'https://www.lisn.tech/' },
  watch: { title: 'WatchSpotter', image: 'images/WatchSpotter.png', description: 'Customizable environmental data collection and analytics for researchers, scientists, and educators. A mobile experience that brings practical research tools into the field.', url: 'https://watchspotterpro.com/' },
  steve: { title: 'Steve Hofstetter', image: 'images/Steve.png', description: 'The official companion app for Steve Hofstetter. Discover new videos and receive notifications when shows are happening nearby, all in one place.', url: 'https://www.stevehofstetter.com/' },
  support: { title: 'OurSupport', image: 'images/OurSupport.png', description: 'Connecting customers with local IT support technicians. Request onsite or remote help through a simple mobile experience with a transparent workflow and clear cost control.', url: 'https://www.oursupport.co/' }
};
const dialog = document.querySelector('#project-dialog');
let trigger;
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    trigger = button;
    document.querySelector('#dialog-title').textContent = project.title;
    document.querySelector('#dialog-description').textContent = project.description;
    const image = document.querySelector('#dialog-image');
    image.src = project.image;
    image.alt = `${project.title} project preview`;
    document.querySelector('#dialog-link').href = project.url;
    dialog.showModal();
    document.body.classList.add('dialog-open');
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  trigger?.focus();
});
document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('umerayubdev6996@gmail.com');
    status.textContent = 'Email copied!';
  } catch {
    status.textContent = 'Select the email address to copy it.';
  }
  window.setTimeout(() => { status.textContent = ''; }, 3500);
});
document.querySelector('#year').textContent = new Date().getFullYear();

const skillFilters = document.querySelectorAll('[data-skill-filter]');
const skillCards = document.querySelectorAll('[data-skill-category]');
skillFilters.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.skillFilter;
    skillFilters.forEach(filter => {
      const active = filter === button;
      filter.classList.toggle('active', active);
      filter.setAttribute('aria-pressed', String(active));
    });
    let visible = 0;
    skillCards.forEach(card => {
      const matches = category === 'all' || card.dataset.skillCategory === category;
      card.hidden = !matches;
      if (matches) {
        visible += 1;
        card.classList.remove('is-pending');
      }
    });
    document.querySelector('#skills-count').textContent = `${visible} areas of expertise`;
  });
});
