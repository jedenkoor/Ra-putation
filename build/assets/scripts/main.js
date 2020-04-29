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
	countCases = cases.length - 3;
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
	if($(this).hasClass('active')){
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