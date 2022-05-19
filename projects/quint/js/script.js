//gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
// ScrollSmoother.create({
//   smooth: 1.15,
//   effects: true,
//   smoothTouch: 0.1,
// });


$(".faq-1").click(() => {
  $(".faq-1 .faq-a").slideToggle(350);
  $(".faq-1 .faq-border-box").toggleClass("faq-border-box-filled");
  tl.play(0);
});
$(".faq-2").click(() => {
  $(".faq-2 .faq-a").slideToggle(350);
  $(".faq-2 .faq-border-box").toggleClass("faq-border-box-filled");
  tl.play(0);
});
$(".faq-3").click(() => {
  $(".faq-3 .faq-a").slideToggle(350);
  $(".faq-3 .faq-border-box").toggleClass("faq-border-box-filled");
  tl.play(0);
});
$(".faq-4").click(() => {
  $(".faq-4 .faq-a").slideToggle(350);
  $(".faq-4 .faq-border-box").toggleClass("faq-border-box-filled");
  tl.play(0);
});

const usecaseOneActive = () => {
  $(".usecase-op-box-1").removeClass("usecase-op");
  $(".usecase-op-box-2").addClass("usecase-op");
  $(".usecase-op-box-3").addClass("usecase-op");
  $(".usecase-video-1").css({ opacity: "1" });
  $(".usecase-video-2").css({ opacity: "0" });
  $(".usecase-video-3").css({ opacity: "0" });
};
const usecaseTwoActive = () => {
  $(".usecase-op-box-2").removeClass("usecase-op");
  $(".usecase-op-box-1").addClass("usecase-op");
  $(".usecase-op-box-3").addClass("usecase-op");
  $(".usecase-video-2").css({ opacity: "1" });
  $(".usecase-video-1").css({ opacity: "0" });
  $(".usecase-video-3").css({ opacity: "0" });
};
const usecaseThreeActive = () => {
  $(".usecase-op-box-3").removeClass("usecase-op");
  $(".usecase-op-box-2").addClass("usecase-op");
  $(".usecase-op-box-1").addClass("usecase-op");
  $(".usecase-video-3").css({ opacity: "1" });
  $(".usecase-video-2").css({ opacity: "0" });
  $(".usecase-video-1").css({ opacity: "0" });
};
const usecaseActiveInit = () => {
  usecaseOneActive();
  setTimeout(() => {
    usecaseTwoActive();
    setTimeout(() => {
      usecaseThreeActive();
      setTimeout(() => {
        usecaseActiveInit();
      }, 5000);
    }, 5000);
  }, 5000);
};
usecaseActiveInit();

$(".usecase-op-box-1").hover(() => {
  usecaseOneActive();
});
$(".usecase-op-box-2").hover(() => {
  usecaseTwoActive();
});
$(".usecase-op-box-3").hover(() => {
  usecaseThreeActive();
});

$(".open-mob-header.mob-header-icon").click(() => {
  $(".mob-header-icon").removeClass("open-mob-header");
  $(".mob-header-icon").addClass("close-mob-header");
  $(".mob-header").css({ display: "block" });
});

$(".close-mob-header").click(() => {
  $(".mob-header-icon").removeClass("close-mob-header");
  $(".mob-header-icon").addClass("open-mob-header");
  $(".mob-header").css({ display: "none" });
});


var sectionHeadingAnim = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-heading-box-dark",
    start: "top 90%",
  },
});
SectionHeadingDarkH2 = new SplitText(".section-heading-box-dark h2", {
  type: "chars",
});
SectionHeadingDarkH2chars = SectionHeadingDarkH2.chars;

SectionHeadingDarkH3 = new SplitText(".section-heading-box-dark h3", {
  type: "lines",
});
SectionHeadingDarkH3lines = SectionHeadingDarkH3.lines;

sectionHeadingAnim
  .fromTo(
    SectionHeadingDarkH2chars,
    {
      x: "10rem",
      opacity: 0,
    },
    {
      x: "0",
      opacity: 1,
      stagger: 0.1,
      ease: Power4.easeOut,
      duration: 1.5,
    }
  )
  .fromTo(
    SectionHeadingDarkH3lines,
    {
      y: "250%",
    },
    {
      y: "0",
      stagger: 0.1,
      ease: Power4.easeOut,
      duration: 1.5,
    },
    0.5
  );
