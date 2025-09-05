/* MXM Consulting 2025 Modernization JS
 * - Intersection Observer reveal
 * - Prefers-reduced-motion safeguards
 * - Lightweight utilities only
 */
(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Improved reveal (no initial flash/fade-out). Uses class toggle instead of pausing CSS animation.
  if (!prefersReduced && 'IntersectionObserver' in window) {
    const els = document.querySelectorAll('.reveal-up');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));
  } else {
    // Fallback: show elements immediately
    document.querySelectorAll('.reveal-up').forEach(el => el.classList.add('in'));
  }

  // Accessible skip link injection (if not present in markup)
  if (!document.querySelector('.skip-link')) {
    const skip = document.createElement('a');
    skip.href = '#main';
    skip.className = 'skip-link';
    skip.textContent = 'Skip to content';
    Object.assign(skip.style, {
      position: 'absolute',
      top: '0', left: '0',
      background: '#000', color: '#fff',
      padding: '8px 14px', zIndex: '100',
      transform: 'translateY(-120%)',
      transition: 'transform .25s ease',
      textDecoration: 'none',
      fontSize: '14px'
    });
    skip.addEventListener('focus', () => skip.style.transform = 'translateY(0)');
    skip.addEventListener('blur', () => skip.style.transform = 'translateY(-120%)');
    document.body.prepend(skip);
  }
})();
