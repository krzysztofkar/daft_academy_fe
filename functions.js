const scrollToTop = () => {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    window.addEventListener("scroll", () => {
        let y = window.scrollY;
        if (y > 0.5 * window.innerHeight) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    })
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    })
};

const showAllProducts = () => {
    const allProductsButton = document.querySelector('.new-arrivals-container__all-products-button')
    const hiddenProducts = document.querySelectorAll('.hidden-product');
    allProductsButton.addEventListener('click', () => {
        [...hiddenProducts].map(hiddenProduct => {
            hiddenProduct.classList.remove('hidden-product')
        })

    })
}

const showCurrentYear = () => {
    const yearContainer = document.querySelector('.year');
    const currentYear = new Date().getFullYear();
    yearContainer.innerHTML += currentYear
}

export const functions = () => {
    scrollToTop()
    showAllProducts()
    showCurrentYear()
}