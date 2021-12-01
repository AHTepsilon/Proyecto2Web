import { getDatabase, ref, set, onValue, push } from 'firebase/database';

export class recipes_cards
{

    constructor(recipe)
    {
        this.recipe = recipe;
    }

    drawCards()
    {   
        console.log("yeah okay");

        let card = document.createElement("div");
        card.className = "card_recipe";

        let recipeTitle = document.createElement("h3");
        recipeTitle.className = "card_recipe_title";
        recipeTitle.innerHTML = this.recipe.NAME;

        let recipeIngredients = document.createElement("p");
        recipeIngredients.className = "card_ingredients";
        recipeIngredients.innerHTML = this.recipe.INGREDIENTS;

        let recipeInstructions = document.createElement("p");
        recipeInstructions.className = "card_instructions";
        recipeInstructions.innerHTML = this.recipe.INSTRUCTIONS;

        card.appendChild(recipeTitle);
        card.appendChild(recipeIngredients);
        card.appendChild(recipeInstructions);

        return card;
    }
}