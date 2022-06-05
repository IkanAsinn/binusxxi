$(document).ready(function () {
  $('.autoWidth').lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $('#autoWidth').removeClass('cS-hidden');
    }
  });

  $(window).on('scroll', () => {
    if ($(this).scrollTop > 50) {
      $('.sidebar-nav').css('background-color', '#fff');
      console.log('harusnya ini bisa');
    } else {
      $('.sidebar-nav').css('background-color', 'transparent');
    }
  })
});