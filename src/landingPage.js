import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, push} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

const db = getDatabase();
const auth = getAuth();

const scannedItemsBtn = document.getElementById("scannedItemsButton");
const marketHouseBtn = document.getElementById("marketHouseButton");
const savedBtn = document.getElementById("savedButton");
const userBtn = document.getElementById("userButton");
const calendarBtn = document.getElementById("calendar");

marketHouseBtn.addEventListener("click", function()
{
    window.location.href = "marketHouse.html";
});

calendarBtn.addEventListener("click", function()
{
    window.location.href = "calendar.html";
});


scannedItemsBtn.addEventListener("click", function()
{
    window.location.href = "recipes.html";
});


savedBtn.addEventListener("click", function()
{
    window.location.href = "statistics.html";
});


userBtn.addEventListener("click", (e, ev) =>
{
    if(confirm("Do you wish to log out?"))
    {
        auth.signOut().then(()=>
        {
            window.location.href = "index.html";
        })
        .catch((error)=>
        {
            alert(error.message);
        });
    }
});