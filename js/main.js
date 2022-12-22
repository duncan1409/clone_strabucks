const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
	searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
	//누르면 통합검색 생성
	searchEl.classList.add('focused');
	searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function () {
	//풀리면 통합검색 제거 focus<->blur
	searchEl.classList.remove('focused');
	searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

//_.throttle(함수, 시간)
//gsap
window.addEventListener('scroll', _.throttle(function () {
	console.log(window.scrollY);
	if (window.scrollY > 500) {
		//Badge 숨기기
		gsap.to(badgeEl, .3, {
			opacity: 0,
			display: 'none'
		});
	} else {
		//Badge 보이기
		gsap.to(badgeEl, .3, {
			opacity: 1,
			display: 'block'
		});
	}
}, 300));


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
	gsap.to(fadeEl, 1, {
		delay: (index + 1) * .7, //순차적으로 보여주는 것에 주의... 0.7, 1.4, 2.1...
		opacity: 1
	});
})


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
	direction: 'vertical', // 수직 슬라이드
	autoplay: true, // 자동재생
	loop: true //반복재생
});
new Swiper('.promotion .swiper-container', {
	//direction: 'horizontal',
	slidesPerView: 3,
	spaceBetween: 10,
	centeredSlides: true,
	loop: true,
	autoplay: {
		delay: 5000
	},
	pagination: {
		el: '.promotion .swiper-pagination', //페이지 번호 요소의 선택자.
		clickable: true //사용자의 페이지 번호 요소 제어
	},
	navigation: {
		prevEl: '.promotion .swiper-prev',
		nextEl: '.promotion .swiper-next'
	}
});



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
	isHidePromotion = !isHidePromotion;
	if (isHidePromotion) {
		//숨김처리!
		promotionEl.classList.add('hide');
	} else {
		//보임처리!
		promotionEl.classList.remove('hide');
	
	}
});