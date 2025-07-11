// Animate header elements
gsap.registerPlugin(ScrollTrigger);
gsap.from(".logo", { opacity: 0, y: -30, duration: 1, delay: 0.2 });
gsap.from(".nav-links li", {
  opacity: 0,
  y: -20,
  duration: 0.5,
  delay: 0.4,
  stagger: 0.2
});

// Hero section
gsap.from(".hero-text h1", { opacity: 0, x: -100, duration: 1, delay: 0.6 });
gsap.from(".hero-text h2", { opacity: 0, x: -100, duration: 1, delay: 0.8 });
gsap.from(".hero-text p", { opacity: 0, x: -100, duration: 1, delay: 1 });
gsap.from(".buttons .btn", {
  opacity: 0,
  y: 20,
  duration: 0.5,
  delay: 1.2,
  stagger: 0.2
});
gsap.from(".hero-image img", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  delay: 1.5,
  ease: "back.out(1.7)"
});

// Scroll animations for sections
const sections = document.querySelectorAll("section");
sections.forEach((section, index) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    }
  });
});
