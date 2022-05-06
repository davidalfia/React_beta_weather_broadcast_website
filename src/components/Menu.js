
import {Link} from 'react-router-dom';
import {Outlet} from "react-router";

export default function Menu(props) {

    return (
        <div>
            <h1>My Weather Forecast</h1>
            <Link to="/">Forecast</Link> {' '} | {' '}
            <Link to="/locations">Locations</Link>
            <Outlet />
        </div>
    );
}