//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
});

$('.menu__more').click(function() {
  $(this).parent().next().slideToggle();
});

if (window.innerWidth < 1022) {
  $('.menu__arrow').click(function() {
    $(this).next().toggleClass('menu__drop--show');
    $(this).toggleClass('menu__arrow--show');
  });
};
