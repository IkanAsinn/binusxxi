$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: ( $('.owl-carousel .items').length > 5 ),
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