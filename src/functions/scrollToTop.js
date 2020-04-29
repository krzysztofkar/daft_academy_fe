export const scrollToTop = () => {
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