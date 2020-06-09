'use strict';

const renderCashback = (type, cashback) => {
	const productType = document.querySelector('.productType');
	const productCashback = document.querySelector('.productCashback');
	const sum = document.querySelector('.sum');

	productType.textContent = type;
	productCashback.innerHTML = `+${cashback},<span class="rest">00₽</span>`;

	productType.classList.replace('animate__fadeOut', 'animate__fadeIn');
	productCashback.classList.replace('animate__fadeOut', 'animate__fadeIn');

	productCashback.onanimationend = () => {
		productType.classList.replace('animate__fadeIn', 'animate__fadeOut');
		productCashback.classList.replace('animate__fadeIn', 'animate__fadeOut');
	};

	const prevSum = sum.textContent.substring(0, sum.textContent.length - 4);
	sum.textContent = `${Number(prevSum) + cashback},00₽`;
};
