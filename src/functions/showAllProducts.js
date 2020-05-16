import { fillNewArrivalsCards } from './loadNewArrivals'

const createProductCards = quantity => {
    let i = 0
    const cards = []
    while (i < quantity) {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        console.log(card)
        cards.push(card)
        i++;
    }
    return cards
};

export const showAllProducts = () => {
    const allProductsButton = document.querySelector('.new-arrivals-container__all-products-button')
    const productsContainer = document.querySelector('.new-arrivals-container__products-container')
    allProductsButton.addEventListener('click', () => {
        const cards = createProductCards(4)
        cards.map(card => productsContainer.appendChild(card))
        cards.forEach(card => {
            card.style.height = "390px"
            card.style.width = "309px"
            card.innerHTML = `<div class="loader__container"><div class="loader"></div></div>`
        })
        fetch("https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4208&limit=4&store=US", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "asos2.p.rapidapi.com",
                "x-rapidapi-key": "30ef9745aamsh6b741f04efb2d6dp12d0f0jsn8babf77fe24c"
            }
        })
            .then(response => {
                if (response.status !== 200) {
                    cards.forEach(element => {
                        card.style.height = "390px"
                        card.style.width = "309px"
                        element.innerHTML = `<div class="error__container">Something went wrong :( <br> Try again later</div></div>`
                    })
                }
                response.json().then(data => {
                    fillNewArrivalsCards(cards, data)
                })
            })
            .catch(err => {
                cards.forEach(card => {
                    card.style.height = "390px"
                    card.style.width = "309px"
                    card.innerHTML = `<div class="error__container">Something went wrong :( <br> Try again later</div></div>`
                })
            });
        allProductsButton.style.display = "none";
    })

}
