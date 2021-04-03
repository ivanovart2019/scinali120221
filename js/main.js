
//------------- настройка выбора select --------------------
$('.select__checked').on('click', function () {
 $('.select__dropdown').toggleClass('select__dropdown_open');
});
$('.select__option').on('click', function () {
 var value = $(this).attr('data-value');
 $('#select-type').val(value);
 $('.select__checked').text(value);
 $('.select__dropdown').toggleClass('select__dropdown_open');
});
$("a[href^='#']").click(function () {
 var _href = $(this).attr("href");
 $("html,body").animate({ scrollTop: $(_href).offset().top - 20 + "px" });
});

//------------ form select phone -------------------
$(document).on('ready', function () {
 //$("#phone").mask("+7 (999) 999-99-99");
 $('input[type="tel"]').mask("+7 (999) 999-99-99");
});




//-------------------- Показать/Скрыть верхнее меню ---------

$('.menu-button').click(function () {
 $('.menu-button__line:nth-child(1)').toggleClass('first');
 $('.menu-button__line:nth-child(2)').toggleClass('middle');
 $('.menu-button__line:nth-child(3)').toggleClass('last');
 $('.menu').toggleClass('.menu_active');
});

$('.menu a').click(function () {
 $('.menu-button__line:nth-child(1)').toggleClass('first');
 $('.menu-button__line:nth-child(2)').toggleClass('middle');
 $('.menu-button__line:nth-child(3)').toggleClass('last');
 $('.menu').removeClass('.menu_active');
 $('.menu').toggleClass('menu_active');
});


//--------------- slick-slider ---------------
$(document).on('ready', function () {
 $(".vertical-center").slick({
  dots: true,
  arrows: true,
  fade: true,
 });
});



//================================ func do end posle =================================
$(function () {
 $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({ default_offset_pct: 0.9 });
});

//============ до и после =============
$(window).load(function () {
 $('.before_after').twentytwenty({
  before_label: 'Без скинали',
  after_label: 'Со скинали'
 });
 $(".before_slider").slick({
  draggable: false,
  dots: true,
  dotsClass: 'before-slider__dots',
  prevArrow: $('.arrow-left'),
  nextArrow: $('.arrow-right')
 });
 $('.menu-button').on('click', function () {
  $('.menu').toggleClass('menu_active');
 });
})


//------------------"кнопка наверх" ---------------

$(function () {
 $(window).on('scroll', function () {
  if ($(this).scrollTop() != 0) {
   $('#page__up').fadeIn();
  } else {
   $('#page__up').fadeOut();
  }
 });
 $('#page__up').on('click', function () {
  $('body,html').animate({ scrollTop: 0 }, 800);
 });
});

