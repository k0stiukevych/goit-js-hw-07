const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', toSubmit);

function toSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        return console.log("All form fields must be filled in!");
    }

    console.log(`Login: ${email.trim()}, Password: ${password.trim()}`);
    
    form.reset();
}