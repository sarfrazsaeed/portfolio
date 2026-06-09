/*
  SARFRAZ SAEED — PORTFOLIO 2026
  JavaScript Enhancements

*/

/*
   1. scroll progress bar (gold bar at top) */

const progressBar = document.createElement('div');
progressBar.id = 'scroll-progress';
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = progress + '%';
});


/* 
   2. Active nav link on scroll
   (highlights the current section in the nav) */

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('nav-active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('nav-active');
    }
  });
});


/* 
   3. MOBILE HAMBURGER MENU
   (shows/hides nav links on mobile)
 */
const nav = document.querySelector('nav div');

//  hamburger button
const hamburger = document.createElement('button');
hamburger.id = 'hamburger';
hamburger.innerHTML = `
  <span></span>
  <span></span>
  <span></span>
`;
hamburger.setAttribute('aria-label', 'Toggle menu');
nav.appendChild(hamburger);
const navMenu = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('nav-open');
  hamburger.classList.toggle('is-open');
});

// close menu when a link is clicked
navLinks.forEach(link => {

  link.addEventListener('click', () => {
    navMenu.classList.remove('nav-open');
    hamburger.classList.remove('is-open');
  });
});


/* 
   4. scroll to reveal animations
   (sections fade + slide in as you scroll)
 */
const revealElements = document.querySelectorAll(
  'section, .skill-card, .certificate-card, .education-degree, #projects > div, #projects > p'
);

revealElements.forEach(el => {
  el.classList.add('reveal');
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));


/* 
   5. typing the animation on hero subtitle text
   (types the paragraph text character by character)
 */
const heroPara = document.querySelector('#home .hero.content p, #home .hero-content p, .hero-content > div > p');

if (heroPara) {
  const originalText = heroPara.textContent.trim();
  heroPara.textContent = '';
  heroPara.style.opacity = '1';

  let i = 0;
  const typeSpeed = 28;

  function typeWriter() {
    if (i < originalText.length) {
      heroPara.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, typeSpeed);
    }
  }

  // Start typing after a short delay so hero loads first
  setTimeout(typeWriter, 900);
}


/* 
   6. NAV BACKGROUND OPACITY ON SCROLL
   (nav becomes more solid as you scroll down)
 */
const navEl = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navEl.style.background = 'rgba(6, 9, 18, 0.97)';
    navEl.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
  } else {
    navEl.style.background = 'rgba(6, 9, 18, 0.90)';
    navEl.style.boxShadow = 'none';
  }
});