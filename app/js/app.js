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

	$('.sidebar__nav-button_page').on('click', (e) => {
		e.preventDefault()
		$('html, body').animate({ scrollTop: 0 }, 500)
	})

	// TABS
	const tabLinks = $('.tab-link')
	const tabContents = $('.tab-content')

	tabLinks.eq(0).addClass('tab-link_active')
	tabContents.eq(0).addClass('tab-content_active')

	tabLinks.on('click', function (e) {
		e.preventDefault()

		const id = $(this).attr('data-id')

		tabLinks.removeClass('tab-link_active')

		tabContents.removeClass('tab-content_active')
		$(this).addClass('tab-link_active')

		$(`#${id}`).addClass('tab-content_active')
	})

	// VACANCY
	const vacancy = $('.vacancy')
	const vacancyBlocks = $('.vacancy-blocks')
	const vacancyBlock = $('.vacancy-block')
	const vacancyClose = $('.vacancy-block__close')

	vacancy.on('click', function (e) {
		e.preventDefault()

		const id = $(this).attr('vacancy-id')

		vacancyBlocks.removeClass('vacancy-blocks_active')
		vacancyBlock.removeClass('vacancy-block_active')

		vacancyBlocks.addClass('vacancy-blocks_active')

		$(`#${id}`).addClass('vacancy-block_active')
	})

	vacancyClose.on('click', function (e) {
		e.preventDefault()

		vacancyBlocks.removeClass('vacancy-blocks_active')
		vacancyBlock.removeClass('vacancy-block_active')
	})
})
