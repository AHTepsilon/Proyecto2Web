import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, push} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

const username = document.getElementById("usernameText");
const email = document.getElementById("emailText");
const password = document.getElementById("passwordText");
const cPassword = document.getElementById("cPasswordText");

const sUpBtn = document.getElementById("logButton");

sUpBtn.addEventListener("click", function()
{
    window.location.href = "landingPage.html";
});