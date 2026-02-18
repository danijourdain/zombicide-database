import { Link }  from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <h1>Home</h1>
            </Link>
            <Link to="/board">
                <h1>Player Board</h1>
            </Link>
        </header>
    );
}

export default Header;