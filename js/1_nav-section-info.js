function changeText() {

    const scrollSize = window.scrollY;

    const aboutHeight = document.querySelector('[data-section="about"').offsetHeight;
    const productsHeight = document.querySelector('[data-section="products"').offsetHeight;

    const aboutFromTop = document.querySelector('[data-section="about"').offsetTop;
    const productsFromTop = document.querySelector('[data-section="products"').offsetTop;

    const navHeight = document.querySelector("nav").offsetHeight;

    const txt = document.querySelector('.section-info');

    if (scrollSize < aboutFromTop - navHeight) {

        txt.textContent = "Welcome in our store!"

    } else if (scrollSize < aboutFromTop - navHeight + aboutHeight) {

        txt.textContent = "About"

    } else if (scrollSize < productsFromTop - navHeight + productsHeight) {

        txt.textContent = "Products"

    } else {

        txt.textContent = "Contact"
    }
};


window.addEventListener('scroll', changeText);