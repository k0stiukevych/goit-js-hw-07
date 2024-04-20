const nameInput = document.querySelector("#name-input");

const message = document.querySelector("#name-output");

nameInput.addEventListener("input", function () {
    const trimmedName = nameInput.value.trim();

    if (trimmedName === "") {
        message.textContent = 'Anonymous';
    } else {
        message.textContent = trimmedName;
    }
});