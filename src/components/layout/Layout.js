import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import { Stack } from "react-bootstrap";

function Layout(props) {
    return (
        <Stack direction="horizontal">
            <MainNavigation />
            <main>{props.children}</main>
        </Stack>
    );
}

export default Layout;
