// Dane przechoywane w obiekcie -> model

const summary = {

    shops: 1000,
    clients: 2000,
    orders: 3000
}

// Pobieramy elementy summary

const summaryShops = document.querySelector('[data-summary="shops"');
const summaryClients = document.querySelector('[data-summary="clients"');
const summaryOrders = document.querySelector('[data-summary="orders"');


const counter = (element, max) => {

    // Mechanizm closures

    let i = 0;

    // Stworzenie funkcji pomocznicznej -> wykorzystanie mechanizmu closures

    const helper = () => {

        element.textContent = i;

        i += 1;

        if (i >= max + 1) return;

        // Zrozumienie działania funkcji setTimeout()

        setTimeout(helper, 2)
    }

    helper();
}

// Zdefiniowanie trigera wywołującego obliczanie

// Zmienna init musi być zadeklarowana poza handleScrollSummary 
// Flaga -> odliczanie wykona się tylko raz

let init = true;

const handleScrollSummary = () => {

    const scrollSize = window.scrollY;

    if (init === false) return;


    // const aboutHeight = document.querySelector('[data-section="about"').offsetHeight;
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


















