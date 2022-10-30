// Login------------------------------------------------------------------------------------
document.querySelector("#changeTabLogin").onclick = () => {
    changeTab(event, "login");
};
document.querySelector("#changeTabSignUp").onclick = () => {
    changeTab(event, "signUp");
};
function changeTab(evt, formName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(formName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8q5oMbAPiCzSUgLnv8NhC2TcKmh7kdOU",
    authDomain: "halloween-web-7b7a5.firebaseapp.com",
    projectId: "halloween-web-7b7a5",
    storageBucket: "halloween-web-7b7a5.appspot.com",
    messagingSenderId: "260679276121",
    appId: "1:260679276121:web:7a95ccb2e01f539b7bc348",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

document.querySelector("form#signUp").onsubmit = function (event) {
    event.preventDefault();
    const email = this.email.value.trim();
    const password = this.password.value.trim();
    const confirmPassword = this.confirmPassword.value.trim();
    if (password === confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                localStorage.setItem("user", email);
                // Chuyển đến trang chủ
                window.location.href = "/html/";
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    } else {
        alert("Confirm password and password does not match");
    }
};

document.querySelector("form#login").onsubmit = (event) => {
    event.preventDefault();
    let form = event.target;
    let email = form.emailLogin.value.trim();
    let password = form.passwordLogin.value.trim();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            localStorage.setItem("user", email);
            // Chuyển đến trang chủ
            window.location.href = "/html/";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
};
