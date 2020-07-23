const form = document.querySelector('.contact form');
const formName =document.querySelector("#form-name");
const formEmail = document.querySelector("#form-email");
const formRequest = document.querySelector("#form-request");

let infoElement = null;

const handleSubmit = (e) => {

    e.preventDefault();

    const name = formName.value;
    const email = formEmail.value;
    const request = formRequest.value;

    clearData();

    const validate = validateInput(name, email, request);

    if(validate.check){

        handleCorrectInput(name, email, request, validate.description);
    } else {

        handleWrongInput(validate.description);
    }
}

const validateInput = (name, email, request) =>{

    let check = false;

    if(name.trim().length >= 8 && email.indexOf("@") != -1 && request.trim().length >= 8){

        check = true;
    }

    if(check){

        return {check, description: "Correct input"}

    }else {

        return {check, description: "Input incorrect. Name and request should have more than 8 characters. Email shoul contain @ symbol."}
    }

}

const handleCorrectInput = (name, email, request, description) => {

    const parameters = new URLSearchParams({name, email, request});

    const adress = "/" + parameters

    infoElement = document.createElement("p");
    infoElement.classList.add("form-info");
    infoElement.classList.add("correct");
    infoElement.innerText = description;

    form.appendChild(infoElement);

    // fetch((adress), {

    //     method: 'POST',
        
    // }).catch((e) => {

    //     console.log("Error: " + e);
    // })

}

const handleWrongInput = (description) => {

    infoElement = document.createElement("p");
    infoElement.classList.add("form-info");
    infoElement.innerText = description;

    form.appendChild(infoElement);
}

const clearData = () => {

    formName.value = "";
    formEmail.value = "";
    formRequest.value = "";

    if(infoElement != null){

        infoElement.remove();
    }
}

form.addEventListener('submit', handleSubmit);