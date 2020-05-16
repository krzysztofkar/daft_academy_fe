const fillGridElements = (elements, data) => {
    elements.forEach((element, idx) => {
        element.innerHTML = `
            <img src="https://${data.products[idx].imageUrl}">
            <div class="img-text">${data.products[idx].brandName}</div>
            <div class="img-text shop-now">Shop now</div>
            `
    })
}

export const loadGridElements = () => {
    const gridElements = document.querySelectorAll('.imgs-container__img')
    gridElements.forEach(element => {
        element.innerHTML = `<div class="loader__container"><div class="loader"></div></div>`
    })
    fetch("https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4213&limit=5&store=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "asos2.p.rapidapi.com",
            "x-rapidapi-key": "7321141052mshaeb2932e08de95ap11a85djsnc582ae8c3979"
        }
    })
        .then(response => {
            if (response.status !== 200) {
                elements.forEach(element => {
                    element.innerHTML = `<div class="error__container">Something went wrong :( <br> Try again later</div></div>`
                })
            }
            response.json().then(data => {
                fillGridElements(gridElements, data)
            })
        })
        .catch(err => {
            gridElements.forEach(element => {
                element.innerHTML = `<div class="error__container">Something went wrong :( <br> Try again later</div></div>`
            })
        });
}
