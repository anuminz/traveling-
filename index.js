$(document).ready(function () {
  // Smooth Scroll
  $('a[href^="#"]').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
    }, 800);
  });

  // Form Submit
  $('#contactForm').submit(function (e) {
    e.preventDefault();
    alert('Thank you for contacting us!');
    $(this).trigger('reset');
  });
});
