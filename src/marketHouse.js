import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, push} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

const scannedItemsBtn = document.getElementById("scannedItemsButton");
const marketHouseBtn = document.getElementById("marketHouseButton");
const savedBtn = document.getElementById("savedButton");
const userBtn = document.getElementById("userButton");
const calendarBtn = document.getElementById("calendar");

const logoHyperlink = document.getElementById("imageLogo");

logoHyperlink.addEventListener("click", function()
{
    window.location.href = "landingPage.html";
})

calendarBtn.addEventListener("click", function()
{
    window.location.href = "calendar.html";
});