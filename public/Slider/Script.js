$(document).ready(function () {
  
  $(".headerSlider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<", ">"],
    autoplay: true,
    autoplayTimeout: 3000,
    animateIn: "animate__zoomIn",
    animateOut: "animate__fadeOut",
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".ourPartner").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<", ">"],
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 4,
      },
      800: {
        items: 5,
      },
      1000: {
        items: 6,
      },
    },
  });

  $(".HappyStudent").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<", ">"],
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".CourseImgCard").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2500,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

});
