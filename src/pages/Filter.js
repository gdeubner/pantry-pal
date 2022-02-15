import IngredientFilter from "../components/RecipeFilters/IngredientFilter";
import classes from "./Filter.module.css";

function FilterPage(props) {
  return (
    <section>
      <h1>What do you have on hand?</h1>
      <IngredientFilter />
    </section>
  );
}

export default FilterPage;
