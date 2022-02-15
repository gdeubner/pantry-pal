import Ingredient from "./Ingredient";
import classes from "./IngredientFilter.module.css";

function IngredientFilter() {
    return (
        <div>
            <form className={classes.ingredientForm}>
                <div>Enter the food you have on hand</div>
                <input type="text" id="new_ingredient"></input>
            </form>
            <ul>
                <Ingredient />
                <Ingredient />
                <Ingredient />
            </ul>
        </div>
    );
}

export default IngredientFilter;
