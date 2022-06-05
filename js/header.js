$(document).ready(() => {
  $(window).on('scroll', () => {
    if ($(this).scrollTop() > 50) {
      // $('.sidebar-nav').css('background-color', '#fff');
      // console.log('harusnya ini bisa');
      $('.header-sticky').addClass('is-fixed');
    } else {
      $('.header-sticky').removeClass('is-fixed');
    }
  });
})