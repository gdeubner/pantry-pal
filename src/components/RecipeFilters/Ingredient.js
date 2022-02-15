import classes from "./Ingredient.module.css";

function Ingredient() {
    return (
        <li>
            <div className={classes.ingredient}>New Ingredient</div>
            <div className={classes.closeButton}>
                <p>X</p>
            </div>
        </li>
    );
}

export default Ingredient;
