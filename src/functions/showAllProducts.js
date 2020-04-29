
const createProductCards = quantity => {
    let i = 0
    const cards = []
    while (i < quantity) {
        const card = document.createElement('div');
        card.innerHTML += `<img src="https://via.placeholder.com/309x390.png" alt="">
        <div class="card-body" >
            <div class="new-arrivals-container__product-name">product-name</div>
            <div class="new-arrivals-container__product-price">product-price</div>
            <div class="new-arrivals-container__cart-container">
            <div class="new-arrivals-container__cart-container__add-to-cart">Add to cart</div>
                <img src="../src/assets/heart.png" alt="">
            </div>
        </div>`;
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
    })
}