import React, { useState, useEffect } from "react";
import ProductThumb from "./ProductThumb";


function Catalog(props) {
    const [products, setProducts] = useState([]);

    useEffect(
        () => {
            fetch("/data/products.json").then(
                (response) => {
                    if (response.status === 200) {
                        response.json().then(
                            (productsTab)   => setProducts(productsTab),
                            (error)         => alert("error:" + error)
                        );
                    }
                },
                (error) => alert("error:" + error)
            );
        },
        []
    ); 

   

    return (
        <>
            {
                products.map(
                    (currentProduct, index) => {
                        return <ProductThumb key={index} {...currentProduct} add={props.add} />
                    }
                )
            }
        </>
    )
}


export default Catalog;