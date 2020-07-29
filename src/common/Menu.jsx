import React from "react"; 
import {Link} from "react-router-dom";

function Menu(props){
    return ( 
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/catalog">Catalogue</Link></li>
                <li><Link to="/cart">Mon panier</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;