function readMore() {
    var more = document.getElementById('more');
    var btn = document.getElementById('more-btn');

    if(more.style.display === 'none') {
        more.style.display = 'inline';
        btn.innerHTML = 'Скрыть';
    }
    else {
        more.style.display = 'none';
		btn.innerHTML = 'Читать далее'
    }
}