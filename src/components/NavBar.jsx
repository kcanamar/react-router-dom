import { Link } from "react-router-dom";

export default function NavBar(props) {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/pokemon">Pokemon</Link>
                </li>
                <li>
                    <Link to="/pokemon/new">New Pokemon</Link>
                </li>
            </ul>
        </nav>
    )
}