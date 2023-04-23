// Here we establish variables for some of the DOM nodes, which
// we'll use when confirming that both passwords match


const password1 = document.getElementById("user_password");
const password2 = document.getElementById("confirm_password");
const passwordError = document.getElementById("PasswordError");

password1.addEventListener("input", (event) => {

    if (password1.value == password2.value) {
        passwordError.style.color = "white";
        password1.style.borderColor = "black";
        password2.style.borderColor = "black";
    } else {
        passwordError.style.color = "red";
        password1.style.borderColor = "red";
        password2.style.borderColor = "red";
    }
});

password2.addEventListener("input", (event) => {

    if (password1.value == password2.value) {
        passwordError.style.color = "white";
        password1.style.borderColor = "black";
        password2.style.borderColor = "black";
    } else {
        passwordError.style.color = "red";
        password1.style.borderColor = "red";
        password2.style.borderColor = "red";
    }
});