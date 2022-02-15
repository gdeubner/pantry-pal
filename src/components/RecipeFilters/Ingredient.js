import classes from "./Ingredient.module.css";

function Ingredient() {
    return (
        <li>
            <div className={classes.ingredient}>New Ingredient</div>
            <button>delete</button>
        </li>
    );
}

export default Ingredient;
