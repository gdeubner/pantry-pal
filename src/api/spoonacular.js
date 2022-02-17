const root = "https://api.spoonacular.com";
const key = "29ad53372e5e40e69a3d8504d4ac020a";

function getRecipesRoute(ingredientList) {
    return `${root}/recipes/findByIngredients?apiKey=${key}&ingredients=${ingredientList.join()}`;
}
