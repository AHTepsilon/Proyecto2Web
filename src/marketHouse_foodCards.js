import { getDatabase, ref, set, onValue, push } from 'firebase/database';

export class marketHouse_foodCards
{
    constructor(foodItem)
    {
        this.foodItem = foodItem;
    }

    render()
    {
        let card = document.createElement("div");
        card.className = "food_card";

        let foodName = document.createElement("h2");
        foodName.className = "food_card_name";
        foodName.innerHTML = this.foodItem.name;

        let foodQuantity = document.createElement("h3");
        foodQuantity.className = "food_card_amount";
        foodQuantity.innerHTML = "Amount: " + this.foodItem.quantity;

        let foodWeight = document.createElement("h3");
        foodWeight.className = "food_card_weight";
        foodWeight.innerHTML = "Weight: " + this.foodItem.weight + "kg";

        let foodBoughtIn = document.createElement("h4");
        foodBoughtIn.className = "food_bought_days";
        foodBoughtIn.innerHTML = "How long ago was it bought: " + this.foodItem.bought + " days ago";

        let foodExpiresIn = document.createElement("h4");
        foodExpiresIn.className = "food_expires_in";
        foodExpiresIn.innerHTML = "Expires in: " + this.foodItem.expires + " days";

        card.appendChild(foodName);
        card.appendChild(foodQuantity);
        card.appendChild(foodWeight);
        card.appendChild(foodBoughtIn);
        card.appendChild(foodExpiresIn);

        return card;
    }

    /*freshnessColor()
    {
        document.addEventListener("DOMContentLoaded", function()
        {
            if(this.foodItem.EXPIRES >= 15)
            {
                //document.getElementById("food_card_name").style.backgroundColor = "purple";

                console.log("1");
            }
    
            else if(this.foodItem.EXPIRES >= 5 && this.foodItem.EXPIRES < 15)
            {
                //cardBg.style.backgroundColor = "#65DEF1";
    
                //document.getElementById("food_card_name").style.backgroundColor = "purple";

                console.log("2");
            }
    
            else if(this.foodItem.EXPIRES >= 1 && this.foodItem.EXPIRES < 5)
            {
                //cardBg.style.backgroundColor = "#F7B801";
    
               // document.getElementById("food_card_name").style.backgroundColor = "purple";

               console.log("3");
            }
            
            else if(this.foodItem.EXPIRES < 1)
            {
                //cardBg.style.backgroundColor = "#FF7A00";
    
                //document.getElementById("food_card_name").style.backgroundColor = "purple";

                console.log("4");
            }
        })
    }*/
}