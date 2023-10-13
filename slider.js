if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)) {

    const swiper = new Swiper('.swiper', {

        direction: 'horizontal',
        loop: true,
        speed: 500,
        effect: 'slider',
        slidesPerView: 'auto',

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }

    });

}

const btnShowMore = document.querySelector('.slider__btn-show-more');
const sliderItems = document.querySelector('.slider__items');


btnShowMore.addEventListener('click', function() {

    if (sliderItems.classList.contains('slider__items--show-all')) {
        sliderItems.classList.remove('slider__items--show-all');
        btnShowMore.classList.remove('slider__btn-show-more--open')
        btnShowMore.textContent = "Показать все"

    } else {
        sliderItems.classList.add('slider__items--show-all');
        btnShowMore.textContent = "Скрыть"
        btnShowMore.classList.add('slider__btn-show-more--open')
    }
});