import React from "react";

function ProductThumb(props){

    return (
        <>
            <h2>{props.name}</h2>
            <p>Prix: {props.price}</p>
            <img src={props.img} alt={props.name} />
        </>
    );
}


export default ProductThumb;