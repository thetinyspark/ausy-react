import React, { useState, useEffect } from "react";
function Cart(props) {

    const [products, setProducts] = useState([]);
    
    useEffect(
        () => {
            fetch("/data/products.json").then(
                (response) => {
                    if (response.status === 200) {
                        response.json().then(

                            (allProducts) => {

                                const tab = [];
                                const ids = props.products;

                                for (let i = 0; i < ids.length; i++) {
                                    const currentId = parseInt(ids[i]);
                                    for (let j = 0; j < allProducts.length; j++) {
                                        const currentProduct = allProducts[j];

                                        if (parseInt(currentProduct.id) === currentId)
                                            tab.push(currentProduct)
                                    }
                                }

                                setProducts(tab);

                            },
                            (error) => alert("error:" + error)
                        );
                    }
                },
                (error) => alert("error:" + error)
            );
        },
        [props.products]
    );


    return (
        
        <ul>
            {
                
                products.map(
                    (current, index) => {
                        return (
                            <li key={index}>{current.name}
                                <button onClick={ () => props.onDelete(current.id) }>X</button>
                            </li>
                        );
                    }
                )
            }
        </ul>
    )
}

export default Cart;