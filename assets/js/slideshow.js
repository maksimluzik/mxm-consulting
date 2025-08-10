class ExpertiseSlideshow {
  constructor() {
    this.track = document.getElementById('expertiseSlideshow');
    this.slides = this.track.querySelectorAll('.slide-item');
    this.indicators = document.querySelectorAll('.slideshow-indicators button');
    this.currentIndex = 0;
    this.isAnimating = false;
    this.autoPlayInterval = null;
    this.autoPlayDelay = 5000;
    
    this.init();
  }
  
  init() {
    this.setupEventListeners();
    this.updateSlideshow();
    this.startAutoPlay();
    this.setupKeyboardNavigation();
    this.setupTouchNavigation();
  }
  
  setupEventListeners() {
    // Pause auto-play on hover
    this.track.addEventListener('mouseenter', () => this.pauseAutoPlay());
    this.track.addEventListener('mouseleave', () => this.startAutoPlay());
    
    // Handle focus events for accessibility
    this.slides.forEach((slide, index) => {
      slide.addEventListener('focus', () => {
        this.goToSlide(index);
        this.pauseAutoPlay();
      });
    });
  }
  
  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      if (document.activeElement.closest('.slideshow-container')) {
        switch(e.key) {
          case 'ArrowLeft':
            e.preventDefault();
            this.prev();
            break;
          case 'ArrowRight':
            e.preventDefault();
            this.next();
            break;
          case 'Home':
            e.preventDefault();
            this.goToSlide(0);
            break;
          case 'End':
            e.preventDefault();
            this.goToSlide(this.slides.length - 1);
            break;
        }
      }
    });
  }
  
  setupTouchNavigation() {
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    
    this.track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isDragging = true;
      this.pauseAutoPlay();
    }, { passive: true });
    
    this.track.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      
      const deltaX = e.touches[0].clientX - startX;
      const deltaY = e.touches[0].clientY - startY;
      
      // If horizontal movement is greater than vertical, prevent default scrolling
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault();
      }
    }, { passive: false });
    
    this.track.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      
      const endX = e.changedTouches[0].clientX;
      const deltaX = endX - startX;
      const threshold = 50;
      
      if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
          this.prev();
        } else {
          this.next();
        }
      }
      
      isDragging = false;
      this.startAutoPlay();
    }, { passive: true });
  }
  
  updateSlideshow() {
    if (this.isAnimating) return;
    
    // Always show one slide at a time
    const translateX = -this.currentIndex * 100;
    this.track.style.transform = `translateX(${translateX}%)`;
    
    // Update indicators
    this.indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.currentIndex);
      indicator.setAttribute('aria-selected', index === this.currentIndex);
    });
    
    // Update aria-hidden for accessibility
    this.slides.forEach((slide, index) => {
      const isVisible = index === this.currentIndex;
      slide.setAttribute('aria-hidden', !isVisible);
      slide.setAttribute('tabindex', isVisible ? '0' : '-1');
    });
  }
  
  next() {
    if (this.isAnimating) return;
    
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updateSlideshow();
    this.pauseAutoPlay();
    setTimeout(() => this.startAutoPlay(), 1000);
  }
  
  prev() {
    if (this.isAnimating) return;
    
    this.currentIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
    this.updateSlideshow();
    this.pauseAutoPlay();
    setTimeout(() => this.startAutoPlay(), 1000);
  }
  
  goToSlide(index) {
    if (this.isAnimating || index === this.currentIndex) return;
    
    this.currentIndex = Math.max(0, Math.min(index, this.slides.length - 1));
    this.updateSlideshow();
    this.pauseAutoPlay();
    setTimeout(() => this.startAutoPlay(), 1000);
  }
  
  startAutoPlay() {
    this.pauseAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, this.autoPlayDelay);
  }
  
  pauseAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
}

// Initialize slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.slideshow = new ExpertiseSlideshow();
  
  // Handle window resize for responsive behavior
  window.addEventListener('resize', () => {
    slideshow.updateSlideshow();
  });
});
