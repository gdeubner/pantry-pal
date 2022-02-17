import { useContext } from "react";
import SearchParametersContext from "../store/searchParameters-context";

function ResultsPage(props) {
    const searchParametersCtx = useContext(SearchParametersContext);

    return (
        <section>
            <h1>Results</h1>
            <p>{searchParametersCtx.ingredients}</p>
        </section>
    );
}

export default ResultsPage;
