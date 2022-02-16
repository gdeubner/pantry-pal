import classes from "./Ingredient.module.css";
import CloseButton from "react-bootstrap/CloseButton";
import Card from "../ui/Card";
import { ListGroup, ListGroupItem } from "react-bootstrap";

function Ingredient() {
    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="fw-bold">Ingredient</div>
            <CloseButton />
        </ListGroup.Item>
    );
}

export default Ingredient;
