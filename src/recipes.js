import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, push} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";
import { recipes_cards } from "./recipes_cards";

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

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


function updateRecipeList()
{

    const reCard = new recipes_cards("Oat Banana Hot Cakes",
     "2 bananas <br> 2 eggs <br><br> 1/2 cup rolled oats <br><br> 1/2 teaspoon baking powder <br><br> pinch of salt"
     );
    const reCard2 = new recipes_cards("bepsi", 
     "mmmmm bespi"
        );

    breakfastBtn.addEventListener("click", (e, ev) =>
    {

        recipeL.appendChild(reCard.drawBreakfastCards());
        recipeL.appendChild(reCard2.drawBreakfastCards());

        console.log(reCard);
        console.log(reCard2);
    });
}

updateRecipeList();