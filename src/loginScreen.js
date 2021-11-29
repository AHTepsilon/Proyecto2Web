import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, push} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

const db = getDatabase();
const auth = getAuth();

const email = document.getElementById("emailText");
const password = document.getElementById("passwordText");

const logBtn = document.getElementById("logButton");
const forgotPassBtn = document.getElementById("forgotPassButton");

function login()
{
    signInWithEmailAndPassword(auth, email.value, password.value).then(
        (user_credential) =>
        {
            switchScreen();
        }
    )
    .catch(
        (error) =>
        {
            alert("Usuario o contraseña incorrectos");
        }
    )
}

function switchScreen()
{
    window.location.href = "landingPage.html";
}

logBtn.addEventListener("click", function()
{
    login();
});