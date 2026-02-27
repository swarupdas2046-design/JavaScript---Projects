gsap.to("nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "11%",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "main",
    scroller: "body",
    // markers: true,
    start: "top -20%",
    end: "top -80%",
    scrub: 2,
  },
});

gsap.from(".about-us img, .about-us-text", {
  y: 50,
  opacity: 0,
  duration: 2,
  // stagger: 0.4,
  scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from(".card", {
  scale: 0.9,
  opacity: 0,
  duration: 1,
  // stagger: 0.4,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 55%",
    scrub: 2,
  },
});

gsap.from("#quote-left", {
  y: -70,
  x: -70,

  scrollTrigger: {
    trigger: "#quote-left",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#quote-right", {
  y: 70,
  x: 70,

  scrollTrigger: {
    trigger: "#quote-left",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from(".page4 h1", {
  y: 50,
  // stagger: 0.4,
  scrollTrigger: {
    trigger: ".page4 h1",
    scroller: "body",
    // markers: true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

let cursor = document.querySelector(".cursor");
let blur = document.querySelector(".cursor-blur");
document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.y + 30 + "px";
  cursor.style.left = e.x + "px";
  blur.style.top = e.y + "px";
  blur.style.left = e.x + "px";
});

let allh4 = document.querySelectorAll("nav h4");

allh4.forEach((h4) => {
  h4.addEventListener("mouseenter", () => {
    cursor.style.scale = 3;
    cursor.style.border = "1px solid #fff";
    cursor.style.backgroundColor = "transparent";
  });
  h4.addEventListener("mouseleave", () => {
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #95c11e";
    cursor.style.backgroundColor = "#95c11e";
  });
});
