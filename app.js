
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

function readMoreMobile() {
    var more = document.getElementById('more');
    var btn = document.getElementById('more-btn-mobile');

    if(more.style.display === 'none') {
        more.style.display = 'inline';
        btn.innerHTML = 'Скрыть';
    }
    else {
        more.style.display = 'none';
		btn.innerHTML = 'Читать далее';
    }
}
function readMoreTablet() {
	var moreTablet = document.getElementById('more-second-half')
	var btnTablet = document.getElementById('more-btn--tablet');

	if (moreTablet.style.display === 'none') {
		moreTablet.style.display = 'inline';
		btnTablet.innerHTML = 'Скрыть';
	} else {
		moreTablet.style.display = 'none';
		btnTablet.innerHTML = 'Читать далее';
	}
}