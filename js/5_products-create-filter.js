// This data could be fetched from an external source

let productsData = [

    { name: "shoes", src: "img/shoes.png", price: 10 },
    { name: "bag", src: "img/shoes.png", price: 11 },
    { name: "trousers", src: "img/shoes.png", price: 12 },
    { name: "shorts", src: "img/shoes.png", price: 13 },
    { name: "t-shirt", src: "img/shoes.png", price: 14 },
    { name: "shirt", src: "img/shoes.png", price: 15 },
    { name: "skirt", src: "img/shoes.png", price: 16 },
    { name: "coat", src: "img/shoes.png", price: 17 }

]

// I could download the data from API using fetch -> asynchronicity

// const API = ""

// const fetchData = () => {

//     fetch(API)

//         .then(response => {

//             console.log(response);

//             if (response.ok) {

//                 return response;
//             }

//             throw Error(response.status);

//         })
//         .then(response => response.json())
//         .then(data => {

//             if (data instanceof Array) {

//                 productsData = [...data];

//                 renderProducts(productsData);
//             }

//             throw Error("Invalid data type")

//         })
//         .catch(error => console.log(`Error ${error}`));
// }

// fetchData();

const container = document.querySelector(".products-panel");

const renderProducts = (products) => {

    // Clear the list at the beginning

    container.textContent = "";

    products.forEach(product => {

        const productHtmlElement = document.createElement('div');
        const divImgHtmlElement = document.createElement('div');
        const nameHtmlElement = document.createElement('p');
        const priceHtmlElement = document.createElement('p');

        productHtmlElement.classList.add("product-item");
        divImgHtmlElement.classList.add("img");

        const img = document.createElement('img');
        img.setAttribute('src', product.src);

        console.log(product.src);

        divImgHtmlElement.appendChild(img);

        nameHtmlElement.classList.add("name");
        priceHtmlElement.classList.add("price");

        nameHtmlElement.textContent = product.name
        priceHtmlElement.textContent = product.price + " $"

        productHtmlElement.appendChild(divImgHtmlElement);
        productHtmlElement.appendChild(nameHtmlElement);
        productHtmlElement.appendChild(priceHtmlElement);

        container.appendChild(productHtmlElement);
    })

}

// render the products when user enters the page

renderProducts(productsData);

const nameFilter = document.querySelector("#product-name");
const priceFilter = document.querySelector('#product-price');

const handleInputChange = () => {

    const nameValue = nameFilter.value;
    const priceValue = priceFilter.value;

    let filterProducts = null;

    // Filter logic conditions

    if (!(priceValue === "")) {

        filterProducts = productsData.filter(product => product.name.includes(nameValue) && product.price <= priceValue)

    } else {

        filterProducts = productsData.filter(product => product.name.includes(nameValue))
    }

    renderProducts(filterProducts);
}

// Rendering when user writes something

nameFilter.addEventListener('input', handleInputChange);
priceFilter.addEventListener('input', handleInputChange);