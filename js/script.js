$('.banner-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: true,
  prevArrow: '<i class="fas fa-angle-left prev"></i>',
  nextArrow: '<i class="fas fa-angle-right next"></i>',
  autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.testi-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

jQuery(document).ready(function ($) {
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});

$(document).ready(function () {

  $("#colorful").colorfulTab();

  $("#colorful-elliptic").colorfulTab({
    theme: "elliptic"
  });

  $("#colorful-flatline").colorfulTab({
    theme: "flatline"
  });

  $("#colorful-background-image").colorfulTab({
    theme: "flatline",
    backgroundImage: "true",
    overlayColor: "#002F68",
    overlayOpacity: "0.8"
  });

});

$('.market-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});