const list = document.querySelectorAll(".list");

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

gsap.registerPlugin(ScrollTrigger);

const animations = [
  { target: ".navbar-lg", props: { opacity: 1, y: 15 }, start: "top top" },
  { target: ".service-about", props: { opacity: 0, y: -50 }, start: "-600vh" },
  {
    target: ".card-top",
    props: { x: -800, opacity: 0, rotateZ: 0 },
    start: "-800vh",
  },
  {
    target: ".card-down",
    props: { x: 800, opacity: 0, rotateZ: 0 },
    start: "-1000vh",
    end: "-600vh",
  },
  {
    target: ".provider-img-wrapper",
    props: { opacity: 0, y: 50 },
    start: "-1200vh",
  },
  {
    target: ".providers .providers-div",
    props: { opacity: 0, x: 800 },
    start: "-1200vh",
  },
  {
    target: ".download-app .providers-div",
    props: { opacity: 0, x: -800 },
    start: "-1300vh",
  },
  {
    target: ".download-img-wrapper",
    props: { opacity: 0, y: 50 },
    start: "-1300vh",
  },
  { target: ".feedback h2", props: { opacity: 0, y: -100 }, start: "-1400vh" },
  {
    target: ".customer-info",
    props: { opacity: 0, x: -800 },
    start: "-1500vh",
  },
  {
    target: ".feedback-comment-div",
    props: { opacity: 0, y: 50 },
    start: "-1500vh",
  },
  { target: ".articles h2", props: { opacity: 0, y: -100 }, start: "-1600vh" },
  { target: ".articles-div", props: { opacity: 0, y: 100 }, start: "-1600vh" },
  { target: "footer", props: { opacity: 0, y: 200 }, start: "-1600vh" },
];

animations.forEach((animation) => {
  gsap.from(animation.target, {
    ...animation.props,
    scrollTrigger: {
      trigger: animation.target,
      scrub: 2,
      start: animation.start,
      end: animation.end || "center center",
    },
    ease: "none",
  });
});

const animationsTo = [
  { target: ".headline-div", props: { opacity: 1, x: -800 }, start: "0vh" },
    {
      target: ".headline .img-wrapper",
      props: { opacity: 1, x: 800 },
      start: "0vh",
    }
  ]
  animationsTo.forEach((animation) => {
    gsap.to(animation.target, {
      ...animation.props,
      scrollTrigger: {
        trigger: animation.target,
        scrub: 2,
        start: animation.start,
        end: animation.end || "center center",
      },
      ease: "none",
    });
  });

const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from(".navbar-lg", { y: "-100%", ease: "bounce" })
  .from(".logo", { y: "-100%", ease: "bounce" })
  .from(".navbar-sm", { y: "100%", ease: "none" })

  .from(".headline .img-wrapper", { x: "100vw", ease: "power2.in" }, 1)
  .from(".headline-div h1", { opacity: 0, ease: "power2.in" }, 1)
  .from(".headline-div p", { x: "-100vw", ease: "power2.in" }, 1)
  .from(".headline-div a", { opacity: 0, ease: "power2.in" }, 2);
