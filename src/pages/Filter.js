import IngredientFilter from "../components/RecipeFilters/IngredientFilter";

function FilterPage(props) {
    return (
        <section>
            <h1>What do you have on hand?</h1>
            <IngredientFilter />
        </section>
    );
}

export default FilterPage;
