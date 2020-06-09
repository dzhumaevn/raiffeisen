'use strict';

const changeSlide = (currentSlide) => {
	const [slide1, slide2, slide3] = document.querySelectorAll('.slide');

	switch (currentSlide) {
		case 'slide2': {
			const line = document.querySelector('.line');
			slide1.classList.add('animate__slideOutLeft');
			slide1.onanimationend = () => line.remove();
			slide2.classList.add('animate__slideInRight');
			break;
		}
		case 'slide3': {
			slide2.style.transform = 'none';
			slide2.classList.add('animate__faster', 'animate__slideOutLeft');
			slide3.classList.add('animate__slideInRight');

			const mastercard = document.querySelector('.mastercard');
			const text = document.querySelector('.text');
			const phonePackshot = document.querySelector('.phonePackshot');
			const slide3Button = document.querySelector('#slide3 .button');

			slide3.onanimationend = () => {
				mastercard.classList.add('animate__fadeIn');
				text.classList.add('animate__fadeIn');
				phonePackshot.classList.add('animate__fadeIn');
				slide3Button.classList.replace('animate__fadeOut','animate__fadeIn');
			};

			slide3Button.addEventListener('click', () => FbPlayableAd.onCTAClick());
			break
		}
	}
};
