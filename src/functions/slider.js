export const slider = () => {
    const carousel = document.querySelector('.carousel')

    const buttonPrev = document.querySelector('.carousel__button--prev')
    const buttonNext = document.querySelector('.carousel__button--next')

    const halfProductWidth = 170;

    buttonPrev.addEventListener('click', () => {
        let pixelsFromLeft = carousel.scrollLeft;

        if ((pixelsFromLeft - halfProductWidth) <= 0) {
            carousel.scrollTo(0, 0);
        } else {
            carousel.scrollTo((pixelsFromLeft - halfProductWidth), 0);
        }
    });

    buttonNext.addEventListener('click', () => {
        let pixelsFromLeft = carousel.scrollLeft
        let carouselWidth = carousel.scrollWidth;

        if ((pixelsFromLeft + halfProductWidth) >= carouselWidth) {
            carousel.scrollTo(carouselWidth, 0);
        } else {
            carousel.scrollTo((pixelsFromLeft + halfProductWidth), 0);
        }
    });



}