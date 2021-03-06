import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, push} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";

import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
const auth = getAuth();

const scannedItemsBtn = document.getElementById("scannedItemsButton");
const marketHouseBtn = document.getElementById("marketHouseButton");
const savedBtn = document.getElementById("savedButton");
const userBtn = document.getElementById("userButton");
const calendarBtn = document.getElementById("calendar");

const logoHyperlink = document.getElementById("imageLogo");

onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user is loged in");
      const uid = user.uid;
    } else {
  
      window.location.href = "index.html";
  
    }
  });

logoHyperlink.addEventListener("click", function()
{
    window.location.href = "landingPage.html";
})

calendarBtn.addEventListener("click", function()
{
    window.location.href = "calendar.html";
});

scannedItemsBtn.addEventListener("click", function()
{
    window.location.href = "recipes.html";
});

marketHouseBtn.addEventListener("click", function()
{
    window.location.href = "marketHouse.html";
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

