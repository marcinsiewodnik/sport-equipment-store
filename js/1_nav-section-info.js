function changeText() {

    const scrollSize = window.scrollY;

    const aboutHeight = document.querySelector('[data-section="about"').offsetHeight;

    const aboutHeightWithoutPadding = document.querySelector('[data-section="about"').clientHeight;

    const productsHeight = document.querySelector('[data-section="products"').offsetHeight;
    const contactHeight = document.querySelector('[data-section="contact"').offsetHeight;

    const aboutFromTop = document.querySelector('[data-section="about"').offsetTop;
    const productsFromTop = document.querySelector('[data-section="products"').offsetTop;
    const contactFromTop = document.querySelector('[data-section="contact"').offsetTop;

    const navHeight = document.querySelector("nav").clientHeight;

    const txt = document.querySelector('.section-info');

    if (scrollSize < aboutFromTop - navHeight - 1) {

        txt.textContent = "Welcome in our store!"

    } else if (scrollSize < aboutFromTop - navHeight + aboutHeight - 1) {

        txt.textContent = "About"

    } else if (scrollSize < productsFromTop - navHeight + productsHeight - 1) {

        txt.textContent = "Products"

    } else {

        txt.textContent = "Contact"
    }
};


window.addEventListener('scroll', changeText);