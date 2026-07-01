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

    // New generic data-reveal support (2025 portfolio enhancements)
    const drEls = document.querySelectorAll('[data-reveal]');
    const io2 = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io2.unobserve(e.target);
        }
      });
    }, { threshold: 0.18 });
    drEls.forEach(el => io2.observe(el));
  } else {
    // Fallback: show elements immediately
    document.querySelectorAll('.reveal-up').forEach(el => el.classList.add('in'));
    document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('in'));
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

  // Image Modal Viewer
  const clickableImages = document.querySelectorAll('.services-grid .mxm-card img, .slide-content img');
  if (clickableImages.length > 0) {
    let modal = document.querySelector('.mxm-image-modal');
    
    const createModal = () => {
      modal = document.createElement('div');
      modal.className = 'mxm-image-modal';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-label', 'Image Viewer');
      modal.innerHTML = `
        <div class="mxm-image-modal-content">
          <button class="mxm-image-modal-close" aria-label="Close image viewer">&times;</button>
          <img src="" alt="" />
          <div class="mxm-image-modal-caption"></div>
        </div>
      `;
      document.body.appendChild(modal);

      const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        if (modal._triggerElement) {
          modal._triggerElement.focus();
        }
      };

      modal.querySelector('.mxm-image-modal-close').addEventListener('click', closeModal);
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
          closeModal();
        }
      });
    };

    clickableImages.forEach(img => {
      img.addEventListener('click', () => {
        if (!modal) createModal();
        
        const modalImg = modal.querySelector('img');
        const modalCaption = modal.querySelector('.mxm-image-modal-caption');
        
        // Find caption from closest card/slide heading
        const card = img.closest('.mxm-card, .slide-content');
        const heading = card ? card.querySelector('h3') : null;
        const captionText = heading ? heading.textContent : img.alt;
        
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalCaption.textContent = captionText;
        modal._triggerElement = img; // save for restoring focus
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent background scroll
        modal.querySelector('.mxm-image-modal-close').focus();
      });
    });
  }
})();
