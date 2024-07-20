document.addEventListener("DOMContentLoaded", function () {
  var tl = gsap.timeline({ paused: true });
  var overlay = document.querySelector(".overlay-container");

  tl.to(
    overlay,
    {
      duration: 0.5,
      y: 0,
      ease: "power3.inOut",
    },
    "<"
  );
  tl.to(
    ".overlay-container .overlay-nav",
    {
      duration: 1,
      opacity: 1,
    },
    "<"
  );
  tl.to(
    ".overlay-video .video",
    {
      duration: 1,
      height: "200px",
      ease: "power3.inOut",
    },
    "<"
  );

  tl.from(
    ".overlay-menu .menu a ",
    {
      duration: 0.5,
      delay: 0.5,
      y: 20,
      stagger: 0.1,
      opacity: 0,
      ease: "expo.in",
    },
    "<"
  ).to(
    ".overlay-menu .menu a ",
    {
      duration: 0.5,
      delay: 0.5,

      y: 0,
      stagger: 0.1,
      opacity: 1,
      ease: "expo.in",
    },
    "<"
  );

  tl.from(
    ".overlay-menu .overlay-menu-btn ",
    {
      y: 50,
      opacity: 0,
      ease: "expo.in",
    },
    "<"
  ).to(".overlay-menu .overlay-menu-btn ", {
    duration: 0.5,
    y: 0,
    opacity: 1,
    ease: "expo.in",
  });
  tl.to(
    ".footer-span",
    {
      delay: 1,
      opacity: 1,
    },
    "<"
  );
  tl.to(".overlay-footer ", {
    opacity: 1,
  }).reverse();

  var menubtn = document.querySelector(".menu-btn");
  var overlaymenu = document.querySelector(".overlay-nav .menu-btn");
  menubtn.addEventListener("click", function () {
    console.log(overlay);
    tl.play();
  });

  overlaymenu.addEventListener("click", function () {
    console.log(overlay);
    tl.reverse();
  });
});
