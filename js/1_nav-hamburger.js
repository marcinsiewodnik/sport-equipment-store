const items = document.querySelectorAll('.fas, ul');

document.querySelector(".burger").addEventListener("click", () => {

    items.forEach(item => {

        item.classList.toggle("off")
    })
});