// Data structure to store info about images

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

// Spread operator -> creating a table

const dots = [...document.querySelectorAll('.dots span')];

const time = 5000;

// Active number -> it will be changed during execution

let active = 0;

const changeDot = () => {

    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));

    dots[activeDot].classList.remove('active');

    dots[active].classList.add('active');
}

const changeSlide = () => {

    active++;

    // going right

    if (active === slideList.length) active = 0;

    // change image and text content

    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;

    changeDot();
}

const keyChangeSlide = (e) => {

    // This happens when a user click a button on the keyboard

    if (e.keyCode == 37 || e.keyCode == 39) {

        // clearInterval -> necessity to invoke before anothen invoking setInterval()

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

    clearInterval(indexInterval);

    // check which dot has been clicked

    const chosedDot = e.target;

    const activeDot = dots.findIndex(dot => dot === chosedDot);

    active = activeDot;

    // Interface actualization

    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;

    changeDot();

    indexInterval = setInterval(changeSlide, time)
}

dots.forEach(dot => {

    dot.addEventListener('click', changeSlideClick);
});