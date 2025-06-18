// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Set up scroll animations
  setupScrollAnimations();

  // Set up smooth scrolling for navigation links
  setupSmoothScrolling();

  // Set up other interactive elements
  setupInteractiveElements();
});

/**
 * Set up scroll animations using GSAP and ScrollTrigger
 */
function setupScrollAnimations() {
  // Animate section titles
  gsap.utils.toArray('.section__title').forEach(title => {
    gsap.fromTo(title, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  // Animate about section content
  gsap.fromTo('.about__text', 
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.about__text',
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }
  );

  // Animate contact info
  gsap.fromTo('.contact__info', 
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.contact__info',
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }
  );

  // Animate timeline items with stagger
  gsap.fromTo('.timeline__item', 
    { opacity: 0, x: (index) => index % 2 === 0 ? -30 : 30 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 0.8, 
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.timeline',
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }
  );

  // Animate education cards with stagger
  gsap.fromTo('.education__card', 
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.education__grid',
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }
  );

  // Animate personal items with stagger
  gsap.fromTo('.personal__item', 
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.personal__content',
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }
  );

  // Animate award items with stagger
  gsap.fromTo('.award__item', 
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.awards__grid',
        start: "top 85%",
        toggleActions: "play none none none"
      }
    }
  );
}

/**
 * Set up smooth scrolling for navigation links
 */
function setupSmoothScrolling() {
  // Get all links that start with #
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only if the link targets something other than just #
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const navHeight = document.querySelector('.nav').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = targetPosition - navHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

/**
 * Set up other interactive elements
 */
function setupInteractiveElements() {
  // Add scroll event listener for the navigation bar
  const nav = document.querySelector('.nav');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.style.padding = '10px 0';
      nav.style.boxShadow = 'var(--shadow-md)';
    } else {
      nav.style.padding = '';
      nav.style.boxShadow = '';
    }
  });

  // Add hover effect for buttons
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      gsap.to(this, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    button.addEventListener('mouseleave', function() {
      gsap.to(this, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // Add hover effect for cards
  const cards = document.querySelectorAll('.card, .timeline__content, .award__item');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      gsap.to(this, {
        y: -5,
        boxShadow: 'var(--shadow-lg)',
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    card.addEventListener('mouseleave', function() {
      gsap.to(this, {
        y: 0,
        boxShadow: 'var(--shadow-sm)',
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });
}