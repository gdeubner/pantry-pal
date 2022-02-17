import { createContext, useState } from "react";

const SearchParametersContext = createContext({
    ingredients: [],
    totalIngredients: 0,
});

export function SearchParametersContextProvider(props) {
    const [userIngredients, setuserIngredients] = useState([]);

    const context = {
        ingredients: userIngredients,
        totalIngredients: userIngredients.length,
    };

    return (
        <SearchParametersContext.Provider value={context}>
            {props.children}
        </SearchParametersContext.Provider>
    );
}

export default SearchParametersContext;
