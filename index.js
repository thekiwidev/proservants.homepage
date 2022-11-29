document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("open");
});

// =====================================
// GSAP
// =====================================

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

// THE BIG HEADING
gsap.to(".hero-banner-texts h1", {
  scrollTrigger: {
    trigger: ".hero-banner-section .contents",
    start: "top 80%",
    end: "bottom 5%",
    toggleActions: "restart reset restart reverse",
  },
  "clip-path": " polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)",
  opacity: 1,
  duration: 1,
});

// THE BANNER IMAGE
gsap
  .from(".hero-banner-image img", {
    scrollTrigger: {
      trigger: ".hero-banner-section .contents",
      start: "top 80%",
      end: "bottom 5%",
      toggleActions: "restart reset restart reverse",
    },
    x: 200,
    opacity: 0,
  })
  .delay(0.5);

// THE HERO CALL TO ACTIONS
gsap
  .to(
    ".cta-btns .btn",

    {
      scrollTrigger: {
        trigger: ".hero-banner-section .contents",
        start: "top 80%",
        end: "bottom 5%",
        toggleActions: "restart reset restart reverse",
      },

      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: Linear.easeNone,
    }
  )
  .delay(0.7);

// Shop now image
gsap.from(".image-container.shop-now-image-container img", {
  scrollTrigger: {
    trigger: "#shop .contents",
    start: "top 80%",
    end: "bottom 5%",
    toggleActions: "restart reset restart reverse",
  },
  y: 100,
  x: -100,
  opacity: 0,
  duration: 0.8,
});

// Shop now text contents
gsap.from(".shop-now-text-contents h1", {
  scrollTrigger: {
    trigger: "#shop .contents",
    start: "top 80%",
    end: "bottom 5%",
    toggleActions: "restart reverse restart reverse",
  },

  y: 100,

  opacity: 0,
  duration: 0.8,
});

gsap.from(".shop-now-text-contents p", {
  scrollTrigger: {
    trigger: "#shop .contents",
    start: "top 80%",
    end: "bottom 5%",
    toggleActions: "restart reverse restart reverse",
  },

  y: 100,
  opacity: 0,
  duration: 0.8,
});

gsap.from(".shop-now-text-contents a.btn", {
  scrollTrigger: {
    trigger: "#shop .contents",
    start: "top 80%",
    end: "bottom 5%",
    toggleActions: "restart reverse restart reverse",
  },

  y: 100,

  opacity: 0,
  duration: 0.5,
});

// Sell now image
gsap.from(".image-container.sell-now-image-container img", {
  scrollTrigger: {
    trigger: "#sell .contents",
    start: "top 80%",
    end: "bottom 5%",
    toggleActions: "restart reset restart reverse",
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
    end: "bottom 5%",
    toggleActions: "restart reverse restart reverse",
  },

  x: -100,
  opacity: 0,
  duration: 0.8,
});

// sell now text contents
gsap.from(".sell-now-text-contents p", {
  scrollTrigger: {
    trigger: "#sell .contents",
    start: "top 80%",
    end: "bottom 5%",
    toggleActions: "restart reverse restart reverse",
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
    end: "bottom 5%",
    toggleActions: "restart reverse restart reverse",
  },

  x: -100,
  opacity: 0,
  duration: 0.8,
});

// sell now extra header
// gsap.fromTo(
//   ".sell-now-extras h1",
//   {
//     scrollTrigger: {
//       trigger: ".sell-now-extras .contents",
//       start: "top 80%",
//       end: "bottom 5%",
//       toggleActions: "restart reverse restart reverse",
//     },
//     clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
//     opacity: 0,
//     duration: 0.8,
//   },
//   {
//     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//     opacity: 1,
//   }
// );

gsap.from(".sell-now-extras .cards .card", {
  scrollTrigger: {
    trigger: ".sell-now-extras .contents",
    start: "top 80%",
    end: "bottom 5%",
    toggleActions: "restart reverse restart reverse",
  },
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

gsap.from(".more-info-section .stats .stat", {
  scrollTrigger: {
    trigger: ".more-info-section .contents .stats",
    start: "top 80%",
    end: "bottom 5%",
    toggleActions: "restart reverse restart reverse",
  },
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
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
