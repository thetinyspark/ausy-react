import React from "react";

function ProductDetail(props){

    console.log(props);

    const addToCart = () => {
        props.add(props.match.params.id);
    };

    return (
        <>
            {props.match.params.id}
            {/* <h2>{props.name}</h2>
            <p>Prix: {props.price}</p>
            <img src={props.img} alt={props.name} />
            <button onClick={addToCart} >Ajouter au panier</button> */}
        </>
    );
}


export default ProductDetail;