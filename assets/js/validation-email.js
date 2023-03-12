import { valida } from "./validation-inputs.js";

const btnSubmit = document.querySelector(".formcontato__botao");

btnSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        const inputs = document.querySelector(".formcontato__input").value;
        const message = document.querySelector(".formcontato__textarea").value;
        window.location.href = `mailto:redgo110.krextro@gmail.com?subject=sentFromForm&body=Nombre%3A%20${inputs}%0AMensaje%3A%20${message}`
})