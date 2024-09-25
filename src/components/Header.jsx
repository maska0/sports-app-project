import categoryIcon from "../assets/css/imag/homebtn.svg";
import { Link } from "react-router-dom";

function Header(){
    return(
    <header class="header">
        <div class="container">
            <Link to="/" class="btn-category">
                <img src={categoryIcon} alt="Menu button"/>
            </Link>
        </div>
    </header>
    );
}

export default Header;