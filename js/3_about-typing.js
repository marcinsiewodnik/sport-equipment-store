const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');

const txt = ["We offer good quality.", "We have a lot of customers.", "Find out and visit us."];

let activeLetter = -10;
let activeText = 0;

const addLetter = () => {

    if (activeLetter >= 0) spnText.textContent += txt[activeText][activeLetter];

    activeLetter++;

    if (activeLetter === txt[activeText].length) {

        activeLetter = -10;
        activeText++;

        return setTimeout(() => {

            if (activeText === txt.length) activeText = 0;

            spnText.textContent = "";

            addLetter();

        }, 1500);
    }

    setTimeout(addLetter, 100);
}

addLetter();

setInterval(() => spnCursor.classList.toggle('active'), 400);