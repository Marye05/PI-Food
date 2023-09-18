import { Link } from "react-router-dom";
import style from "./NavBar.module.css";


const NavBar = () => {
    return(
        
        <nav className={style.contenedor}>
        <ul className={style.subcontenedor}>
            <li>PI-Foods Maryeris Orozco</li>
            <div>
                <Link to='/home' className={style.link}>HOME</Link>
                <Link to='/create' className={style.link}>CREATE RECIPE</Link>
            
            </div>
        </ul>
    </nav>
    )

};

export default NavBar;