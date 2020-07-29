import React from "react";

function ProductThumb(props){
    const addToCart = () => {
        props.add(props.name);
    };

    return (
        <>
            <h2>{props.name}</h2>
            <p>Prix: {props.price}</p>
            <img src={props.img} alt={props.name} />
            <button onClick={addToCart} >Ajouter au panier</button>
        </>
    );
}


export default ProductThumb;