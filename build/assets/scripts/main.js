$(document).ready(function () {

	resizewindow();
	$(window).resize(function (e) {
		resizewindow();
	});
});

function resizewindow() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
};


/*Показать еще*/
let cases = $('.main-cases-items-item'),
	countCases = cases.length - 3,
	maxHeight = 0;

setTimeout(() => {
	for (let i = 0; i < 3; i++) {
		console.log(cases.eq(i).outerHeight());
		maxHeight += cases.eq(i).outerHeight();
	}
	maxHeight += 48;
	$('.main-cases-items').css('max-height', maxHeight)
	console.log(maxHeight);
}, 100);

$(document).on('click', '.main-cases__more', function (e) {
	countCases -= 3;
	let casesWrap = $('.main-cases-items'),
		casesHeight = cases.innerHeight() * 3 + 48;
	casesWrap.css('max-height', casesWrap.height() + casesHeight);
	console.log(countCases);
	if (countCases >= -2 && countCases <= 0) {
		$(this).hide();
	}
});
/*Показать еще Конец*/


/*FAQ*/
$(document).on('click', '.main-faq-item__title', function (e) {
	if ($(this).hasClass('active')) {
		$(this).next().slideUp();
		$(this).removeClass('active');
	} else {
		$('.main-faq-item__title').removeClass('active');
		$('.main-faq-item__text').slideUp();
		$(this).addClass('active');
		$(this).next().slideDown()
	}
});
/*FAQ Конец*/

/*Мобильное Меню*/
$(document).on('click', '.header-info__burger', function (e) {
	$(this).toggleClass('active');
	$('.header-popup').toggleClass('active');
	$('body').toggleClass('fixed');
});
/*Мобильное Меню Конец*/


/*Скролл меню*/
$(document).on('click', '.header-menu__href, .header-popup-menu__item, .main-banner-col-bot__text', function (e) {
	e.preventDefault();
	let idElem = $(this).attr('href').split('#')[1],
		valScrollTop = $('#' + idElem).offset().top - 50;
	$('body,html').animate({
		scrollTop: valScrollTop
	}, 800);

	$('.header-info__burger').removeClass('active');
	$('.header-popup').removeClass('active');
	$('body').removeClass('fixed');
});
/*Скролл меню Конец*/

/*Табы*/
$(document).on('click', '.tabs-navigation-item', function (e) {
	e.preventDefault();
	let tabContainers = $(this).closest('.tabs').find('.tabs-tab');
	tabContainers.hide();
	tabContainers.filter(this.hash).show();
	$(this).closest('.tabs').find('.tabs-navigation-item').removeClass('active');
	$(this).addClass('active');
});
/*Табы Конец*/


/*Всплывашка*/
$(document).on('click', '.main-cases-items-item', function (e) {
	e.preventDefault();
	let casePopups = $('.case-popup');
	casePopups.filter(this.hash).fadeIn('fast');
	$('body').addClass('fixed');
	$('.case-popup').css('overflow-y', 'scroll');
});
$(document).on('click', '.popup__btn', function (e) {
	e.preventDefault();
	$('.popup').fadeIn('fast');
	$('body').addClass('fixed');
	$('.header-info__burger').removeClass('active');
	$('.header-popup').removeClass('active');
});
$(document).on('click', '.privacy__btn', function (e) {
	e.preventDefault();
	$('.popup').fadeOut('fast');
	$('.privacy').fadeIn('fast');
	$('.privacy').css('overflow-y', 'scroll');
	$('body').addClass('fixed');
});
$(document).on('click', '.popup__close, .popup__overlay', function (e) {
	$('.popup, .privacy, .case-popup').fadeOut('fast');
	$('.privacy, .case-popup').css('overflow-y', 'hidden');
	$('body').removeClass('fixed');
});
/*Всплывашка Конец*/