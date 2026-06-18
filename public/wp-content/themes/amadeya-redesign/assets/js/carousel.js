(function(){
	document.addEventListener('DOMContentLoaded', function(){
		// Инициализация Swiper для карусели врачей
		const expertsSwiper = new Swiper('.experts-swiper', {
			// Основные настройки
			slidesPerView: 5,
			spaceBetween: 20,
			loop: true,
			centeredSlides: false,
			
			// Автоматическая прокрутка (опционально)
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			
			// Навигация
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			
			// Пагинация для мобильной версии
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				dynamicBullets: true,
			},
			
			// Эффекты
			effect: 'slide',
			speed: 600,
			
			// Адаптивность
			breakpoints: {
				// Мобильные устройства - показываем 2 карточки
				320: {
					slidesPerView: 2,
					spaceBetween: 12,
					centeredSlides: false,
				},
				// Планшеты
				768: {
					slidesPerView: 2,
					spaceBetween: 16,
					centeredSlides: false,
				},
				// Небольшие экраны
				1024: {
					slidesPerView: 3,
					spaceBetween: 20,
					centeredSlides: false,
				},
				// Средние экраны
				1200: {
					slidesPerView: 4,
					spaceBetween: 20,
					centeredSlides: false,
				},
				// Большие экраны
				1400: {
					slidesPerView: 5,
					spaceBetween: 20,
					centeredSlides: false,
				},
			},
			
			// Дополнительные настройки
			grabCursor: true,
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
			
			// События
			on: {
				init: function() {
					console.log('Swiper инициализирован');
				},
				slideChange: function() {
					console.log('Слайд изменен на:', this.realIndex);
				},
			},
		});

		// Инициализация Swiper для карусели отзывов
		const reviewsSwiper = new Swiper('.reviews-swiper', {
			// Основные настройки
			slidesPerView: 2,
			spaceBetween: 30,
			loop: true,
			centeredSlides: false,
			
			// Навигация
			navigation: {
				nextEl: '.reviews-button-next',
				prevEl: '.reviews-button-prev',
			},
			
			// Эффекты
			effect: 'slide',
			speed: 600,
			
			// Адаптивность
			breakpoints: {
				// Мобильные устройства - показываем 1 карточку
				320: {
					slidesPerView: 1,
					spaceBetween: 16,
					centeredSlides: true,
				},
				// Планшеты
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
					centeredSlides: false,
				},
				// Десктоп
				1024: {
					slidesPerView: 2,
					spaceBetween: 30,
					centeredSlides: false,
				},
			},
			
			// Дополнительные настройки
			grabCursor: true,
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
		});
	});
})();