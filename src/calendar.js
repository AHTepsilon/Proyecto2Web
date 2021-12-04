import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, push} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";
import { marketHouse_foodCards } from "./marketHouse_foodCards";

import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
const db = getDatabase();
const auth = getAuth();

const scannedItemsBtn = document.getElementById("scannedItemsButton"); //recipes button
const marketHouseBtn = document.getElementById("marketHouseButton");
const savedBtn = document.getElementById("savedButton");
const userBtn = document.getElementById("userButton");

const logoHyperlink = document.getElementById("imageLogo");

const itemsShowcase = document.getElementById("itemsShowcase");
const itemsShowcase2 = document.getElementById("itemsShowcase2");
const itemsShowcase3 = document.getElementById("itemsShowcase3");

const orangeImg = document.getElementById("orangeSq");
const yellowImg = document.getElementById("yellowSq");
const blueImg = document.getElementById("blueSq");
const greenImg = document.getElementById("greenSq");

logoHyperlink.addEventListener("click", function()
{
    window.location.href = "landingPage.html";
})

marketHouseBtn.addEventListener("click", function()
{
    window.location.href = "marketHouse.html";
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

function getFood()
{
    const vegsRef = ref(db, 'foodAtHome' + '/' + 'vegetables');
    const nutsRef = ref(db, 'foodAtHome' + '/' + 'nuts');
   const dbRef = ref(db, 'foodAtHome' + '/' + 'fruits');

   onValue(dbRef, (snapshot) =>
   {
       const data = snapshot.val();
       console.log(data);
       updateFoodList(data);
   });

    onValue(vegsRef, (snapshot) =>
    {
        const data = snapshot.val();
        console.log(data);
        updateFoodList2(data);
    });

    onValue(nutsRef, (snapshot) =>
    {
        const data = snapshot.val();
        console.log(data);
        updateFoodList3(data);
    });
}

function updateFoodList(info)
{
    if(info)
    {
        itemsShowcase.innerHTML = "";

        Object.keys(info).forEach((key, index) =>
        {
            const foodItem = new marketHouse_foodCards(info[key]);
            itemsShowcase.appendChild(foodItem.render());

            console.log(info[key].EXPIRES);
        });
    }
}

function updateFoodList2(info)
{
    if(info)
    {
        itemsShowcase2.innerHTML = "";

        Object.keys(info).forEach((key, index) =>
        {
            const foodItem = new marketHouse_foodCards(info[key]);
            itemsShowcase2.appendChild(foodItem.render());

            console.log(info[key].EXPIRES);
        });
    }
}

function updateFoodList3(info)
{
    if(info)
    {
        itemsShowcase3.innerHTML = "";

        Object.keys(info).forEach((key, index) =>
        {
            const foodItem = new marketHouse_foodCards(info[key]);
            itemsShowcase3.appendChild(foodItem.render());

            console.log(info[key].EXPIRES);
        });
    }
}

getFood();