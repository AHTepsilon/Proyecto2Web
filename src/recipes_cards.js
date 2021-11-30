
export class recipes_cards
{

    constructor(recipe_title, recipe_ingredients)
    {
        this.recipe_title = recipe_title;
        this.recipe_ingredients = recipe_ingredients;
    }

    drawBreakfastCards()
    {   
        console.log("yeah okay");

        let card = document.createElement("div");
        card.className = "card_recipe";

        let recipeTitle = document.createElement("h3");
        recipeTitle.className = "card_recipe_title_1";
        recipeTitle.innerHTML = this.recipe_title;

        let recipeIngredients = document.createElement("p");
        recipeIngredients.className = "card_ingredients_1";
        recipeIngredients.innerHTML = this.recipe_ingredients;

        card.appendChild(recipeTitle);
        card.appendChild(recipeIngredients);

        return card;
    }
}