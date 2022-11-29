document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("open");
});
// =====================================
// GSAP
// =====================================

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

// THE BIG HEADING
tl.to(".hero-banner-texts h1", {
  "clip-path": " polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)",
  opacity: 1,
  duration: 1,
}).delay(1);

// THE BANNER IMAGE
tl.from(".hero-banner-image img", { x: 200, opacity: 0 }, "-=.76");

// THE HERO CALL TO ACTIONS
tl.to(
  ".cta-btns .btn",

  {
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.1,
  },
  "+-=.3"
);
// Shop now image
gsap.from(".image-container.shop-now-image-container img", {
  scrollTrigger: {
    trigger: "#shop .contents",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "restart reset restart reverse",
    // markers: true,
  },
  x: -100,
  opacity: 0,
  duration: 0.8,
});

// Shop now text contents
gsap.from(".shop-now-text-contents h1", {
  scrollTrigger: {
    trigger: "#shop .contents",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "restart reverse restart reverse",
    // markers: true,
  },

  x: 100,
  opacity: 0,
  duration: 0.8,
});

gsap.from(".shop-now-text-contents p", {
  scrollTrigger: {
    trigger: "#shop .contents",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "restart reverse restart reverse",
    // markers: true,
  },

  x: 100,
  opacity: 0,
  duration: 0.8,
});

gsap.from(".shop-now-text-contents a.btn", {
  scrollTrigger: {
    trigger: "#shop .contents",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "restart reverse restart reverse",
    // markers: true,
  },

  // "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  x: 100,
  opacity: 0,
  duration: 0.5,
});

// Sell now image
gsap.from(".image-container.sell-now-image-container img", {
  scrollTrigger: {
    trigger: "#sell .contents",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "restart reset restart reverse",
    // markers: true,
  },
  x: 100,
  opacity: 0,
  duration: 0.8,
});

// sell now text contents
gsap.from(".sell-now-text-contents h1", {
  scrollTrigger: {
    trigger: "#sell .contents",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "restart reverse restart reverse",
    // markers: true,
  },

  x: -100,
  opacity: 0,
  duration: 0.8,
});

gsap.from(".sell-now-text-contents p", {
  scrollTrigger: {
    trigger: "#sell .contents",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "restart reverse restart reverse",
    // markers: true,
  },

  x: -100,
  opacity: 0,
  duration: 0.8,
  delay: 0.3,
});

gsap.from(".sell-now-text-contents a.btn", {
  scrollTrigger: {
    trigger: "#sell .contents",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "restart reverse restart reverse",
    // markers: true,
  },

  x: -100,
  opacity: 0,
  duration: 0.8,
});

// toggleActions: "play none none none",
// play
// pause
// resume
// reverese
// restart
// reset
// complete
// none
