import Ingredient from "./Ingredient";
import classes from "./IngredientFilter.module.css";
import Card from "react-bootstrap/Card";
import { ListGroup, Stack } from "react-bootstrap";
import React from "react";

function IngredientFilter() {
    return (
        <Stack gap={2} className="col-md-5 mx-auto">
            <div>Enter the food you have on hand</div>

            <form className={classes.ingredientForm}>
                <input type="text" id="new_ingredient"></input>
                <button className="btn btn-light">Add</button>
            </form>
            <div className={classes.ingredientFormList}>
                <ListGroup className={classes.ingredientFormList}></ListGroup>
            </div>
        </Stack>
    );
}

export default IngredientFilter;
