import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, push} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";
import { recipes_cards } from "./recipes_cards";

import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
const db = getDatabase();
const auth = getAuth();

const scannedItemsBtn = document.getElementById("scannedItemsButton");
const marketHouseBtn = document.getElementById("marketHouseButton");
const savedBtn = document.getElementById("savedButton");
const userBtn = document.getElementById("userButton");
const calendarBtn = document.getElementById("calendar");

const breakfastBtn = document.getElementById("breakfastButton");
const lunchBtn = document.getElementById("lunchButton");
const dinnerBtn = document.getElementById("dinnerButton");
const snackBtn = document.getElementById("snackButton");

let recipeL = document.getElementById("recipeList");

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

marketHouseBtn.addEventListener("click", function()
{
    window.location.href = "marketHouse.html";
});

calendarBtn.addEventListener("click", function()
{
    window.location.href = "calendar.html";
});

savedBtn.addEventListener("click", function()
{
    window.location.href = "statistics.html";
}); 

function getBreakfastRecipes()
{
    const dbRef = ref(db, 'recipes' + '/' + 'breakfast');

    onValue(dbRef, (snapshot) =>
    {
        const data = snapshot.val();
        console.log(data);
        updateRecipeList(data);
    });
}

function getLunchRecipes()
{
    const dbRef = ref(db, 'recipes' + '/' + 'lunch');

    onValue(dbRef, (snapshot) =>
    {
        const data = snapshot.val();
        console.log(data);
        updateRecipeList(data);
    });
}

function getDinnerRecipes()
{
    const dbRef = ref(db, 'recipes' + '/' + 'dinner');

    onValue(dbRef, (snapshot) =>
    {
        const data = snapshot.val();
        console.log(data);
        updateRecipeList(data);
    });
}

function getSnackRecipes()
{
    const dbRef = ref(db, 'recipes' + '/' + 'snack');

    onValue(dbRef, (snapshot) =>
    {
        const data = snapshot.val();
        console.log(data);
        updateRecipeList(data);
    });
}

function updateRecipeList(data)
{
    if(data)
    {
        recipeL.innerHTML = "";

        Object.keys(data).forEach((key, index) =>
        {
            console.log(key, index);
            const recipe = new recipes_cards(data[key]);

            recipeL.appendChild(recipe.drawCards());
        });
    }
}

breakfastBtn.addEventListener("click", (e, ev) =>
{
    console.log("wow");
    getBreakfastRecipes();
});

lunchBtn.addEventListener("click", (e, ev) =>
{
    console.log("wow");
    getLunchRecipes();
});

dinnerBtn.addEventListener("click", (e, ev) =>
{
    console.log("wow");
    getDinnerRecipes();
});

snackBtn.addEventListener("click", (e, ev) =>
{
    console.log("wow");
    getSnackRecipes();
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