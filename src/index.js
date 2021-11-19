import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, push} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

const loginBtn = document.getElementById("loginButton");
const signupBtn = document.getElementById("signUpButton");

const googleSignInBtn = document.getElementById("googleSignInButton");
const facebookSignInBtn = document.getElementById("facebookSignInButton");
const outlookSignInBtn = document.getElementById("outlookSignInButton");

loginBtn.addEventListener("click", function()
{
    window.location.href = "loginScreen.html";
});

signupBtn.addEventListener("click", function()
{
    window.location.href = "signUpScreen.html";
});
