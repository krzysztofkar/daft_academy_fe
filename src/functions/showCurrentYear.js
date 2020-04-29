export const showCurrentYear = () => {
    const yearContainer = document.querySelector('.year');
    const currentYear = new Date().getFullYear();
    yearContainer.innerHTML += currentYear
}