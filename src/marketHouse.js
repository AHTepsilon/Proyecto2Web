import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, push} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";
import { marketHouse_foodCards } from "./marketHouse_foodCards";

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

const fruitsBtn = document.getElementById("fruitsButton");
const vegsBtn = document.getElementById("vegsButton");
const nutsBtn = document.getElementById("nutsButton");

const logoHyperlink = document.getElementById("imageLogo");

const foodCardsD = document.getElementById("foodCardsDiv");

const orangeImg = document.getElementById("orangeSq");
const yellowImg = document.getElementById("yellowSq");
const blueImg = document.getElementById("blueSq");
const greenImg = document.getElementById("greenSq");


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

function getFruits()
{
    const dbRef = ref(db, 'foodAtHome' + '/' + 'fruits');

    onValue(dbRef, (snapshot) =>
    {
        const data = snapshot.val();
        console.log(data);
        updateFoodList(data);
    });
}

function getVegs()
{
    const dbRef = ref(db, 'foodAtHome' + '/' + 'vegetables');

    onValue(dbRef, (snapshot) =>
    {
        const data = snapshot.val();
        console.log(data);
        updateFoodList(data);
    });
}

function getNuts()
{
    const dbRef = ref(db, 'foodAtHome' + '/' + 'nuts');

    onValue(dbRef, (snapshot) =>
    {
        const data = snapshot.val();
        console.log(data);
        updateFoodList(data);
    });
}

function updateFoodList(info)
{
    if(info)
    {
        foodCardsD.innerHTML = "";

        Object.keys(info).forEach((key, index) =>
        {
            const foodItem = new marketHouse_foodCards(info[key]);
            foodCardsD.appendChild(foodItem.render());

            console.log(info[key].EXPIRES);

            if(info[key].EXPIRES >= 15)
            {
                const aye = document.createElement("img");
                aye.src = "images/gren.png";
                aye.className = "ayeImg";

                foodCardsD.appendChild(aye);
            }
    
            else if(info[key].EXPIRES >= 5 && info[key].EXPIRES < 15)
            {
                const aye = document.createElement("img");
                aye.src = "images/blu.png";
                aye.className = "ayeImg";

                foodCardsD.appendChild(aye);
            }
    
            else if(info[key].EXPIRES >= 1 && info[key].EXPIRES < 5)
            {
                const aye = document.createElement("img");
                aye.src = "images/yello.png";
                aye.className = "ayeImg";

                foodCardsD.appendChild(aye);
            }
            
            else if(info[key].EXPIRES < 1)
            {
                const aye = document.createElement("img");
                aye.src = "images/oreng.png";
                aye.className = "ayeImg";

                foodCardsD.appendChild(aye);
            }
        });
    }
}

fruitsBtn.addEventListener("click", (e, ev)=>
{
    getFruits();
});

vegsBtn.addEventListener("click", (e, ev) =>
{
    getVegs();
});

nutsBtn.addEventListener("click", (e, ev) =>
{
    getNuts();
})