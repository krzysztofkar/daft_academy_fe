export const fillNewArrivalsCards = (cards, data) => {
    cards.forEach((card, idx) => {
        card.style.height = ""
        card.style.width = ""
        card.innerHTML = `
            <img src="https://${data.products[idx].imageUrl}" alt = "">
            <div class="card-body" >
                <div class="new-arrivals-container__product-name">${data.products[idx].brandName}</div>
                <div class="new-arrivals-container__product-price">${data.products[idx].price.current.text}</div>
                <div class="new-arrivals-container__cart-container">
                    <div class="new-arrivals-container__cart-container__add-to-cart">Add to cart</div>
                    <img src="../src/assets/heart.png" alt="">
                </div>
            </div>
            `
    })
}

export const loadNewArrivalsElements = () => {
    const newArrivalsCards = document.querySelectorAll('.new-arrivals-container__products-container .card')
    newArrivalsCards.forEach(card => {
        card.style.height = "390px"
        card.style.width = "309px"
        card.innerHTML = `<div class="loader__container"><div class="loader"></div></div>`
    })
    fetch("https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4210&limit=4&store=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "asos2.p.rapidapi.com",
            "x-rapidapi-key": "7321141052mshaeb2932e08de95ap11a85djsnc582ae8c3979"
        }
    })
        .then(response => {
            if (response.status !== 200) {
                newArrivalsCards.forEach(card => {
                    card.style.height = "390px"
                    card.style.width = "309px"
                    element.innerHTML = `<div class="error__container">Something went wrong :( <br> Try again later</div></div>`
                })
            }
            response.json().then(data => {
                fillNewArrivalsCards(newArrivalsCards, data)
            })
        })
        .catch(err => {
            newArrivalsCards.forEach(card => {
                card.style.height = "390px"
                card.style.width = "309px"
                card.innerHTML = `<div class="error__container">Something went wrong :( <br> Try again later</div></div>`
            })
        });
}
