import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Find Recipes</Link>
                    </li>
                    <li>
                        <Link to="/filter">Apply Filter</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
