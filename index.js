document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("open");
});

// GSAP

let tl = gsap.timeline({ default: { ease: "power4.inOut", duration: 2 } });

// THE BIG HEADING
tl.fromTo(
  ".hero-banner-texts h1",
  {
    "clip-path": " polygon(0% 100%, 0% 100%, 0% 0%, 0% 0%)",
    opacity: 0.1,
  },

  {
    "clip-path": " polygon(100% 100%, 0% 100%, 0% 0%, 100% 0%)",
    opacity: 1,
    duration: 1,
  }
);
tl.from(".hero-banner-image img", { x: 200, opacity: 0 }, "-=.76");
tl.fromTo(
  ".cta-btns .btn",
  {
    opacity: 0,
    y: 200,
  },
  { y: 0, opacity: 1, stagger: 0.1 },
  "+-=.7"
);

// gsap.fromTo(".box", { opacity: 0 }, { opacity: 0.5, duration: 1 });
// gsap.to(".box", {
//   y: 100,
//   stagger: 0.1, // 0.1 seconds between when each ".box" element starts animating
// });
