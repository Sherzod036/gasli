document.addEventListener('DOMContentLoaded', () => {
	const faqBlocks = document.querySelector('.faq-blocks')
	const faqDescs = document.querySelectorAll('.faq-block__desc')
	const faqIcons = document.querySelectorAll('.faq-block__hr')

	faqBlocks.addEventListener('click', function (e) {
		let icon = e.target.parentNode.childNodes[1].children[1]

		Array.from(faqIcons).map((i) => {
			i.classList.remove('faq-block__hr_disabled')
		})

		Array.from(faqDescs).map((i) => {
			i.classList.remove('faq-block__desc_active')
		})

		icon.classList.add('faq-block__hr_disabled')

		e.target.nextElementSibling.classList.add('faq-block__desc_active')
	})
})

$(function () {
	$('#fullpage').fullpage({
		//options here
	})

	$('.directions-blocks').slick({
		arrows: false,
		dots: true,
		infinite: true,
		speed: 400,
		fade: true,
		cssEase: 'linear'
	})
})
