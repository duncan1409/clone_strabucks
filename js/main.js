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

