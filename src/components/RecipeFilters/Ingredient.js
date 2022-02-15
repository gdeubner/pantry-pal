import classes from "./Ingredient.module.css";
import CloseButton from 'react-bootstrap/CloseButton';
import Card from "../ui/Card";

function Ingredient() {
    return (
        <li>
            <Card>
                <div className={classes.ingredient}>New Ingredient</div>
                <CloseButton/>
            </Card>
            
        </li>
    );
}

export default Ingredient;
