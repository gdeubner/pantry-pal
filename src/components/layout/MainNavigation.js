import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
    return (
        <header className={classes.sidenav}>
            <div className={classes.logo}>
                <u>Pantry</u> <u>Partner</u>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Find Recipes</Link>
                    </li>
                    <li>
                        <Link to="/filter">Set Filter</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
