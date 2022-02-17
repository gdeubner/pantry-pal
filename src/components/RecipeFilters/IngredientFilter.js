import Ingredient from "./Ingredient";
import classes from "./IngredientFilter.module.css";
import { ListGroup, Stack } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";

function IngredientFilter() {
    const [ingredient, setIngredient] = React.useState("");
    const [ingredientList, setIngredientList] = React.useState([]);
    const navigate = useNavigate();

    function addIngredientHandler(e) {
        e.preventDefault();

        if (ingredient.length > 0) {
            const newIngredient = {
                id: new Date().getTime(),
                text: ingredient,
            };
            setIngredientList([...ingredientList].concat(newIngredient));
            setIngredient("");
        }
    }

    function removeIngredientHandler(id) {
        console.log("removed item");
        const updatedIngredientList = [...ingredientList].filter(
            (ingr) => ingr.id !== id
        );
        setIngredientList(updatedIngredientList);
    }

    function searchHandler(event) {
        navigate("/");
    }

    return (
        <Stack gap={2} className="col-md-5 mx-auto">
            <div>Enter the food you have on hand</div>

            <form
                className={classes.ingredientForm}
                onSubmit={addIngredientHandler}
            >
                <input
                    type="text"
                    onChange={(e) => setIngredient(e.target.value)}
                    value={ingredient}
                ></input>
                <button type="submit" className="btn btn-light">
                    Add
                </button>
            </form>
            <ListGroup className={classes.ingredientFormList}>
                {ingredientList.map((curIngredient) => (
                    <Ingredient
                        ingredient={curIngredient.text}
                        removeHandler={removeIngredientHandler}
                        id={curIngredient.id}
                    />
                ))}
            </ListGroup>

            <button className="mx-auto" onClick={searchHandler}>
                Search for Recipes
            </button>
        </Stack>
    );
}

export default IngredientFilter;
