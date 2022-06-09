$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    rewind: true,
    nav: true,
    dots: false,
    // slideBy: 5,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })
});