import { auth, app } from "./firebase.mjs";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

function createdAccount() {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Account created!",
        showConfirmButton: false,
        timer: 1000
    });
}


function errorAccount(error) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: error,
        showConfirmButton: false,
        timer: 1000
    });
}

let mainDiv = document.getElementById('mainDiv');

function renderSignupForm() {
    mainDiv.innerHTML = `<h1 class="pt-3 pb-3">Signup Form</h1>
        <div class="container d-flex justify-content-center gap-2 mb-4">
            <button id="signupbtn" class="btn btn-outline-primary px-5" disabled>Signup</button>
            <button id="loginaccbtn" class="btn btn-primary px-5">Login</button>
        </div>
        <label for="email" class="fs-4">Email</label>
        <input class="rounded-2 form-control mt-2 mb-2" id="email" type="email">
        <label for="pass" class="fs-4">Password</label>
        <input class="rounded-2 form-control mt-2" id="pass" type="password">
        <button id="createbtn" class="btn btn-success mt-5 mx-5">Create</button>`;

    document.getElementById('loginaccbtn').addEventListener("click", renderLoginForm);
    document.getElementById('createbtn').addEventListener("click", function () {
        let email = document.getElementById('email').value;
        let password = document.getElementById('pass').value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                createdAccount();
            })
            .catch((error) => {
                const errorMessage = error.message;
                errorAccount(errorMessage);
            });
    });
}

function renderLoginForm() {
    mainDiv.innerHTML = `<h1 class="pt-3 pb-3">Login Form</h1>
        <div class="container d-flex justify-content-center gap-2 mb-4">
            <button id="signupbtn" class="btn btn-primary px-5">Signup</button>
            <button id="loginaccbtn" class="btn btn-outline-primary px-5" disabled>Login</button>
        </div>
        <label for="email" class="fs-4">Email</label>
        <input class="rounded-2 form-control mt-2 mb-2" id="email" type="email">
        <label for="pass" class="fs-4">Password</label>
        <input class="rounded-2 form-control mt-2" id="pass" type="password">
        <button id="loginbtn" class="btn btn-primary mt-5 mx-5">Login</button>`;

    document.getElementById('signupbtn').addEventListener("click", renderSignupForm);
    document.getElementById('loginbtn').addEventListener("click", function () {
        let email = document.getElementById('email').value;
        let password = document.getElementById('pass').value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                window.location.href = 'dashboard.html';
            })
            .catch((error) => {
                const errorMessage = error.message;
                errorAccount(errorMessage);
            });
    });
}

document.getElementById('signupbtn').addEventListener("click", renderSignupForm);
document.getElementById('loginaccbtn').addEventListener("click", renderLoginForm);


document.getElementById('createbtn').addEventListener("click", function () {
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            createdAccount();
        })
        .catch((error) => {
            const errorMessage = error.message;
            errorAccount(errorMessage);
        });
});
