document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("open");
  document.querySelector(".nav-links").classList.toggle("open");
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
  duration: 2.5,
});

// ========================================
// the banner
// ========================================

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
    duration: 1,
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
      duration: 0.5,
      stagger: 0.1,
      ease: Linear.easeNone,
    }
  )
  .delay(0.4);

// ========================================
// shop now
// ========================================

// Shop now image
gsap.from(".image-container.shop-now-image-container img", {
  scrollTrigger: {
    trigger: "#shop .contents",
    start: "top 80%",
    end: "bottom 5%",
    toggleActions: "restart reset restart reverse",
  },
  scale: 1.5,
  opacity: 0,
  duration: 1,
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

// ========================================
// sell now
// ========================================

// Sell now image
gsap.from(".image-container.sell-now-image-container img", {
  scrollTrigger: {
    trigger: "#sell .contents",
    start: "top 80%",
    end: "bottom 5%",
    toggleActions: "restart reset restart reverse",
  },
  scale: 0.6,
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
  duration: 1,
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
  duration: 1,
});

// ========================================
// sell now extra
// ========================================

// // sell now extra header
// gsap.from(".sell-now-extras h1", {
//   scrollTrigger: {
//     trigger: ".sell-now-extras .contents",
//     start: "top 80%",
//     end: "bottom 5%",
//     toggleActions: "restart reverse restart reverse",
//   },
//   "clip-path": "polygon(0% 0%, 0% 18%, 0% 61%, 0% 100%)",
//   opacity: 0,
//   duration: 1.3,
// });

// gsap.from(".sell-now-extras .cards .card", {
//   scrollTrigger: {
//     trigger: ".sell-now-extras .contents",
//     start: "top 80%",
//     end: "bottom 5%",
//     toggleActions: "restart reverse restart reverse",
//   },
//   y: 100,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.3,
// });

// ========================================
// DELIVER NOW
// ========================================

gsap.from(".image-container.deliver-now-image-container img", {
  scrollTrigger: {
    trigger: "#deliver .contents",
    start: "top 80%",
    end: "bottom 5%",
    toggleActions: "restart reset restart reverse",
  },
  scale: 1.3,
  opacity: 0,
  duration: 0.4,
  stagger: 0.4,
});

gsap.from(".deliver-now-text-contents h1", {
  scrollTrigger: {
    trigger: "#deliver .contents",
    start: "top 80%",
    end: "bottom 5%",
    toggleActions: "restart reverse restart reverse",
  },

  y: 100,

  opacity: 0,
  duration: 0.8,
});

gsap.from(".deliver-now-text-contents p", {
  scrollTrigger: {
    trigger: "#deliver .contents",
    start: "top 80%",
    end: "bottom 5%",
    toggleActions: "restart reverse restart reverse",
  },

  y: 100,
  opacity: 0,
  duration: 0.8,
});

gsap.from(".deliver-now-text-contents a.btn", {
  scrollTrigger: {
    trigger: "#deliver .contents",
    start: "top 80%",
    end: "bottom 5%",
    toggleActions: "restart reverse restart reverse",
  },

  y: 100,

  opacity: 0,
  duration: 0.5,
});

// ========================================
// more info
// ========================================

let headTargets = [
  document.querySelector(".more-info-header .texts"),
  document.querySelector(".more-info-header .form-field"),
];
let headTargetsTexts = [
  document.querySelector(".more-info-header .texts h2"),
  document.querySelector(".more-info-header .texts p"),
];

gsap.from(headTargets, {
  scrollTrigger: {
    trigger: ".more-info-section .contents .more-info-header",
    start: "top 80%",
    end: "bottom 5%",
    toggleActions: "restart reverse restart reverse",
  },
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

gsap.from(headTargetsTexts, {
  scrollTrigger: {
    trigger: ".more-info-section .contents .more-info-header",
    start: "top 80%",
    end: "bottom 5%",
    toggleActions: "restart reverse restart reverse",
  },

  "clip-path": "polygon(100% 100%, 100% 100%, 0% 100%, 0% 100%)",
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

// ========================================
// marktplace
// ========================================

gsap.from(".image-container.marketplace-image-container img", {
  scrollTrigger: {
    trigger: "#marketplace .contents",
    start: "top 80%",
    end: "bottom 5%",
    toggleActions: "restart reset restart reverse",
  },
  scale: 0.3,
  opacity: 0,
  duration: 0.4,
  stagger: 0.4,
});

gsap.from(".marketplace-text-contents h1", {
  scrollTrigger: {
    trigger: "#marketplace .contents",
    start: "top 80%",
    end: "bottom 5%",
    toggleActions: "restart reverse restart reverse",
  },

  y: 100,
  opacity: 0,
  duration: 0.8,
});

gsap.from(".marketplace-text-contents p", {
  scrollTrigger: {
    trigger: "#marketplace .contents",
    start: "top 80%",
    end: "bottom 5%",
    toggleActions: "restart reverse restart reverse",
  },

  y: 100,
  opacity: 0,
  duration: 0.8,
});

gsap.from(".marketplace-text-contents a.btn", {
  scrollTrigger: {
    trigger: "#marketplace .contents",
    start: "top 80%",
    end: "bottom 5%",
    toggleActions: "restart reverse restart reverse",
  },

  y: 100,

  opacity: 0,
  duration: 0.5,
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

// =================================
// GLIDE JS
// =================================

new Glide(".featured-products-slide", {
  type: "carousel",
  startAt: 0,
  perView: 3,
  autoplay: 5000,
  hoverpause: false,
  breakpoints: {
    850: {
      perView: 2,
    },
    600: {
      perView: 1,
    },
  },
}).mount();
