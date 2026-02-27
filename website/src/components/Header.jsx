import { Link }  from "react-router-dom";
import style from "./Header.module.css"

const BASE_URL = import.meta.env.BASE_URL

const Header = () => {
    return (
        <header className={style['header']}>
            <div className={style['nav-container']}>
                <Link to="/">
                    <h1>Home</h1>
                </Link>
                <Link to="/board">
                    <h1>Player Board</h1>
                </Link>
            </div>
            <img src={ BASE_URL + "images/black-yellow-stripes.png"}/>
        </header>
    );
}

export default Header;