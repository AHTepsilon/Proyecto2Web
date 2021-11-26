import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, push} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
const db = getDatabase();
const auth = getAuth();

const username = document.getElementById("usernameText");
const email = document.getElementById("emailText");
const password = document.getElementById("passwordText");
const cPassword = document.getElementById("cPasswordText");

const sUpBtn = document.getElementById("logButton");

function switchScreen()
{
    window.location.href = "landingPage.html";
}

function register(e, event)
{
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((user_credential) => 
    {
        console.log(user_credential);
        switchScreen();
    })
    .catch((error) =>
    {
        alert("Email or password invalid, please try again");
        console.log(error.message);
    });
}

sUpBtn.addEventListener("click", function()
{
    register();
});