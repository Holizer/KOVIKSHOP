const set_name = document.querySelectorAll('.set_name');
let mySwiper = new Swiper('.slider', {
	// direction: 'vertical',
	speed: 2400,
	parallax: true,
	spaceBetween: 18,
	mousewheel: {
		enabled: true,
		sensitivity: 2.4
	},
	on: {
		init: function() {
			set_name[0].classList.add('_active');
		},
	  	slideChange: function() {
		 	let slides = document.querySelectorAll('.swiper-slide');
		 	slides.forEach(function(slide) {
				let textContainer = slide.querySelector('.set_name');
		  		if (slide === slides[this.activeIndex]) {
					textContainer.classList.add('_active');
		  		} else {
					textContainer.classList.remove('_active');
		  		}
			}, this);
	  	}
	}
});
