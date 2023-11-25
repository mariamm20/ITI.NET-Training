function toggleMenu() {
  const navSection = document.querySelector(".nav-section");
  const main = document.querySelector("main");
  const navbarOpen = document.querySelector(".navbar .open");
  const navbarClose = document.querySelector(".navbar .close");

  navSection.classList.toggle("display-true");
  main.classList.toggle("display-false");
  navbarOpen.classList.toggle("display-false");
  navbarClose.classList.toggle("display-true");

  const timeline = gsap.timeline({ defaults: { duration: 0.5 } });
  timeline
    .from(".menu-items ul", { y: "100vw", ease: "none" }, 1)
    .from(".logo-div h2", { y: "-100%", ease: "none" }, 1);
}

const timeline = gsap.timeline({ defaults: { duration: 0.5 } });
timeline

  .from(".burgery-headline p", { y: "-100%", ease: "none" })

  .from(".burgery-headline-div h1", { opacity: 0, stagger: 0.5 })
  .from(".headline-img-wrapper", { opacity: 0, stagger: 1 })
  .from(".image-wrapper", { y: "-100vw", ease: "power2.in" }, 1);

gsap.registerPlugin(ScrollTrigger);

const animationData = [
  {
    target: ".burgery-headline p",
    props: { opacity: 1, y: 15 },
    trigger: ".burgery-headline p",
    start: "top top",
    end: "center center",
  },
  {
    target: ".about",
    props: { x: -800 },
    trigger: ".about",
    start: "-500vh",
    end: "center center",
  },
  {
    target: ".burgery-about-div",
    props: { x: 800 },
    trigger: ".burgery-about-div",
    start: "-2000vh",
    end: "center center",
  },
  {
    target: ".menu",
    props: { x: 800 },
    trigger: ".menu",
    start: "-500vh",
    end: "center center",
  },
  {
    target: ".menu-item h3",
    props: { y: 20 },
    trigger: ".menu-item h3",
    start: "-600vh",
    end: "center center",
  },
  {
    target: ".menu-item",
    props: { x: -800 },
    trigger: ".menu-item",
    start: "-600vh",
    end: "center center",
  },
  {
    target: ".burgery-contact",
    props: { opacity: 1, y: 50 },
    trigger: ".burgery-contact",
    start: "-700vh",
    end: "center center",
  },
];

animationData.forEach(({ target, props, trigger, start, end }) => {
  gsap.from(target, {
    ...props,
    scrollTrigger: {
      trigger,
      scrub: 2,
      start,
      end,
    },
    ease: "none",
  });
});

const animationDataTo = [
  {
    target: ".burgery-headline-div h1",
    props: { x: -800 },
    trigger: ".burgery-headline-div h1",
    start: "0vh",
    end: "center center",
  },
  {
    target: ".headline .img-wrapper",
    props: { y: -500 },
    trigger: ".headline .img-wrapper",
    start: "0vh",
    end: "center center",
  },
];

animationDataTo.forEach(({ target, props, trigger, start, end }) => {
  gsap.to(target, {
    ...props,
    scrollTrigger: {
      trigger,
      scrub: 2,
      start,
      end,
    },
    ease: "none",
  });
});
