const summary = {

    shops: 1000,
    clients: 2000,
    orders: 3000
}

const summaryShops = document.querySelector('[data-summary="shops"');
const summaryClients = document.querySelector('[data-summary="clients"');
const summaryOrders = document.querySelector('[data-summary="orders"');

const counter = (element, max) => {

    // Closures mechanism

    let i = 0;

    // helper function

    const helper = () => {

        element.textContent = i;

        i += 1;

        if (i >= max + 1) return;

        setTimeout(helper, 2)
    }

    helper();
}

// Counting will be made only once

let init = true;

const handleScrollSummary = () => {

    const scrollSize = window.scrollY;

    if (init === false) return;

    const aboutFromTop = document.querySelector('[data-section="about"').offsetTop;
    const navHeight = document.querySelector("nav").clientHeight;

    if (scrollSize >= aboutFromTop - navHeight) {

        init = false;

        counter(summaryShops, summary.shops);
        counter(summaryClients, summary.clients);
        counter(summaryOrders, summary.orders);
    }
}

window.addEventListener('scroll', handleScrollSummary);