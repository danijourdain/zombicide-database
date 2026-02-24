import { Link }  from "react-router-dom";
import style from "./Header.module.css"

const Header = () => {
    return (
        <header className={style.header}>
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