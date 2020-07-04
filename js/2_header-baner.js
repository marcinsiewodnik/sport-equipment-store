// Struktura danych do przechowywania obrazków oraz 

const slideList = [

    {
        img: 'img/nature.jpg',
        text: 'Nature'
    },

    {
        img: 'img/sunset.jpg',
        text: 'Adventure'
    },

    {
        img: 'img/yellow-mountains.jpg',
        text: 'Excitement'
    }

];

const image = document.querySelector('.slider img');
const h1 = document.querySelector('.slider h1');

// Użycie operator spread -> chcemy wykorzystać metodę tablicy

const dots = [...document.querySelectorAll('.dots span')];

const time = 5000;

// Numer aktywnego zdjęcia

let active = 0;

const changeDot = () => {

    // Funkcja odpowiedzialna z tylko za zmianę wyglądu - renderowanie
    // Renderowanie nie nastąpi automatycznie -> sami musimy o to zadbać

    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));

    dots[activeDot].classList.remove('active');

    // Aktualizacja na podstawie modelu

    dots[active].classList.add('active');
}

const changeSlide = () => {

    active++;

    // Automatyczne przechodzenie ma miejsce w jedną stronę -> w prawo

    if (active === slideList.length) active = 0;

    // Zmiana zdjęcia oraz zmiana zdjęcia

    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;

    changeDot();
}

const keyChangeSlide = (e) => {

    if (e.keyCode == 37 || e.keyCode == 39) {

        // Zrozumienie funkji setInterval() -> konieczność wyłączenia i wywołania na nowo
        // Uzyskanie intuicyjnego i płynnego interfejsu z perspektywy użytkownika

        clearInterval(indexInterval);

        e.keyCode == 37 ? active-- : active++;

        if (active === dots.length) {

            active = 0;

        } else if (active < 0) {

            active = dots.length - 1;
        }

        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;

        // Metoda changeDot -> zmiana wyglądu

        changeDot();

        indexInterval = setInterval(changeSlide, time);
    }
}

let indexInterval = setInterval(changeSlide, time);

window.addEventListener('keydown', keyChangeSlide);

const changeSlideClick = (e) => {

    // Zwrócenie uwagi na możliwość użycia this -> funkcja tradycyna a funkcja strzałkowa

    // Pierwsze wyłączmy interwałdziałający w tle -> uzyskanie płynnego interfejsu

    clearInterval(indexInterval);

    // Pobranie kropki, która została kliknięta

    const chosedDot = e.target;

    // Znalezienie indeksu 

    const activeDot = dots.findIndex(dot => dot === chosedDot);

    // Przypisanie do modelu danych

    active = activeDot;

    // Aktualizacja interfejsu

    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;

    changeDot();

    // Ponowne włączenie funkcji interwał 

    indexInterval = setInterval(changeSlide, time)
}

dots.forEach(dot => {

    dot.addEventListener('click', changeSlideClick);
});