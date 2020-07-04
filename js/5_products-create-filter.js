const productsData = [

    { name: "shoes", img: "img", price: 10 },
    { name: "bag", img: "img", price: 11 },
    { name: "trousers", img: "img", price: 12 },
    { name: "shorts", img: "img", price: 13 },

    { name: "t-shirt", img: "img", price: 14 },
    { name: "shirt", img: "img", price: 15 },
    { name: "skirt", img: "img", price: 16 },
    { name: "coat", img: "img", price: 17 }
]

const container = document.querySelector(".products-panel");

const renderProducts = (products) => {

    // Wyczyszczenie listy na samym początku

    container.textContent = "";

    products.forEach(product => {

        const productHtmlElement = document.createElement('div');
        const divImgHtmlElement = document.createElement('div');
        const nameHtmlElement = document.createElement('p');
        const priceHtmlElement = document.createElement('p');

        productHtmlElement.classList.add("product-item");
        divImgHtmlElement.classList.add("img");
        nameHtmlElement.classList.add("name");
        priceHtmlElement.classList.add("price");

        nameHtmlElement.textContent = product.name
        priceHtmlElement.textContent = product.price

        productHtmlElement.appendChild(divImgHtmlElement);
        productHtmlElement.appendChild(nameHtmlElement);
        productHtmlElement.appendChild(priceHtmlElement);

        container.appendChild(productHtmlElement);
    })

}

// Renderowanie podczas wywołania strony

renderProducts(productsData);

const nameFilter = document.querySelector("#product-name");
const priceFilter = document.querySelector('#product-price');

const handleInputChange = () => {

    const nameValue = nameFilter.value;
    const priceValue = priceFilter.value;

    let filterProducts = null;

    // Filtrowanie polega na stworzeniu nowej listy produktów

    if (!(priceValue === "")) {

        filterProducts = productsData.filter(product => product.name.includes(nameValue) && product.price <= priceValue)

    } else {

        filterProducts = productsData.filter(product => product.name.includes(nameValue))
    }

    // Do metody render przekazujemy argument

    renderProducts(filterProducts);
}

// Renderowanie w momencie wpisywania warunków przez użytkownika

nameFilter.addEventListener('input', handleInputChange);
priceFilter.addEventListener('input', handleInputChange);







