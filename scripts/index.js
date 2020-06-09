'use strict';

window.onload = () => {
	const animateLine = () => line.classList.add('start');
	const productAnimToggle = (target, state) => {
		if (state) {
			target.classList.replace('dragging', 'soarAnim');
		} else {
			target.classList.replace('soarAnim', 'dragging');
		}
	};
	const hideProduct = (product) => {
		product.style.display = 'none';
	};

	const state = {
		currentSlide: 'slide1',
		productsCounter: 0,
	};

	const line = document.querySelector('.line');
	const buttonPlay = document.querySelector('.button.play');
	setTimeout(animateLine, 500);
	buttonPlay.addEventListener('click', () => {
		state.currentSlide = 'slide2';
		changeSlide(state.currentSlide);
	});

	const position = {x: 0, y: 0};
	const products = document.querySelectorAll('#slide2 .product');
	products.forEach((product) => {
		interact(product).draggable({
			listeners: {
				start(event) {
					position.x = 0;
					position.y = 0;
					productAnimToggle(event.target, false);
				},
				move(event) {
					position.x += event.dx;
					position.y += event.dy;
					event.target.style.transform =
						`translate(${position.x}px, ${position.y}px)`;
				},
				end(event) {
					productAnimToggle(event.target, true);
				}
			}
		});
	});

	const card = document.querySelector('.card');
	interact(card)
		.dropzone({
			ondrop: function ({ relatedTarget }) {
				state.productsCounter += 1;
				relatedTarget.remove();
				card.classList.remove('dragEnter');

				const { productType, cashback } = relatedTarget.dataset;
				if (state.productsCounter < 4) {
					renderCashback(productType, +cashback);
				} else {
					renderCashback(productType, +cashback);
					state.currentSlide = 'slide3';
					setTimeout(() => changeSlide(state.currentSlide), 1500);
				}
			},
		})
		.on('dragenter', function (event) {
			card.classList.add('dragEnter');
		})
		.on('dragleave', function (event) {
			card.classList.remove('dragEnter');
		});
};
