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

const fillSliderCards = (cards, data) => {
    cards.forEach((card, idx) => {
        card.innerHTML = `
            <img class="card-img-top" src="https://${data.products[idx].imageUrl}" alt="Card image cap">
            <div class="product-description">
              <div class="product-description__name">
                ${data.products[idx].brandName}
              </div>
              <div class="product-description__price">
                ${data.products[idx].price.current.text}
              </div>
            </div>
            `
    })
}

export const loadSliderElements = () => {
    const carouselCards = document.querySelectorAll('.carousel-card .card')
    carouselCards.forEach(card => {
        card.innerHTML = `<div class="loader__container"><div class="loader"></div></div>`
    })
    fetch("https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=5&store=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "asos2.p.rapidapi.com",
            "x-rapidapi-key": "7321141052mshaeb2932e08de95ap11a85djsnc582ae8c3979"
        }
    })
        .then(response => {
            if (response.status !== 200) {
                carouselCards.forEach(element => {
                    element.innerHTML = `<div class="error__container">Something went wrong :( <br> Try again later</div></div>`
                })
            }
            response.json().then(data => {
                fillSliderCards(carouselCards, data)
            })
        })
        .catch(err => {
            carouselCards.forEach(card => {
                card.innerHTML = `<div class="error__container">Something went wrong :( <br> Try again later</div></div>`
            })
        });
}
