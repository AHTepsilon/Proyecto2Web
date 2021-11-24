import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, push} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

const username = document.getElementById("usernameText");
const password = document.getElementById("passwordText");

const logBtn = document.getElementById("logButton");
const forgotPassBtn = document.getElementById("forgotPassButton");

logBtn.addEventListener("click", function()
{
    window.location.href = "landingPage.html";
});