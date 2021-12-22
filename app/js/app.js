$(function () {
	$('.faq-block').on('click', function () {
		$('.faq-block__desc').removeClass('faq-block__desc_active')
		$('.faq-block__hr').removeClass('faq-block__hr_disabled')

		$(this).find('.faq-block__hr').addClass('faq-block__hr_disabled')
		$(this).find('.faq-block__desc').addClass('faq-block__desc_active')
	})

	$('.directions-blocks').slick({
		arrows: false,
		dots: true,
		infinite: true,
		speed: 400,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 5000
	})

	$('.big-block').slick({
		arrows: true,
		dots: false,
		infinite: true,
		speed: 400
	})

	$('.phone').inputmask('+998 99 999 99 99')

	const video = $('.video')

	function fullpageInit() {
		$('#fullpage').fullpage({
			licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
			onLeave: function (origin, destination, direction) {
				if (destination.index == 2) {
					video[0].play()
				} else {
					video[0].pause()
				}
			}
		})
	}

	if ($(window).width() > 992) fullpageInit()
})
