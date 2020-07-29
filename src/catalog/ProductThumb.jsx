import React from "react";

import "./ProductThumb.css";
import { Link } from "react-router-dom";

function ProductThumb(props) {

    return (
        <div className="thumb">
            <h2>{props.name}</h2>
            <p>Prix: {props.price}</p>
            <img src={props.img} alt={props.name} />
        </div>
    );
}


export default ProductThumb;