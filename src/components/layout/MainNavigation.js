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
                        <div className={classes.border}>
                            <Link to="/">Find Recipes</Link>
                        </div>
                    </li>
                    <li>
                        <div className={classes.border}>
                            <Link to="/filter">Set Filter</Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
