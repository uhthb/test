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